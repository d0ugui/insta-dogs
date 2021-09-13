import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Home } from './components/Home'
import { Login } from './components/Login'
import { User } from './components/User'
import { Photo } from './components/Photo'

import { UserStorage } from './context/UserContext'
import { ProtectedRoute } from './components/Helper/ProtectedRoute'
import { UserProfile } from './components/User/UserProfile'
import { NotFound } from './components/NotFound/NotFounde'

import { GlobalStyle, Container, AppBody } from './styles/global'

function App() {
  return (
    <Container>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <AppBody>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="login/*" element={<Login />} />
              <ProtectedRoute path="conta/*" element={<User />} />
              <Route path="foto/:id" element={<Photo />} />
              <Route path="perfil/:user" element={<UserProfile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AppBody>
          <Footer />
        </UserStorage>
      </BrowserRouter>
      <GlobalStyle />
    </Container>
  )
}

export default App
