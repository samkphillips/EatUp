import React from 'react'
import { SignInUser } from '../services/Auth'

export default function SignIn(props) {
  const tempSignIn = async (e) => {
    const payload = await SignInUser({
      email: 'example@fakemail.com',
      password: '1234'
    })
    props.setUser(payload)
    props.toggleAuthenticated(true)
    props.history.push('/')
  }

  return (
    <div>
      <h1>Sign In or Sign Up</h1>
      <button onClick={tempSignIn}>Sign In</button>
    </div>
  )
}
