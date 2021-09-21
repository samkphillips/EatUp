import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav({ authenticated, user, handleLogOut }) {
  let authenticatedOptions

  if (user) {
    authenticatedOptions = (
      <nav>
        <h3>Welcome {user.email}!</h3>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/myorders">My Orders</NavLink>
        <NavLink onClick={handleLogOut} to="/">
          Sign Out
        </NavLink>
        <NavLink to="/aboutus">About Us</NavLink>
      </nav>
    )
  }

  const publicOptions = (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/myorders">My Orders</NavLink>
      <NavLink to="/signin">Sign In</NavLink>
      <NavLink to="/aboutus">About Us</NavLink>
    </nav>
  )

  return (
    <header>
      <NavLink to="/">eatUp Logo</NavLink>
      {authenticated && user ? authenticatedOptions : publicOptions}
      {/* <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/myorders">My Orders</NavLink>
        <NavLink to="/signin">Sign In</NavLink>
        <NavLink to="/aboutus">About Us</NavLink>
      </nav> */}
    </header>
  )
}
