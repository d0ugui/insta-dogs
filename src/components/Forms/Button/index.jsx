import { Btn } from './style'

export function Button({ children, ...props }) {
  return <Btn {...props}>{children}</Btn>
}
