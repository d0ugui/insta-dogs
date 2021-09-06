import styled from 'styled-components'
import view from '../../../assets/visualizacao.svg'

export const PhotoItem = styled.li`
  display: grid;
  border-radius: 0.2rem;
  overflow: hidden;
  cursor: pointer;

  &:nth-child(2) {
    grid-column: 2/4;
    grid-row: span 2;
  }

  img {
    grid-area: 1/1;
  }

  span {
    background: rgba(0, 0, 0, 0.3);
    color: white;
    font-size: 1rem;
    text-align: center;
    align-items: center;
    justify-content: center;
    grid-area: 1/1;
    transition: 0.2s;
    display: none;
  }

  span::before {
    content: '';
    width: 16px;
    height: 10px;
    display: inline-block;
    margin-right: 0.25rem;
    background: url(${view}) no-repeat;
  }

  &:hover span {
    display: flex;
  }

  @media (max-width: 40rem) {
    grid-column: initial;
    grid-row: initial;
  }
`
