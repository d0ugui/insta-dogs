import { useContext } from 'react'

import { Routes, Route, Navigate } from 'react-router-dom'

import { LoginForm } from './LoginForm'
import { LoginCreate } from './LoginCreate'
import { LoginPasswordLost } from './LoginPasswordLost'
import { LoginPasswordReset } from './LoginPasswordReset'
import { UserContext } from '../../context/UserContext'

import { Container } from './style'
import { NotFound } from '../NotFound/NotFounde'

export function Login() {
  const { login } = useContext(UserContext)

  if (login === true) return <Navigate to="/conta" />

  return (
    <Container>
      <div className="forms">
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="perdeu" element={<LoginPasswordLost />} />
          <Route path="reset" element={<LoginPasswordReset />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Container>
  )
}
