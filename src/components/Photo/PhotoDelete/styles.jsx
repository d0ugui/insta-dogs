import styled from 'styled-components'

export const Delete = styled.button`
  background: #ddd;
  padding: 0.3rem 0.6rem;
  line-height: 1;
  border: 1px solid transparent;
  border-radius: 0.4rem;
  font-size: 0.875rem;
  font-family: var(--type-first);
  cursor: pointer;
  transition: 0.1s;

  &:hover,
  &:focus {
    outline: none;
    background: white;
    box-shadow: 0 0 0 3px #eee;
    border-color: #333;
  }
`
