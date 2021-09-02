import { GlobalStyle } from './styles/global'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Home } from './components/Home'
import { Login } from './components/Login'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
      <GlobalStyle />
    </div>
  )
}

export default App
