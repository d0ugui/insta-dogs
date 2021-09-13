import { useState, useEffect } from 'react'

import { Input } from '../../Forms/Input'
import { Button } from '../../Forms/Button'
import { useForm } from '../../../hooks/useForm'
import { useFetch } from '../../../hooks/useFetch'
import { PASSWORD_RESET } from '../../../api/api'
import { Error } from '../../Helper'
import { useNavigate } from 'react-router'
import { Head } from '../../Helper/Head'

export function LoginPasswordReset() {
  const [login, setLogin] = useState('')
  const [key, setKey] = useState('')
  const password = useForm()
  const { error, loading, request } = useFetch()
  const navigate = useNavigate()

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const login = params.get('login')
    const key = params.get('key')

    if (key) setKey(key)
    if (login) setLogin(login)
  }, [])

  async function handleSubmit(event) {
    event.preventDefault()
    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value
      })
      const { response } = await request(url, options)
      if (response.ok) navigate('/login')
    }
  }

  return (
    <div>
      <Head title="Reseta a senha" />
      <h1 className="title">Resete a senha</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Nova senha" type="password" name="password" {...password} />
        {loading ? <Button disabled>Resetando...</Button> : <Button>Resetar</Button>}
      </form>
      <Error error={error} />
    </div>
  )
}
