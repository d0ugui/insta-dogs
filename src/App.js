import { GlobalStyle } from './styles/global'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Home } from './components/Home'
import { Login } from './components/Login'
import { User } from './components/User'
import { Photo } from './components/Photo'

import { UserStorage } from './context/UserContext'
import { ProtectedRoute } from './components/Helper/ProtectedRoute'

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <ProtectedRoute path="conta/*" element={<User />} />
            <Route path="foto/:id" element={<Photo />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
      <GlobalStyle />
    </div>
  )
}

export default App
