import { useContext, useState } from 'react'

import { UserContext } from '../../../context/UserContext'
import { PhotoCommentsForm } from '../PhotoCommentsForm'

import { Items } from './styles'

export function PhotoComments(props) {
  const [comments, setComments] = useState(() => props.comments)
  const { login } = useContext(UserContext)

  return (
    <>
      <Items>
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </Items>
      {login && <PhotoCommentsForm id={props.id} setComments={setComments} />}
    </>
  )
}
