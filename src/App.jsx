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
                © {new Date().getFullYear()} • <T keyName="footer.copy" />
            </Styled.Footer>
        </Styled.Wrapper>
    );
}
