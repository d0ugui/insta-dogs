import { useEffect } from 'react'

import { useFetch } from '../../../hooks/useFetch'
import { PHOTO_GET } from '../../../api/api'

import { Error } from '../../Helper'
import { Loading } from '../../Helper/Loading'
import { PhotoContent } from '../../Photo/PhotoContent'

import { Modal } from './styles'

export function FeedModal({ photo }) {
  const { data, error, loading, request } = useFetch()

  useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id)
    request(url, options)
  }, [photo, request])

  return (
    <Modal>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </Modal>
  )
}
