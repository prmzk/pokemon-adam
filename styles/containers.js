import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { colors } from './global'

export const Container = styled.div`
    @media (min-width: 1200px) {
        max-width: 1140px;
    }
    width: 100%;
    padding-right: 16px;
    padding-left: 16px;
    margin-right: auto;
    margin-left: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

// PAGE
export const BgContainer = styled.section`
    background-image: url('/images/startbg.png');
    background-size: cover;
    display: flex;
    background-attachment: fixed;
`
export const PokemonDetailContainer = styled.section`
    &:before {
        background: ${({ color }) =>  "url('/images/bg.png') " + colors[color]};
        background-size: contain;
        background-repeat: no-repeat;
        background-position-x: 50%;
        content: "";
        position: absolute;
        z-index: -1;
        filter: brightness(0.7);
        top: 0; left: 0;
        width: 100%; 
        height: 100%;
    }
    display: flex;
    background-attachment: fixed;
    position: relative;
    width: 100%;
    min-height: 100vh;
    & ${Container} {
        padding-top: 20px;
        flex-grow: 1;
    }
`

export const PokemonStatsContainer = styled.div`
    background: #FFF;
    border-radius: 20px 20px 0 0;
    display: flex;
    flex-direction: column;
    padding: 40px 16px 120px 16px;
    width: calc(100% );
    margin-top: -40px;
    flex-grow: 1;
`