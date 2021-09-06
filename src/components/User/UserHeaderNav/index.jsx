import { useContext, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import { UserContext } from '../../../context/UserContext'
import { useMedia } from '../../../hooks/useMedia'

import { ReactComponent as MinhasFotos } from '../../../assets/feed.svg'
import { ReactComponent as Estatisticas } from '../../../assets/estatisticas.svg'
import { ReactComponent as AdicionarFoto } from '../../../assets/adicionar.svg'
import { ReactComponent as Sair } from '../../../assets/sair.svg'

import { Nav, MobileButton } from './styles'
import { useEffect } from 'react/cjs/react.development'

export function UserHeaderNav() {
  const { userLogout } = useContext(UserContext)
  const mobile = useMedia('(max-width: 40rem)')
  const [mobileMenu, setMobileMenu] = useState(false)

  const { pathname } = useLocation()
  useEffect(() => {
    setMobileMenu(false)
  }, [pathname])

  return (
    <>
      {mobile && (
        <MobileButton
          className={mobileMenu && 'mobileButtonActive'}
          aria-label="menu"
          onClick={() => setMobileMenu(!mobileMenu)}
        ></MobileButton>
      )}
      <Nav
        className={`${mobile ? 'navMobile' : ''} ${mobileMenu && 'navMobileActive'}`}
      >
        <NavLink to="/conta" end activeClassName="active">
          <MinhasFotos />
          {mobile && 'Minhas fotos'}
        </NavLink>
        <NavLink to="/conta/estatisticas" activeClassName="active">
          <Estatisticas />
          {mobile && 'Estatísticas'}
        </NavLink>
        <NavLink to="/conta/postar" activeClassName="active">
          <AdicionarFoto />
          {mobile && 'Adicionar Foto'}
        </NavLink>
        <button onClick={userLogout}>
          <Sair />
          {mobile && 'Sair'}
        </button>
      </Nav>
    </>
  )
}
