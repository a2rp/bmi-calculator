import React, { lazy, Suspense } from 'react';
import { Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { Styled } from './styled';
import LangSwitcher from './components/ui/LangSwitcher';
import { T } from '@tolgee/react';

const Home = lazy(() => import('./pages/Home'));
const BMICalculator = lazy(() => import('./pages/BMICalculator'));

export default function App({ toggleTheme, theme }) {
    const location = useLocation();
    return (
        <Styled.Wrapper>
            <Styled.Header>
                <Styled.Brand>HealthPro</Styled.Brand>

                <nav>
                    <Styled.NavLink as={NavLink} to="/" end>
                        <T keyName="nav.home" />
                    </Styled.NavLink>
                    <Styled.NavLink as={NavLink} to="/bmi">
                        <T keyName="nav.bmi" />
                    </Styled.NavLink>
                </nav>

                <Styled.Actions>
                    <LangSwitcher />
                    <Styled.Button onClick={toggleTheme} aria-label="Toggle theme">
                        {theme === 'dark' ? '🌙' : '☀️'}
                    </Styled.Button>
                </Styled.Actions>
            </Styled.Header>

            <Styled.Main>
                <Suspense key={location.pathname} fallback={<div role="status">Loading...</div>}>
                    <Routes location={location}>
                        <Route path="/" element={<Home />} />
                        <Route path="/bmi" element={<BMICalculator />} />
                    </Routes>
                </Suspense>
            </Styled.Main>

            <Styled.Footer>
                <div>Copyright &copy; {new Date().getFullYear()} <a href="https://www.ashishranjan.net" target="_blank" rel="noopener noreferrer">Ashish Ranjan</a></div>
                <nav aria-label="Footer links"><a href="https://github.com/a2rp" target="_blank" rel="noopener noreferrer">GitHub</a><a href="https://codepen.io/ash1198" target="_blank" rel="noopener noreferrer">CodePen</a><a href="mailto:ash.ranjan09@gmail.com">Email</a><a href="https://a2rp-donation-page.netlify.app/" target="_blank" rel="noopener noreferrer">Support</a><a href="https://buymeacoffee.com/a2rp" target="_blank" rel="noopener noreferrer">Buy Me A Coffee</a><a href="https://patreon.com/a2rp" target="_blank" rel="noopener noreferrer">Patreon</a></nav>
            </Styled.Footer>
        </Styled.Wrapper>
    );
}
