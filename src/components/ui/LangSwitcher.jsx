import React from 'react';
import { useTolgee } from '@tolgee/react';
import styled from 'styled-components';

const Select = styled.select`
  padding: 8px 10px;
  border-radius: 10px;
  border: 1px solid var(--border);
  background: var(--card);
  color: var(--text);
`;

export default function LangSwitcher() {
    const tolgee = useTolgee(['language']);

    const value = tolgee.getPendingLanguage?.() || tolgee.getLanguage();

    const handleChange = (e) => {
        const lang = e.target.value;
        tolgee.changeLanguage(lang);
        localStorage.setItem('lang', lang);
    };

    return (
        <Select aria-label="Change language" value={value} onChange={handleChange}>
            <option value="en">EN</option>
            <option value="hi">HI</option>
        </Select>
    );
}
