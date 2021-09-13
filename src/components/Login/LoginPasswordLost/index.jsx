import { Input } from '../../Forms/Input'
import { Button } from '../../Forms/Button'
import { useForm } from '../../../hooks/useForm'
import { useFetch } from '../../../hooks/useFetch'
import { PASSWORD_LOST } from '../../../api/api'
import { Error } from '../../Helper'

export function LoginPasswordLost() {
  const login = useForm()
  const { data, loading, error, request } = useFetch()

  async function handleSubmit(event) {
    event.preventDefault()
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace('perdeu', 'resetar')
      })
      const { json } = await request(url, options)
      console.log(json)
    }
  }

  return (
    <section>
      <h1 className="title">Perdeu a senha?</h1>
      {data ? (
        <p style={{ color: '#4c1' }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="login" {...login} />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar email</Button>
          )}
        </form>
      )}

      <Error error={error} />
    </section>
  )
}
