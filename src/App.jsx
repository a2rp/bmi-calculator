import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { Styled } from './styled';
import LangSwitcher from './components/ui/LangSwitcher';
import { T } from '@tolgee/react';
import {
    FiArrowUp,
    FiCoffee,
    FiCode,
    FiGlobe,
    FiLifeBuoy,
    FiMail,
    FiMenu,
    FiMoon,
    FiSun,
    FiX,
} from 'react-icons/fi';
import {
    FaFacebookF,
    FaGithub,
    FaLinkedinIn,
    FaYoutube,
} from 'react-icons/fa';
import { SiPatreon } from 'react-icons/si';

const Home = lazy(() => import('./pages/Home'));
const BMICalculator = lazy(() => import('./pages/BMICalculator'));

const footerLinks = [
    { label: 'Portfolio', href: 'https://www.ashishranjan.net/', icon: FiGlobe },
    { label: 'GitHub', href: 'https://github.com/a2rp', icon: FaGithub },
    { label: 'CodePen', href: 'https://codepen.io/ash1198', icon: FiCode },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/aashishranjan', icon: FaLinkedinIn },
    { label: 'Facebook', href: 'https://www.facebook.com/theash.ashish/', icon: FaFacebookF },
    { label: 'YouTube', href: 'https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1', icon: FaYoutube },
    { label: 'Email', href: 'mailto:ash.ranjan09@gmail.com', icon: FiMail },
    { label: 'Support', href: 'https://a2rp-donation-page.netlify.app/', icon: FiLifeBuoy },
    { label: 'Buy Me a Coffee', href: 'https://buymeacoffee.com/a2rp', icon: FiCoffee },
    { label: 'Patreon', href: 'https://www.patreon.com/a2rp', icon: SiPatreon },
];

export default function App({ toggleTheme, theme }) {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);
    const [showTopButton, setShowTopButton] = useState(false);

    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        const handleScroll = () => setShowTopButton(window.scrollY > 360);
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [menuOpen]);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <Styled.Wrapper>
            <Styled.Header>
                <Styled.Brand as={NavLink} to="/" aria-label="HealthPro home">
                    <Styled.BrandLogo
                        src={`${import.meta.env.BASE_URL}logo.png`}
                        alt="HealthPro logo"
                    />
                    <span>HealthPro</span>
                </Styled.Brand>

                <Styled.Nav $open={menuOpen} aria-label="Main navigation">
                    <Styled.NavLink as={NavLink} to="/" end onClick={() => setMenuOpen(false)}>
                        <T keyName="nav.home" />
                    </Styled.NavLink>
                    <Styled.NavLink as={NavLink} to="/bmi" onClick={() => setMenuOpen(false)}>
                        <T keyName="nav.bmi" />
                    </Styled.NavLink>
                </Styled.Nav>

                <Styled.Actions>
                    <LangSwitcher />
                    <Styled.ThemeButton type="button" onClick={toggleTheme} aria-label="Toggle theme">
                        {theme === 'dark' ? <FiMoon aria-hidden="true" /> : <FiSun aria-hidden="true" />}
                    </Styled.ThemeButton>
                    <Styled.MenuButton
                        type="button"
                        onClick={() => setMenuOpen((open) => !open)}
                        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                        aria-expanded={menuOpen}
                    >
                        {menuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
                    </Styled.MenuButton>
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
                <Styled.FooterMain>
                    <div className="copyright">
                        Copyright &copy; {new Date().getFullYear()}{' '}
                        <a href="https://www.ashishranjan.net/" target="_blank" rel="noopener noreferrer">
                            Ashish Ranjan
                        </a>
                    </div>
                    <nav className="links" aria-label="Footer links">
                        {footerLinks.map(({ label, href, icon }) => {
                            const iconElement = React.createElement(icon, { 'aria-hidden': true });
                            const external = !href.startsWith('mailto:');

                            return (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    title={label}
                                    target={external ? '_blank' : undefined}
                                    rel={external ? 'noopener noreferrer' : undefined}
                                >
                                    {iconElement}
                                </a>
                            );
                        })}
                    </nav>
                </Styled.FooterMain>
            </Styled.Footer>

            {showTopButton && (
                <Styled.BackToTop
                    type="button"
                    onClick={scrollToTop}
                    aria-label="Go to top"
                    title="Go to top"
                >
                    <FiArrowUp aria-hidden="true" />
                </Styled.BackToTop>
            )}
        </Styled.Wrapper>
    );
}
