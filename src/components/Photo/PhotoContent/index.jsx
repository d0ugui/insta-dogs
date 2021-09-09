import { useContext } from 'react'
import { Link } from 'react-router-dom'

import { UserContext } from '../../../context/UserContext'
import { PhotoComments } from '../PhotoComments'
import { PhotoDelete } from '../PhotoDelete'

import { Content, Details } from './styles'

export function PhotoContent({ data }) {
  const user = useContext(UserContext)
  const { photo, comments } = data

  return (
    <Content>
      <div className="imag">
        <img src={photo.src} alt={photo.title} />
      </div>
      <div>
        <Details>
          <p>
            {user.data && user.data.username === photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            )}
            <span>{photo.acessos}</span>
          </p>
          <h1 className="title">
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul>
            <li>{photo.peso} kg</li>
            <li>{photo.idade > 1 ? `${photo.idade} anos` : `${photo.idade} ano`}</li>
          </ul>
        </Details>
      </div>
      <PhotoComments id={photo.id} comments={comments} />
    </Content>
  )
}
