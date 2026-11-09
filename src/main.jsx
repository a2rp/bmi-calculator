import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { TolgeeProvider } from '@tolgee/react';
import { tolgee } from './i18n';
import './index.css';

function getSavedTheme() {
    try {
        const theme = localStorage.getItem('theme');
        return theme === 'dark' ? 'dark' : 'light';
    } catch {
        return 'light';
    }
}

export function Root() {
    const [theme, setTheme] = React.useState(getSavedTheme);

    React.useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        try {
            localStorage.setItem('theme', theme);
        } catch {
            // Keep the selected theme for this session if storage is unavailable.
        }
    }, [theme]);

    const toggleTheme = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));

    return (
        <TolgeeProvider tolgee={tolgee}>
            <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>
                <App toggleTheme={toggleTheme} theme={theme} />
            </BrowserRouter>
        </TolgeeProvider>
    );
}

createRoot(document.getElementById('root')).render(<Root />);
