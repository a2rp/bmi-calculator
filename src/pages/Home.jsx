import styled from 'styled-components';
import { T } from '@tolgee/react';

export default function Home() {
    return (
        <>
            <Styled.Wrapper>
                <h1><T keyName="home.title" /></h1>
                <p><T keyName="home.sub" /></p>

                <Styled.Card>
                    <strong>Why this app?</strong>
                    <ul>
                        <li>Real-world architecture (routing, theming, i18n, state).</li>
                        <li>Production-ready UI with styled-components.</li>
                        <li>Accessibility-first forms & validations.</li>
                        <li>Designed and developed by <a href="https://www.ashishranjan.net" target="_blank">https://www.ashishranjan.net</a></li>
                    </ul>
                </Styled.Card>
            </Styled.Wrapper>
        </>
    );
}

const Styled = {
    Wrapper: styled.div`
        /* border: 1px solid #f00; */
    `,

    Card: styled.div`
        background: ${({ theme }) => theme.card};
        border: 1px solid ${({ theme }) => theme.border};
        border-radius: 16px;
        padding: 20px;
        margin-top: 15px;

        ul {
            margin-left: 30px;
            li {
                a {
                    padding: 3px;
                    border-bottom: 1px solid #fff;;
                }
            }
        }
    `
};
