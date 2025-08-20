import React from 'react';
import styled from 'styled-components';
import { T, useTranslate } from '@tolgee/react';
import ConfirmDialog from '../components/ui/ConfirmDialog';

const Card = styled.div`
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 20px;
`;

const Grid = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr;
`;

const Form = styled.form`
  display: grid;
  gap: 16px;
`;

const Row = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: 180px 1fr;
  align-items: center;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const Label = styled.label`
  font-weight: 600;
`;

const Inline = styled.div`
  display: flex; gap: 10px; align-items: center; flex-wrap: wrap;
`;

const Input = styled.input`
  width: 140px;
  max-width: 100%;
  padding: 10px 12px;
  border: 1px solid var(--border);
  background: var(--card);
  color: var(--text);
  border-radius: 10px;
  outline: none;
  &[aria-invalid="true"] { border-color: #ef4444; }
`;

const Select = styled.select`
  padding: 10px 12px;
  border: 1px solid var(--border);
  background: var(--card);
  color: var(--text);
  border-radius: 10px;
`;

const Button = styled.button`
  padding: 10px 14px;
  border: 1px solid var(--border);
  background: var(--card);
  color: var(--text);
  border-radius: 10px;
  &:hover { filter: brightness(1.02); }
`;

const Tag = styled.span`
  display: inline-block;
  padding: 4px 10px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: ${({ tone }) => tone || 'var(--card)'};
  color: var(--text);
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  th, td {
    border-bottom: 1px solid var(--border);
    padding: 10px;
    text-align: left;
  }
  th { font-weight: 700; }
`;

const Help = styled.div`
  font-size: 12px; color: var(--muted);
`;

const ErrorText = styled.div`
  font-size: 12px; color: #ef4444;
`;

const Actions = styled.div`
  display: flex; gap: 10px; flex-wrap: wrap;
`;

function clamp(n, min, max) {
    return Math.max(min, Math.min(max, n));
}

// --- unit helpers ---
const LB_TO_KG = 0.45359237;
const FT_TO_CM = 30.48;
const IN_TO_CM = 2.54;

function toKg(weight, unit) {
    const w = Number(weight);
    if (!Number.isFinite(w)) return NaN;
    return unit === 'lb' ? w * LB_TO_KG : w; // kg default
}
function toMeters({ cm, ft, inch }, unit) {
    if (unit === 'cm') {
        const c = Number(cm);
        if (!Number.isFinite(c)) return NaN;
        return c / 100;
    }
    // ft+in
    const f = Number(ft);
    const i = Number(inch);
    if (!Number.isFinite(f) || !Number.isFinite(i)) return NaN;
    const totalCm = f * FT_TO_CM + i * IN_TO_CM;
    return totalCm / 100;
}
function fromKg(kg, unit) {
    const val = unit === 'lb' ? kg / LB_TO_KG : kg;
    return val;
}

// BMI categories (WHO)
function categoryOf(bmi) {
    if (bmi < 18.5) return { key: 'underweight', color: 'rgba(59,130,246,.15)' };       // blue-ish
    if (bmi < 25) return { key: 'normal', color: 'rgba(34,197,94,.15)' };              // green-ish
    if (bmi < 30) return { key: 'overweight', color: 'rgba(234,179,8,.15)' };          // amber-ish
    if (bmi < 35) return { key: 'obese1', color: 'rgba(248,113,113,.18)' };            // red-ish
    if (bmi < 40) return { key: 'obese2', color: 'rgba(239,68,68,.22)' };
    return { key: 'obese3', color: 'rgba(220,38,38,.26)' };
}

function healthyWeightRangeKg(meters) {
    // BMI healthy range 18.5 - 24.9 -> weight = BMI * m^2
    const low = 18.5 * meters * meters;
    const high = 24.9 * meters * meters;
    return [low, high];
}

function formatDateTimeIST(iso) {
    const d = new Date(iso);
    const parts = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Kolkata',
        month: 'short',          // "Aug"
        day: '2-digit',          // "21"
        year: 'numeric',         // "2025"
        hour: '2-digit',         // "01"
        minute: '2-digit',       // "08"
        second: '2-digit',       // "53"
        hour12: false            // 24h clock
    }).formatToParts(d);

    const get = (type) => parts.find(p => p.type === type)?.value || '';
    const month = get('month');    // Aug
    const day = get('day');        // 21
    const year = get('year');      // 2025
    const hour = get('hour');      // 01
    const minute = get('minute');  // 08
    const second = get('second');  // 53

    return `${month} ${day}, ${year}, ${hour}:${minute}:${second} hrs`;
}

const HISTORY_KEY = 'bmi.history.v1';

export default function BMICalculator() {
    const { t } = useTranslate();
    const [weightUnit, setWeightUnit] = React.useState('kg');     // 'kg' | 'lb'
    const [heightUnit, setHeightUnit] = React.useState('cm');     // 'cm' | 'ftin'

    const [weight, setWeight] = React.useState('');               // string for controlled input
    const [cm, setCm] = React.useState('');
    const [ft, setFt] = React.useState('');
    const [inch, setInch] = React.useState('');

    const [bmi, setBmi] = React.useState(null);                   // number | null
    const [category, setCategory] = React.useState(null);
    const [range, setRange] = React.useState(null);               // [low, high] in selected weight unit

    const [errors, setErrors] = React.useState({});
    const [history, setHistory] = React.useState(() => {
        try {
            return JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
        } catch {
            return [];
        }
    });

    // Validate inputs with plausible ranges
    function validate() {
        const errs = {};
        const w = Number(weight);
        if (!(w > 0)) errs.weight = t('bmi.err.positive');
        else {
            const wkg = toKg(w, weightUnit);
            if (!(wkg >= 20 && wkg <= 300)) errs.weight = t('bmi.err.range.weight');
        }

        if (heightUnit === 'cm') {
            const c = Number(cm);
            if (!(c > 0)) errs.height = t('bmi.err.positive');
            else {
                if (!(c >= 100 && c <= 250)) errs.height = t('bmi.err.range.height');
            }
        } else {
            const f = Number(ft);
            const i = Number(inch);
            if (!(f > 0 || i > 0)) errs.height = t('bmi.err.positive');
            else {
                if (!(f >= 3 && f <= 8)) errs.height = t('bmi.err.range.height');
                if (!(i >= 0 && i < 12)) errs.heightIn = t('bmi.err.inches');
            }
        }
        setErrors(errs);
        return Object.keys(errs).length === 0;
    }

    function reset() {
        setWeight('');
        setCm('');
        setFt('');
        setInch('');
        setBmi(null);
        setCategory(null);
        setRange(null);
        setErrors({});
    }

    function handleCalculate(e) {
        e?.preventDefault();
        if (!validate()) return;

        const kg = toKg(weight, weightUnit);
        const meters = toMeters({ cm, ft, inch }, heightUnit);
        if (!Number.isFinite(kg) || !Number.isFinite(meters) || meters === 0) {
            setErrors({ generic: t('bmi.err.generic') });
            return;
        }
        const bmiVal = kg / (meters * meters);
        const bmiRounded = Number(bmiVal.toFixed(2));
        const cat = categoryOf(bmiRounded);

        const [lowKg, highKg] = healthyWeightRangeKg(meters);
        const lowDisplay = fromKg(lowKg, weightUnit);
        const highDisplay = fromKg(highKg, weightUnit);

        setBmi(bmiRounded);
        setCategory(cat);
        setRange([Number(lowDisplay.toFixed(1)), Number(highDisplay.toFixed(1))]);

        // history record
        const entry = {
            id: crypto.randomUUID(),
            ts: new Date().toISOString(),
            weight: Number(weight),
            weightUnit,
            height: heightUnit === 'cm'
                ? { unit: 'cm', cm: Number(cm) }
                : { unit: 'ftin', ft: Number(ft), inch: Number(inch) },
            bmi: bmiRounded,
            category: cat.key
        };

        setHistory(prev => {
            const next = [entry, ...prev].slice(0, 20); // keep last 20
            localStorage.setItem(HISTORY_KEY, JSON.stringify(next));
            return next;
        });
    }

    function deleteRow(id) {
        setHistory(prev => {
            const next = prev.filter(r => r.id !== id);
            localStorage.setItem(HISTORY_KEY, JSON.stringify(next));
            return next;
        });
    }

    function clearHistory() {
        localStorage.removeItem(HISTORY_KEY);
        setHistory([]);
    }

    function exportCSV() {
        if (history.length === 0) return;
        const header = ['timestamp', 'weight', 'weight_unit', 'height', 'height_unit', 'bmi', 'category'];
        const rows = history.map(r => {
            const h = r.height.unit === 'cm' ? r.height.cm : `${r.height.ft}ft ${r.height.inch}in`;
            const hu = r.height.unit;
            return [r.ts, r.weight, r.weightUnit, h, hu, r.bmi, r.category];
        });
        const csv = [header, ...rows]
            .map(cols => cols.map(v => {
                const s = String(v ?? '');
                if (s.includes(',') || s.includes('"') || s.includes('\n')) {
                    return `"${s.replace(/"/g, '""')}"`;
                }
                return s;
            }).join(','))
            .join('\n');

        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `bmi_history_${new Date().toISOString().slice(0, 10)}.csv`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
    }

    // Render height fields
    const HeightFields = () => {
        if (heightUnit === 'cm') {
            return (
                <Inline>
                    <Input
                        id="height-cm"
                        inputMode="decimal"
                        placeholder={t('bmi.ph.height.cm')}
                        value={cm}
                        onChange={(e) => setCm(e.target.value.replace(',', '.'))}
                        aria-invalid={Boolean(errors.height)}
                        aria-describedby={errors.height ? 'err-height' : undefined}
                    />
                    <Tag>{t('bmi.unit.cm')}</Tag>
                </Inline>
            );
        }
        // ft + in
        return (
            <Inline>
                <Input
                    id="height-ft"
                    inputMode="numeric"
                    placeholder={t('bmi.ph.height.ft')}
                    value={ft}
                    onChange={(e) => setFt(e.target.value.replace(',', '.'))}
                    aria-invalid={Boolean(errors.height)}
                    aria-describedby={(errors.height || errors.heightIn) ? 'err-height' : undefined}
                />
                <Tag>ft</Tag>
                <Input
                    id="height-in"
                    inputMode="decimal"
                    placeholder={t('bmi.ph.height.in')}
                    value={inch}
                    onChange={(e) => {
                        const v = e.target.value.replace(',', '.');
                        const n = Number(v);
                        if (Number.isFinite(n)) {
                            const clamped = clamp(n, 0, 11.9);
                            setInch(String(clamped));
                        } else setInch(v);
                    }}
                    aria-invalid={Boolean(errors.heightIn)}
                    aria-describedby={errors.heightIn ? 'err-height' : undefined}
                />
                <Tag>in</Tag>
            </Inline>
        );
    };

    const [confirmClearOpen, setConfirmClearOpen] = React.useState(false);
    const [deleteDialog, setDeleteDialog] = React.useState({ open: false, row: null });

    return (
        <Grid>
            <div>
                <h1><T keyName="bmi.title" /></h1>
                <p className="muted"><T keyName="bmi.desc" /></p>
            </div>

            <Card as={Form} onSubmit={handleCalculate} noValidate>
                <Row>
                    <Label htmlFor="unit-weight"><T keyName="bmi.label.weightUnit" /></Label>
                    <Inline>
                        <Select
                            id="unit-weight"
                            value={weightUnit}
                            onChange={(e) => setWeightUnit(e.target.value)}
                            aria-label={t('bmi.label.weightUnit')}
                        >
                            <option value="kg">{t('bmi.unit.kg')}</option>
                            <option value="lb">{t('bmi.unit.lb')}</option>
                        </Select>
                    </Inline>
                </Row>

                <Row>
                    <Label htmlFor="weight"><T keyName="bmi.label.weight" /></Label>
                    <Inline>
                        <Input
                            id="weight"
                            inputMode="decimal"
                            placeholder={t('bmi.ph.weight')}
                            value={weight}
                            onChange={(e) => setWeight(e.target.value.replace(',', '.'))}
                            aria-invalid={Boolean(errors.weight)}
                            aria-describedby={errors.weight ? 'err-weight' : undefined}
                        />
                        <Tag>{weightUnit.toUpperCase()}</Tag>
                    </Inline>
                    {errors.weight && <ErrorText id="err-weight">{errors.weight}</ErrorText>}
                    <Help>{t('bmi.help.weight')}</Help>
                </Row>

                <Row>
                    <Label htmlFor="unit-height"><T keyName="bmi.label.heightUnit" /></Label>
                    <Inline>
                        <Select
                            id="unit-height"
                            value={heightUnit}
                            onChange={(e) => setHeightUnit(e.target.value)}
                            aria-label={t('bmi.label.heightUnit')}
                        >
                            <option value="cm">{t('bmi.unit.cm')}</option>
                            <option value="ftin">{t('bmi.unit.ftin')}</option>
                        </Select>
                    </Inline>
                </Row>

                <Row>
                    <Label><T keyName="bmi.label.height" /></Label>
                    <div>
                        <HeightFields />
                        {(errors.height || errors.heightIn) && (
                            <ErrorText id="err-height">
                                {errors.height || errors.heightIn}
                            </ErrorText>
                        )}
                        <Help>{t('bmi.help.height')}</Help>
                    </div>
                </Row>

                {errors.generic && <ErrorText role="alert">{errors.generic}</ErrorText>}

                <Actions>
                    <Button type="submit"><T keyName="bmi.action.calc" /></Button>
                    <Button type="button" onClick={reset}><T keyName="bmi.action.reset" /></Button>
                </Actions>
            </Card>

            {bmi !== null && (
                <Card aria-live="polite">
                    <h3><T keyName="bmi.result.title" /></h3>
                    <p>
                        <strong><T keyName="bmi.result.bmi" />:</strong> {bmi}
                    </p>
                    <p>
                        <strong><T keyName="bmi.result.category" />:</strong>{' '}
                        <Tag tone={category?.color}>
                            <T keyName={`bmi.cat.${category?.key}`} />
                        </Tag>
                    </p>
                    {range && (
                        <p>
                            <strong><T keyName="bmi.result.healthyRange" />:</strong>{' '}
                            {range[0]} – {range[1]} {weightUnit.toUpperCase()}
                        </p>
                    )}
                    <Help><T keyName="bmi.disclaimer" /></Help>
                </Card>
            )}

            <Card>
                <h3><T keyName="bmi.history.title" /></h3>
                {history.length === 0 ? (
                    <p><T keyName="bmi.history.empty" /></p>
                ) : (
                    <>
                        <Table>
                            <thead>
                                <tr>
                                    <th><T keyName="bmi.th.date" /></th>
                                    <th><T keyName="bmi.th.weight" /></th>
                                    <th><T keyName="bmi.th.height" /></th>
                                    <th><T keyName="bmi.th.bmi" /></th>
                                    <th><T keyName="bmi.th.category" /></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {history.map(row => (
                                    <tr key={row.id}>
                                        <td>{formatDateTimeIST(row.ts)}</td>
                                        <td>{row.weight} {row.weightUnit.toUpperCase()}</td>
                                        <td>
                                            {row.height.unit === 'cm'
                                                ? `${row.height.cm} cm`
                                                : `${row.height.ft} ft ${row.height.inch} in`}
                                        </td>
                                        <td>{row.bmi}</td>
                                        <td><T keyName={`bmi.cat.${row.category}`} /></td>
                                        <td>
                                            <Button
                                                type="button"
                                                onClick={() => setDeleteDialog({ open: true, row })}
                                            >
                                                <T keyName="bmi.history.delete" />
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>

                        <ConfirmDialog
                            open={confirmClearOpen}
                            title={t('confirm.clearHistory.title')}
                            description={t('confirm.clearHistory.desc')}
                            confirmLabel={t('confirm.clearHistory.confirm')}
                            cancelLabel={t('confirm.cancel')}
                            onConfirm={clearHistory}
                            onClose={() => setConfirmClearOpen(false)}
                        />

                        <ConfirmDialog
                            open={deleteDialog.open}
                            title={t('confirm.deleteRow.title')}
                            description={t('confirm.deleteRow.desc', {
                                bmi: deleteDialog.row?.bmi ?? '',
                                date: deleteDialog.row ? formatDateTimeIST(deleteDialog.row.ts) : ''
                            })}
                            confirmLabel={t('confirm.deleteRow.confirm')}
                            cancelLabel={t('confirm.cancel')}
                            onConfirm={() => deleteDialog.row && deleteRow(deleteDialog.row.id)}
                            onClose={() => setDeleteDialog({ open: false, row: null })}
                        />

                        <Actions style={{ marginTop: 12 }}>
                            <Button type="button" onClick={exportCSV}><T keyName="bmi.history.export" /></Button>
                            <Button type="button" onClick={() => setConfirmClearOpen(true)}>
                                <T keyName="bmi.history.clear" />
                            </Button>
                        </Actions>
                    </>
                )}
            </Card>
        </Grid>
    );
}
