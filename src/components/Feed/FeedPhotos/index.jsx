import { useEffect } from 'react'

import { Error } from '../../Helper'
import { Loading } from '../../Helper/Loading'
import { FeedPhotosItem } from '../FeedPhotosItem'

import { useFetch } from '../../../hooks/useFetch'
import { PHOTOS_GET } from '../../../api/api'

import { Feed } from './styles'

export function FeedPhotos({ page, user, setModalPhoto, setInfinite }) {
  const { data, loading, error, request } = useFetch()

  useEffect(() => {
    async function fetchPhotos() {
      const total = 3
      const { url, options } = PHOTOS_GET({ page, total, user })
      const { response, json } = await request(url, options)
      console.log('Request: ', json)
      if (response && response.ok && json.length < total) setInfinite(false)
    }
    fetchPhotos()
  }, [request, user, page, setInfinite])

  if (error) return <Error error={error} />
  if (loading) return <Loading />
  if (data)
    return (
      <Feed className="animeLeft">
        {data.map((photo) => (
          <FeedPhotosItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </Feed>
    )
  else return null
}
