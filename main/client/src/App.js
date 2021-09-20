import { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router'
import Nav from './components/Nav'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import NewOrder from './pages/NewOrder'
import MyOrders from './pages/MyOrders'
import SignIn from './pages/SignIn'

function App() {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  // const handleLogOut = () => {
  //   //Reset all auth related state and clear localstorage
  //   setUser(null)
  //   toggleAuthenticated(false)
  //   localStorage.clear()
  // }

  // const checkToken = async () => {
  //   const session = await CheckSession()
  //   setUser(session)
  //   toggleAuthenticated(true)
  // }

  // useEffect(() => {
  //   const token = localStorage.getItem('token')
  //   if (token) {
  //     checkToken()
  //   }
  // }, [])

  return (
    <div className="App">
      <Nav
        authenticated={authenticated}
        user={user}
        // handleLogOut={handleLogOut}
      />

      <main>
        <p>Howdy y'all</p>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/neworder/:restaurant_id" component={NewOrder} />
          <Route path="/myorders" component={MyOrders} />
          <Route path="/signin" component={SignIn} />
          <Route path="/aboutus" component={AboutUs} />
        </Switch>
      </main>
    </div>
  )
}

export default App
