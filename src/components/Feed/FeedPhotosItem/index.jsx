import { PhotoItem } from './styles'

export function FeedPhotosItem({ photo, setModalPhoto }) {
  function handleClick() {
    setModalPhoto(photo)
  }

  return (
    <PhotoItem onClick={handleClick}>
      <img src={photo.src} alt={photo.title} />
      <span>{photo.acessos}</span>
    </PhotoItem>
  )
}
