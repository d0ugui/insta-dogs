import { Link } from 'react-router-dom'

export function Header() {
  return (
    <div>
      <nav className="container">
        <Link to="/">Home</Link>
        <Link to="/login">Login/Criar</Link>
      </nav>
    </div>
  )
}
