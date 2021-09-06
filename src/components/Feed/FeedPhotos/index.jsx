import { useEffect } from 'react'

import { Error } from '../../Helper'
import { Loading } from '../../Helper/Loading'
import { FeedPhotosItem } from '../FeedPhotosItem'

import { useFetch } from '../../../hooks/useFetch'
import { PHOTOS_GET } from '../../../api/api'

import { Feed } from './styles'

export function FeedPhotos() {
  const { data, loading, error, request } = useFetch()

  useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 })
      const { json } = await request(url, options)
      console.log(json)
    }
    fetchPhotos()
  }, [request])

  if (error) return <Error error={error} />
  if (loading) return <Loading />
  if (data)
    return (
      <Feed className="animeLeft">
        {data.map((photo) => (
          <FeedPhotosItem key={photo.id} photo={photo} />
        ))}
      </Feed>
    )
  else return null
}
