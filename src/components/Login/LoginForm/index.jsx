import { useContext } from 'react'

import { Link } from 'react-router-dom'
import { Button } from '../../Forms/Button'
import { Input } from '../../Forms/Input'
import { useForm } from '../../../hooks/useForm'
import { Error } from '../../Helper'

import { UserContext } from '../../../context/UserContext'

import { Container } from './style'

export function LoginForm() {
  const username = useForm()
  const password = useForm()

  const { userLogin, error, loading } = useContext(UserContext)

  async function handleSubmit(e) {
    e.preventDefault()

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value)
    }
  }

  return (
    <Container className="animeLeft">
      <h1 className="title">Login</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? <Button disabled>Carregando...</Button> : <Button>Entrar</Button>}
        <Error error={error} />
      </form>
      <Link className="perdeu" to="/login/perdeu">
        Perdeu a senha?
      </Link>
      <div className="cadastro">
        <h2>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className="buttonCriar" to="/login/criar">
          Cadastro
        </Link>
      </div>
    </Container>
  )
}
