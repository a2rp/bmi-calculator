import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { TolgeeProvider } from '@tolgee/react';
import { tolgee } from './i18n';
import './index.css';

function Root() {
    const [theme, setTheme] = React.useState(() => localStorage.getItem('theme') || 'light');

    React.useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));

    return (
        <TolgeeProvider tolgee={tolgee}>
            <BrowserRouter basename="/bmi-calculator">
                <App toggleTheme={toggleTheme} theme={theme} />
            </BrowserRouter>
        </TolgeeProvider>
    );
}

createRoot(document.getElementById('root')).render(<Root />);
