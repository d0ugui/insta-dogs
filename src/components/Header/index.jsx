import { HeaderContainer } from './style'

import { Link } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
import { ReactComponent as Dogs } from '../../assets/dogs.svg'
import { useContext } from 'react'

export function Header() {
  const { data, userLogout } = useContext(UserContext)

  return (
    <HeaderContainer>
      <nav className="container">
        <Link className="logo" to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        {data ? (
          <Link className="login" to="/conta">
            {data.nome}
            <button onClick={userLogout}>Sair</button>
          </Link>
        ) : (
          <Link className="login" to="/login">
            Login/Criar
          </Link>
        )}
      </nav>
    </HeaderContainer>
  )
}
