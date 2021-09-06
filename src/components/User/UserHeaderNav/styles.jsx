import styled from 'styled-components'

export const Nav = styled.nav`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  a,
  button {
    background: #eee;
    border-radius: 0.2rem;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
    transition: 0.1s;
    cursor: pointer;
  }

  a:hover,
  a:focus,
  button:hover,
  button:focus {
    background: white;
    box-shadow: 0 0 0 3px #eee;
    border-color: #333;
    outline: none;
  }

  a.active {
    background: white;
    box-shadow: 0 0 0 3px #fea;
    border-color: #fb1;
  }

  a.active svg > * {
    fill: #fb1;
  }

  &.navMobile {
    display: block;
    position: absolute;
    top: 70px;
    right: 0;
    padding: 0 1rem;
    background: white;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    border-radius: 0.2rem;
    transform: translateX(-10px);
    opacity: 0;
    pointer-events: none;

    a,
    button {
      justify-content: initial;
      background: none;
      width: 100%;
      border: none;
      border-bottom: 1px solid #eee;
      padding: 0.5rem 0;
      cursor: pointer;
    }

    a:hover svg > *,
    button:hover svg > * {
      fill: #fb1;
    }

    a:hover,
    a:focus,
    button:hover,
    button:focus {
      box-shadow: none;
    }

    a.active {
      box-shadow: none;
    }

    button {
      border-bottom: none;
    }

    svg {
      margin-right: 0.5rem;
    }
  }

  &.navMobileActive {
    transition: 0.3s;
    transform: initial;
    opacity: 1;
    z-index: 100;
    pointer-events: initial;
  }
`

export const MobileButton = styled.button`
  background: #eee;
  border-radius: 0.2rem;
  width: 40px;
  height: 40px;
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  transition: 0.1s;
  cursor: pointer;

  &::after {
    content: '';
    display: block;
    width: 1.2rem;
    height: 2px;
    border-radius: 2px;
    background: currentColor;
    box-shadow: 0 6px currentColor, 0 -6px currentColor;
    transition: 0.2s;
  }

  &:focus,
  &:hover,
  &.mobileButtonActive {
    outline: none;
    background: white;
    box-shadow: 0 0 0 3px #fea;
    border-color: #fb1;
    color: #fb1;
  }

  &.mobileButtonActive::after {
    transform: rotate(90deg);
    width: 4px;
    height: 4px;
    box-shadow: 0 8px currentColor, 0 -8px currentColor;
  }
`
