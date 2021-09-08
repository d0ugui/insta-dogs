import styled from 'styled-components'

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: stretch;
  margin: 1rem;

  textarea {
    display: block;
    width: 100%;
    font-size: 1rem;
    font-family: var(--type-first);
    resize: none;
    border: 1px solid #333;
    border-radius: 0.2rem;
    padding: 0.5rem;
    background: #eee;
    transition: 0.2s;

    &:focus,
    &:focus {
      outline: none;
      border-color: #fb1;
      background: white;
      box-shadow: 0 0 0 3px #fea;
    }
  }

  button {
    border: none;
    cursor: pointer;
    color: #333;
    background: transparent;
    font-size: 1rem;
    padding: 0 1rem;
    overflow: hidden;

    &:hover,
    &:focus {
      outline: none;
    }

    &:hover svg path,
    &:focus svg path {
      fill: #fea;
      stroke: #fb1;
    }

    &:hover svg g,
    &:focus svg g {
      animation: latir 0.6s infinite;
    }

    @keyframes latir {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
`
