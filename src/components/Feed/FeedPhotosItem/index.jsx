import { PhotoItem } from './styles'

export function FeedPhotosItem({ photo }) {
  return (
    <PhotoItem>
      <img src={photo.src} alt={photo.title} />
      <span>{photo.acessos}</span>
    </PhotoItem>
  )
}
