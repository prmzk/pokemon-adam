import { css, Global } from '@emotion/react'

// GLOBAL COLORS
export const colors = {
    blue: '#A2D7D5',
    green: '#55a3ab',
    white: '#dededc',
    black: '#434343',
    red: '#b84949',
    warm: '#e7d29e',
    blacker: 'black',
    bluer: '#5fb4fd'
  }
  
export const globalStyles = (
    <Global
      styles={css`
  
        /* GLOBAL FONTS */
        @import url('https://fonts.googleapis.com/css2?family=Changa:wght@300;400;500;600;700&family=Press+Start+2P&display=swap');
  
        * {
          font-family: 'Changa', sans-serif;
          font-style: normal;
          &:focus-visible {
            outline: none;
          }
        }

        body {
            margin: 0;
            padding: 0;
        }
  
        a {
            text-decoration: none;
            cursor: pointer;
            &:hover, &:focus, &:visited {
                text-decoration: none;
                outline: none;
            }
        }
  
        h1, h2, h3, h4, h5, h6, p, span {
            font-weight: normal;
            margin: 0px;
            background: none;
            line-height: 1.3em;
        }
  
        ul {
          padding: 0;
        }
  
        li {
          list-style: none;
        }
      `}
    />
)