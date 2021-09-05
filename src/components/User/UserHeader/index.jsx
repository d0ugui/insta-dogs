import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { UserHeaderNav } from '../UserHeaderNav'

import { Container } from './styles'

export function UserHeader() {
  const [title, setTitle] = useState('')
  const location = useLocation()

  useEffect(() => {
    const { pathname } = location
    switch (pathname) {
      case '/conta/postar':
        setTitle('Poste sua foto')
        break
      case '/conta/estatisticas':
        setTitle('Estatísticas')
        break
      default:
        setTitle('Minha Conta')
    }
  }, [location])

  return (
    <Container>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </Container>
  )
}
