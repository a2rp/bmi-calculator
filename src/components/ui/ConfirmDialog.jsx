import React from 'react';
import styled from 'styled-components';

const Backdrop = styled.div`
  position: fixed; inset: 0;
  background: rgba(0,0,0,.45);
  display: grid; place-items: center;
  z-index: 50;
`;

const Dialog = styled.div`
  width: min(520px, 92vw);
  background: var(--card);
  color: var(--text);
  border: 1px solid var(--border);
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0,0,0,.35);
  padding: 18px;
`;

const Title = styled.h3`
  margin: 0 0 6px;
`;

const Desc = styled.p`
  margin: 0; color: var(--muted);
`;

const Actions = styled.div`
  display: flex; gap: 10px; justify-content: flex-end;
  padding-top: 16px; margin-top: 16px;
  border-top: 1px solid var(--border);
`;

const Btn = styled.button`
  padding: 10px 14px;
  border-radius: 10px;
  border: 1px solid var(--border);
  background: var(--card);
  color: var(--text);
  &:hover { filter: brightness(1.02); }
`;

const BtnDanger = styled(Btn)`
  border-color: #ef4444;
`;

export default function ConfirmDialog({
    open,
    title,
    description,
    confirmLabel = 'Confirm',
    cancelLabel = 'Cancel',
    onConfirm,
    onClose,
}) {
    const dialogRef = React.useRef(null);
    const lastActiveRef = React.useRef(null);

    React.useEffect(() => {
        if (!open) return;
        lastActiveRef.current = document.activeElement;
        const prev = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        const el = dialogRef.current;
        const focusables = el?.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        focusables?.[0]?.focus();

        const handleKey = (e) => {
            if (e.key === 'Escape') onClose?.();
            if (e.key === 'Tab' && focusables && focusables.length) {
                const list = Array.from(focusables);
                const first = list[0];
                const last = list[list.length - 1];
                if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault(); last.focus();
                } else if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault(); first.focus();
                }
            }
        };
        document.addEventListener('keydown', handleKey);

        return () => {
            document.body.style.overflow = prev;
            document.removeEventListener('keydown', handleKey);
            lastActiveRef.current && lastActiveRef.current.focus?.();
        };
    }, [open, onClose]);

    if (!open) return null;

    const backdropClick = (e) => {
        if (e.target === e.currentTarget) onClose?.();
    };

    return (
        <Backdrop onMouseDown={backdropClick} role="presentation">
            <Dialog
                ref={dialogRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby="confirm-title"
                aria-describedby="confirm-desc"
            >
                <Title id="confirm-title">{title}</Title>
                <Desc id="confirm-desc">{description}</Desc>
                <Actions>
                    <Btn onClick={onClose}>{cancelLabel}</Btn>
                    <BtnDanger
                        onClick={() => {
                            onConfirm?.();
                            onClose?.();
                        }}
                    >
                        {confirmLabel}
                    </BtnDanger>
                </Actions>
            </Dialog>
        </Backdrop>
    );
}
