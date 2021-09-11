import { useState, useEffect, useRef, useContext } from 'react'

import { UserContext } from '../../../context/UserContext'
import { PhotoCommentsForm } from '../PhotoCommentsForm'

import { Items } from './styles'

export function PhotoComments(props) {
  const [comments, setComments] = useState(() => props.comments)
  const commentsSection = useRef(null)
  const { login } = useContext(UserContext)

  useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight
  }, [comments])

  return (
    <>
      <Items ref={commentsSection} className={props.single ? 'single ' : ''}>
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </Items>
      {login && (
        <PhotoCommentsForm
          single={props.single}
          id={props.id}
          setComments={setComments}
        />
      )}
    </>
  )
}
