import { useState } from 'react'

import { useFetch } from '../../../hooks/useFetch'
import { COMMENT_POST } from '../../../api/api'
import { Error } from '../../Helper'

import { ReactComponent as Image } from '../../../assets/enviar.svg'
import { Form } from './styles'

export function PhotoCommentsForm({ id, setComments }) {
  const [comment, setComment] = useState('')
  const { request, error } = useFetch()

  async function handleSubmit(e) {
    e.preventDefault()
    const { url, options } = COMMENT_POST(id, { comment })
    const { response, json } = await request(url, options)
    if (response.ok) {
      setComment('')
      setComments((comments) => [...comments, json])
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <textarea
        id="comment"
        name="comment"
        placeholder="Comente"
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      ></textarea>
      <button>
        <Image />
      </button>
      <Error error={error} />
    </Form>
  )
}
