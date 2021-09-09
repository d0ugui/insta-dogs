import { useState } from 'react'
import { Wrapper } from './styles'

export function Image({ alt, ...props }) {
  const [skeleton, setSkeleton] = useState(true)

  function handleLoad({ target }) {
    setSkeleton(false)
    target.style.opacity = 1
  }

  return (
    <Wrapper>
      {skeleton && <div className="skeleton"></div>}
      <img onLoad={handleLoad} src="" alt={alt} {...props} />
    </Wrapper>
  )
}
