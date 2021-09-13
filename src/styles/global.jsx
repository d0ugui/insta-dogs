import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --type-first: Helvetica, Arial, sans-serif;
    --type-second: 'Spectral', Georgia;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    padding-top: 4rem;
    color: #333;
    font-family: var(--type-first);
  }

  ul, li {
    list-style: none;
  }
  
  a {
    text-decoration: none;
    color: #333;
  }

  img {
    display: block;
    max-width: 100%;
  }

  button, input {
    display: block;
    font-size: 1rem;
    font-family: var(--type-first);
    color: #333;
  }

  .container {
    max-width: 50rem;
    padding: 0 1rem;
    margin: 0 auto;
  }

  .mainContainer {
    margin-top: 2rem;
  }

  .title {
    font-family: var(--type-second);
    line-height: 1;
    font-size: 3rem;
    margin: 1rem 0;
    position: relative;
    z-index: 1;
  }

  .title::after {
    content: '';
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    background: #fb1;
    position: absolute;
    bottom: 5px;
    left: -5px;
    border-radius: .2rem;
    z-index: -1;
  }

  .animeLeft {
    opacity: 0;
    transform: translateX(-20px);
    animation: animeLeft .3s forwards;
  }

  .VictoryContainer {
    height: initial !important;
  }


  @keyframes animeLeft {
    to {
      opacity: 1;
      transform: initial;
    }
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh + 10rem);
`

export const AppBody = styled.main`
  flex: 1;
`
