import React, { useState } from 'react'
import { SignInUser } from '../services/Auth'

export default function SignIn(props) {
  const [signInFormValues, setSignInFormValues] = useState({
    email: '',
    password: ''
  })

  const signInHandleChange = (e) => {
    setSignInFormValues({
      ...signInFormValues,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(signInFormValues)
    setSignInFormValues({ email: '', password: '' })
    props.setUser(payload)
    props.toggleAuthenticated(true)
    props.history.push('/feed')
  }

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
    <div className="sign-in-page">
      <div>
        <h1>Sign In</h1>
        <button onClick={tempSignIn}>Fake Sign In</button>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              onChange={signInHandleChange}
              name="email"
              type="email"
              placeholder="example@example.com"
              value={signInFormValues.email}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              onChange={signInHandleChange}
              type="password"
              name="password"
              value={signInFormValues.password}
              required
            />
          </div>
          <button
            disabled={!signInFormValues.email || !signInFormValues.password}
          >
            Sign In
          </button>
        </form>
      </div>
      <div>
        <h1>Sign Up</h1>
      </div>
    </div>
  )
}
