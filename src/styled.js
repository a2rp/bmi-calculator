import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        min-height: 100dvh;
        display: flex;
        flex-direction: column;
        background: var(--bg);
        color: var(--text);
    `,
    Header: styled.header`
        position: fixed;
        inset: 0 0 auto;
        min-height: 72px;
        display: grid;
        grid-template-columns: auto 1fr auto;
        gap: 24px;
        align-items: center;
        padding: 12px clamp(16px, 4vw, 48px);
        border-bottom: 1px solid var(--border);
        background: var(--card);
        z-index: 100;
        width: 100%;
    `,
    Brand: styled.a`
        display: inline-flex;
        align-items: center;
        gap: 10px;
        color: var(--text);
        font-weight: 800;
        letter-spacing: 0.4px;
        text-decoration: none;
        white-space: nowrap;

        &:hover {
            text-shadow: 0 0 14px var(--accent);
        }
    `,
    BrandLogo: styled.img`
        width: 36px;
        height: 36px;
        object-fit: contain;
        border: 1px solid var(--border);
        border-radius: 10px;
        background: var(--bg);
    `,
    Nav: styled.nav`
        display: flex;
        align-items: center;
        gap: 6px;

        @media (max-width: 700px) {
            position: absolute;
            top: calc(100% + 10px);
            left: 16px;
            right: 16px;
            display: ${({ $open }) => ($open ? "flex" : "none")};
            flex-direction: column;
            align-items: stretch;
            padding: 10px;
            border: 1px solid var(--border);
            border-radius: 16px;
            background: var(--card);
            box-shadow: 0 18px 40px rgba(15, 23, 42, 0.2);
        }
    `,
    NavLink: styled.a`
        padding: 8px 10px;
        border: 1px solid transparent;
        border-radius: 10px;
        color: var(--muted);
        transition: color 0.18s ease, border-color 0.18s ease,
            box-shadow 0.18s ease, text-shadow 0.18s ease;

        &:hover,
        &.active {
            color: var(--text);
            border-color: var(--accent);
            box-shadow: 0 0 0 1px var(--accent);
            text-shadow: 0 0 10px var(--accent);
        }

        @media (max-width: 700px) {
            width: 100%;
        }
    `,
    Actions: styled.div`
        display: flex;
        align-items: center;
        justify-self: end;
        gap: 8px;
    `,
    ThemeButton: styled.button`
        width: 40px;
        height: 40px;
        display: inline-grid;
        place-items: center;
        border: 1px solid var(--border);
        border-radius: 10px;
        background: var(--card);
        color: var(--text);
        transition: border-color 0.18s ease, box-shadow 0.18s ease,
            text-shadow 0.18s ease;

        &:hover,
        &:focus-visible {
            border-color: var(--accent);
            box-shadow: 0 0 0 2px var(--accent);
            text-shadow: 0 0 10px var(--accent);
            outline: none;
        }
    `,
    MenuButton: styled.button`
        width: 40px;
        height: 40px;
        display: none;
        place-items: center;
        border: 1px solid var(--border);
        border-radius: 10px;
        background: var(--card);
        color: var(--text);
        transition: border-color 0.18s ease, box-shadow 0.18s ease,
            text-shadow 0.18s ease;

        &:hover,
        &:focus-visible {
            border-color: var(--accent);
            box-shadow: 0 0 0 2px var(--accent);
            text-shadow: 0 0 10px var(--accent);
            outline: none;
        }

        @media (max-width: 700px) {
            display: inline-grid;
        }
    `,
    Main: styled.main`
        flex: 1;
        width: 100%;
        max-width: 1180px;
        margin: 0 auto;
        padding: 112px 24px 44px;

        @media (max-width: 700px) {
            padding: 100px 16px 32px;
        }
    `,
    Footer: styled.footer`
        padding: 20px 24px;
        border-top: 1px solid var(--border);
        background: var(--card);
        color: var(--muted);
    `,
    FooterMain: styled.div`
        max-width: 1180px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 18px;
        flex-wrap: wrap;
        font-size: 13px;

        .copyright a {
            color: var(--text);
            font-weight: 600;
            transition: text-shadow 0.18s ease;
        }

        .copyright a:hover {
            text-shadow: 0 0 10px var(--accent);
        }

        .links {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: 8px;
            flex-wrap: wrap;
        }

        .links a {
            width: 34px;
            height: 34px;
            display: inline-grid;
            place-items: center;
            border: 1px solid var(--border);
            border-radius: 9px;
            color: var(--text);
            transition: border-color 0.18s ease, box-shadow 0.18s ease,
                text-shadow 0.18s ease;
        }

        .links a:hover,
        .links a:focus-visible {
            border-color: var(--accent);
            box-shadow: 0 0 0 2px var(--accent);
            text-shadow: 0 0 10px var(--accent);
            outline: none;
        }

        @media (max-width: 700px) {
            justify-content: center;
            text-align: center;

            .links {
                justify-content: center;
            }
        }
    `,
    BackToTop: styled.button`
        position: fixed;
        right: 22px;
        bottom: 22px;
        width: 42px;
        height: 42px;
        display: grid;
        place-items: center;
        border: 1px solid var(--border);
        border-radius: 50%;
        background: var(--card);
        color: var(--text);
        box-shadow: 0 8px 22px rgba(15, 23, 42, 0.18);
        z-index: 40;
        transition: border-color 0.18s ease, box-shadow 0.18s ease,
            text-shadow 0.18s ease;

        &:hover,
        &:focus-visible {
            border-color: var(--accent);
            box-shadow: 0 0 0 2px var(--accent);
            text-shadow: 0 0 10px var(--accent);
            outline: none;
        }
    `,
};
