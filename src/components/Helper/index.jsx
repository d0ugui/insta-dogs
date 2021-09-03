import { P } from './style'

export function Error({ error }) {
  if (!error) return null
  return <P>{error}</P>
}
