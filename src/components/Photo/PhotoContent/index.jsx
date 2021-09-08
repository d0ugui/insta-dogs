import { Link } from 'react-router-dom'

import { PhotoComments } from '../PhotoComments'

import { Content } from './styles'

export function PhotoContent({ data }) {
  const { photo, comments } = data

  return (
    <Content>
      <div>
        <img src={photo.src} alt={photo.title} />
      </div>
      <div>
        <div>
          <p>
            <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            <span>{photo.acessos}</span>
          </p>
          <h1 className="title">
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul>
            <li>{photo.peso} kg</li>
            <li>{photo.idade > 1 ? `${photo.idade} anos` : `${photo.idade} ano`}</li>
          </ul>
        </div>
        <PhotoComments id={photo.id} comments={comments} />
      </div>
    </Content>
  )
}
