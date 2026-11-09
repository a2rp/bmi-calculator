import styled from 'styled-components';
import { T } from '@tolgee/react';

export default function Home() {
    return (
        <>
            <Styled.Wrapper>
                <h1><T keyName="home.title" /></h1>
                <p><T keyName="home.sub" /></p>

                <Styled.Card>
                    <strong><T keyName="home.why" /></strong>
                    <ul>
                        <li><T keyName="home.feature.units" /></li>
                        <li><T keyName="home.feature.range" /></li>
                        <li><T keyName="home.feature.history" /></li>
                        <li><T keyName="home.feature.language" /></li>
                        <li>
                            <T keyName="home.credit" />{' '}
                            <a href="https://www.ashishranjan.net" target="_blank" rel="noopener noreferrer">
                                Ashish Ranjan
                            </a>
                        </li>
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
                    border-bottom: 1px solid #fff;
                }
            }
        }
    `
};
