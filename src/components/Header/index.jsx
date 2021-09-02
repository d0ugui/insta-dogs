import { HeaderContainer } from './style'

import { Link } from 'react-router-dom'

import { ReactComponent as Dogs } from '../../assets/dogs.svg'

export function Header() {
  return (
    <HeaderContainer>
      <nav className="container">
        <Link className="logo" to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        <Link className="login" to="/login">
          Login/Criar
        </Link>
      </nav>
    </HeaderContainer>
  )
}
