import { Wrapper } from './style'

export function Input({ label, type, name }) {
  return (
    <Wrapper>
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} type={type} />
      <p>Error</p>
    </Wrapper>
  )
}
