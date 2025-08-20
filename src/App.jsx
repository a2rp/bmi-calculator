import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { Styled } from './styled';
import Home from './pages/Home';
import BMICalculator from './pages/BMICalculator';
import LangSwitcher from './components/ui/LangSwitcher';
import { T } from '@tolgee/react';

export default function App({ toggleTheme, theme }) {
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
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/bmi" element={<BMICalculator />} />
                </Routes>
            </Styled.Main>

            <Styled.Footer>
                © {new Date().getFullYear()} • <T keyName="footer.copy" />
            </Styled.Footer>
        </Styled.Wrapper>
    );
}
