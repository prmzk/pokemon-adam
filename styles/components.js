import { css, keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { colors } from './global'

// ANIMATIONS
export const bounce = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
`

export const fadeIn = keyframes`
  0% {
    opacity: 0;
    top: 20px;
  }
  100% {
    opacity: 1;
    top: 0;
  }
`

// https://codepen.io/raubaca/pen/obaZmG
export const blink = keyframes`
  from { 
    background: #eee;
  }
  to { 
    background: #e74c3c; 
  }
`

export const shake = keyframes`
  0% { transform: translate(0, 0) rotate(0); }
  20% { transform: translate(-4px, 0) rotate(-12deg); }
  30% { transform: translate(4px, 0) rotate(12deg); }
  50% { transform: translate(-4px, 0) rotate(-10deg); }
  60% { transform: translate(4px, 0) rotate(10deg); }
  100% { transform: translate(0, 0) rotate(0); }
`

export const fall = keyframes`
  0% { top: -200px }
  60% { top: 0 }
  80% { top: -20px }
  100% { top: 0 } 
`

export const Button = styled.button`
  font-family: ${({ pixelated }) => pixelated && "'Press Start 2P', cursive"};
  font-size: ${({ size }) => size ? (size + 'px') : '14px'};
  padding: ${({ pixelated }) => pixelated ? "8px 12px" : '2px 14px'};
  border-radius: ${({ pixelated }) => pixelated ? "14px" : '8px'};
  background: ${({ color }) => colors[color] || colors.warm};
  cursor: pointer;
  font-weight: ${({ pixelated }) => pixelated ? '400' : '500'};
  color: ${({ text }) => text};
  border: solid ${({ size }) => size >= 24 ? size/12 + 'px' : '2px'} black;
  margin: ${({mb, mt, mr, ml}) => (mt || '0') + 'px ' + (mr || '0') + 'px ' + (mb || '0') + 'px ' + (ml || '0') + 'px '};
  min-height: 48px;
  min-width: 48px;
  &:hover {
    animation: ${bounce} 0.8s infinite ease-in-out alternate;
  }
  &:disabled {
    background-color: gray;
    color: black;
  }
`

export const Flex = styled.div`
  display: flex;
  flex-direction: ${({ dir }) => dir};
  justify-content: ${({ jc }) => jc};
  align-items: ${({ ai }) => ai};
  flex-wrap: ${({wrap}) => wrap};
`

export const Title = styled.h1`
  font-family: ${({ pixelated }) => pixelated && "'Press Start 2P', cursive"};
  font-weight: ${({ pixelated, weight }) => pixelated || !weight ? '400' : weight};
  font-size: ${({ size }) => size ? (size + 'px') : '14px'};
  color: ${({ color }) => colors[color] || colors.blacker};
  margin: ${({mb, mt, mr, ml}) => (mt || '0') + 'px ' + (mr || '0') + 'px ' + (mb || '0') + 'px ' + (ml || '0') + 'px '};
  text-align: ${({center}) => center && 'center'};
`

export const SubTitle = styled.h2`
  font-family: ${({ pixelated }) => pixelated && "'Press Start 2P', cursive"};
  font-weight: ${({ pixelated, weight }) => pixelated || !weight ? '400' : weight};
  font-size: ${({ size }) => size ? (size + 'px') : '14px'};
  color: ${({ color }) => colors[color] || colors.blacker};
  margin: ${({mb, mt, mr, ml}) => (mt || '0') + 'px ' + (mr || '0') + 'px ' + (mb || '0') + 'px ' + (ml || '0') + 'px '};
  text-align: ${({center}) => center && 'center'};
`

export const Text = styled.p`
  font-family: ${({ pixelated }) => pixelated && "'Press Start 2P', cursive"};
  font-weight: ${({ pixelated, weight }) => pixelated || !weight ? '400' : weight};
  font-size: ${({ size }) => size ? (size + 'px') : '14px'};
  color: ${({ color }) => colors[color] || colors.blacker};
  margin: ${({mb, mt, mr, ml}) => (mt || '0') + 'px ' + (mr || '0') + 'px ' + (mb || '0') + 'px ' + (ml || '0') + 'px '};
  text-align: ${({center}) => center && 'center'};
`

export const PokemonType = styled.p`
 font-weight: 500;
 font-size: 14px;
 padding: 4px 12px;
 margin-right: 8px;
 background-color: ${({ color }) => colors[color]};
 text-transform: capitalize;
 border-radius: 20px;
`

export const Pokemons = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  place-content: center;
  grid-template-rows: auto;
  gap: 12px;
  width: 100%;
  place-items: center;
  @media (max-width: 540px) {
    grid-template-columns: repeat(auto-fill, 45%);
  }
  @media (max-width: 260px) {
    grid-template-columns: repeat(auto-fill, 100%);
  }
`

export const PokemonsList = styled.div`
  border: 2px solid ${colors.black};
  width: calc(100% - 24px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px;
  background: url('/images/bg.png') #EDEDED;
  background-size: contain;
  transition: transform 0.3s ease;
  cursor: pointer;
  border-radius: 12px;

  animation: ${fadeIn} 0.8s ease-in-out;
  opacity: 1;
  position: relative;
  top: 0;

  ${Text} {
    text-transform: capitalize;
  }

  @media (max-width: 540px) {
    & img {
      width: 100;
      height: 100;
    }
  }

  &:hover {
    transform: scale(1.05);
  }
`

export const TabStyle = css`
  & ul {
    width: 100%;
    display: flex;
    
  }
  & li {
    color: #00000080;
    font-weight: 500;
    cursor: pointer;
    width: 25%;
    text-align: center;
    max-width: 300px;
  }
  & .selected {
    color: #000000;
    border-bottom: 2px solid ${colors.green};
  }

  & .panel-selected {
    animation: ${fadeIn} 0.4s ease-in-out;
  }

  & > div {
    display: flex;
    justify-content: center;
  }

  & .stats-wrapper {
    max-width: 700px;
    width: 100%;
    padding-top: 20px;
    
    & > div {
      display: grid;
      grid-template-columns: 1fr 2fr;
      align-items: center;
      margin-bottom: 12px;
      place-items: center;
      & > h2 {
        font-weight: 500;
        font-size: 18px;
        color: #00000070;
        text-align: center;
      }
      & > p {
        font-weight: 600;
        font-size: 18px;
        color: #000000;
        text-align: center;
      }
    }
  }

  & .moves-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, 120px);
    place-content: center;
    grid-template-rows: auto;
    gap: 12px;
    width: 100%;
    place-items: center;
    place-content: center;
    & > div {
      width: calc(100% - 24px);
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px solid;
      margin: 8px;
      padding: 12px;
      border-radius: 12px;
      & > p {
        text-align: center;
        text-transform: capitalize;
      }
    }
  }
`

export const PokemonStatsWrapper = styled.div`
  width: 100%;
  height: 12px;
  background: #00000030;
  border-radius: 8px;
  overflow: hidden;
  & > div {
    transition: width 1s ease;
    height: 20px;
    width: ${({value, maxStats}) => value*100/maxStats + '%'};
    background: ${({color}) => colors[color]}
  }
`

// https://codepen.io/raubaca/pen/obaZmG
export const PokeBallStyle = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  background: #fff;
  border: 2px solid #000;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: inset -10px 10px 0 10px #ccc;
  cursor: pointer;
  animation: ${shake} 1.25s cubic-bezier(.36,.07,.19,.97) infinite;
  &::before, &::after {
    content: '';
    position: absolute;
  }
  &::before {
    background: red;
    width: 100%;
    height: 50%;
  }
  &::after {
    top: calc(50% - 2px);
    width: 100%;
    height: 8px;
    background: #000;
  }
  & .pokeball__button {
    position: absolute;
    top: calc(50% - 10px);
    left: calc(50% - 12px);
    width: 20px;
    height: 20px;
    background: #7f8c8d;
    border: 2px solid #fff;
    border-radius: 50%;
    z-index: 10;
    box-shadow: 0 0 0 2px black;
    animation: ${blink} .5s alternate infinite;
  }
`

export const ModalDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  max-width: 600px;
  background: white;
  border-radius: 20px;
  padding: 12px;
  box-sizing: border-box;
  & .success {
    color: ${colors.green};
    margin-right: 12px;
  }
`

export const MyForm = styled.input`
  padding: 4px;
  margin: 24px 0 0 0 ;
  border-radius: 4px;
  font-size: 14px;
`