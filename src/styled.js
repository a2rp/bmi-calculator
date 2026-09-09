import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        min-height: 100dvh;
        display: grid;
        grid-template-rows: auto 1fr auto;
    `,
    Header: styled.header`
        display: grid;
        grid-template-columns: 1fr auto auto;
        gap: 16px;
        align-items: center;
        padding: 16px 24px;
        border-bottom: 1px solid var(--border);
        background: var(--card);
        position: sticky;
        top: 0;
        z-index: 10;
        width: 100%;
        box-sizing: border-box;
    `,
    Brand: styled.span`
        font-weight: 800;
        letter-spacing: 0.2px;
    `,
    NavLink: styled.a`
        margin-right: 12px;
        padding: 8px 10px;
        border-radius: 10px;
        &.active {
            background: var(--border);
        }
    `,
    Actions: styled.div`
        display: flex;
        gap: 8px;
        align-items: center;
        justify-self: end;
    `,
    Button: styled.button`
        padding: 8px 12px;
        border: 1px solid var(--border);
        background: var(--card);
        border-radius: 10px;
        color: var(--text);
    `,
    Main: styled.main`
        padding: 24px;
        max-width: 1100px;
        width: 100%;
        margin: 0 auto;
    `,
    Footer: styled.footer`
        padding: 20px 24px;
        border-top: 1px solid var(--border);
        background: var(--card);
        text-align: center;
    `,
};
