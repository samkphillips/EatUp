import { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router'
import Nav from './components/Nav'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import NewOrder from './pages/NewOrder'
import MyOrders from './pages/MyOrders'
import SignIn from './pages/SignIn'
import './styles/App.css'
import { CheckSession } from './services/Auth'

function App() {
  const [authenticated, toggleAuthenticated] = useState(
    false || localStorage.getItem('authenticated')
  )
  const [user, setUser] = useState(null)

  const handleLogOut = () => {
    //Reset all auth related state and clear localstorage
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  const checkToken = async () => {
    const session = await CheckSession()
    setUser(session)
    toggleAuthenticated(true)
    localStorage.setItem('authenticated', '1')
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div className="App">
      <Nav
        authenticated={authenticated}
        user={user}
        handleLogOut={handleLogOut}
      />

      <main>
        {/* {authenticated && user && <h3>Welcome {user.email}!</h3>} */}
        <Switch>
          <Route exact path="/" component={(props) => <Home {...props} />} />
          <ProtectedRoute
            authenticated={authenticated}
            user={user}
            path="/neworder/:restaurant_id"
            component={(props) => <NewOrder {...props} />}
          />
          <ProtectedRoute
            authenticated={authenticated}
            user={user}
            path="/myorders"
            component={MyOrders}
          />
          <Route
            path="/signin"
            component={(props) => (
              <SignIn
                {...props}
                setUser={setUser}
                toggleAuthenticated={toggleAuthenticated}
              />
            )}
          />
          <Route path="/aboutus" component={AboutUs} />
        </Switch>
      </main>
    </div>
  )
}

export default App
