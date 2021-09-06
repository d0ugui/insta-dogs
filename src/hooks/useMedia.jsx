import { useState } from 'react'
import { useEffect } from 'react/cjs/react.development'

export function useMedia(media) {
  const [match, setMatch] = useState()

  useEffect(() => {
    function changeMatch() {
      const { matches } = window.matchMedia(media)
      setMatch(matches)
    }
    changeMatch()
    window.addEventListener('resize', changeMatch)
    return () => {
      window.removeEventListener('resize', changeMatch)
    }
  }, [media])

  return match
}
