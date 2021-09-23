import { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router'
import { useLocation } from 'react-router-dom'
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
  const [loading, setLoading] = useState(true)
  const [authenticated, toggleAuthenticated] = useState(
    false || localStorage.getItem('authenticated')
  )
  const [user, setUser] = useState(null)

  const path = useLocation().pathname
  const location = path.split('/')[1]

  console.log(location)

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
      checkToken().then(() => setLoading(false))
    }
  }, [])

  return (
    <div className="App">
      {loading ? (
        <div>
          <h3>Loading</h3>
        </div>
      ) : (
        <div className={'body ' + location}>
          <div>
            <Nav
              authenticated={authenticated}
              user={user}
              handleLogOut={handleLogOut}
            />
          </div>

          <main>
            {/* {authenticated && user && <h3>Welcome {user.email}!</h3>} */}
            <Switch>
              <Route
                exact
                path="/"
                component={(props) => <Home {...props} />}
              />
              <ProtectedRoute
                authenticated={authenticated}
                user={user}
                path="/neworder/:restaurant_id"
                component={(props) => <NewOrder {...props} user={user} />}
              />
              <ProtectedRoute
                authenticated={authenticated}
                user={user}
                path="/myorders"
                component={(props) => <MyOrders {...props} user={user} />}
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
      )}
    </div>
  )
}

export default App
