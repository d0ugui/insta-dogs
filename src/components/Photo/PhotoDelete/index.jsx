import { PHOTO_DELETE } from '../../../api/api'
import { useFetch } from '../../../hooks/useFetch'
import { Delete } from './styles'

export function PhotoDelete({ id }) {
  const { loading, request } = useFetch()

  async function handleClick() {
    const confirm = window.confirm('Tem certeza que deseja deletar?')
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id)
      const { response } = await request(url, options)
      if (response.ok) window.location.reload()
    }
  }

  return (
    <>
      {loading ? (
        <Delete disabled>Deletando...</Delete>
      ) : (
        <Delete onClick={handleClick}>Deletar</Delete>
      )}
    </>
  )
}
