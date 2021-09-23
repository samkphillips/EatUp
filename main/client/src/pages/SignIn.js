import React, { useState } from 'react'
import { SignInUser, RegisterUser } from '../services/Auth'

const iStateSignIn = {
  email: '',
  password: ''
}

const iStateRegister = {
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
}

export default function SignIn(props) {
  const [signInFormValues, setSignInFormValues] = useState(iStateSignIn)

  const signInHandleChange = (e) => {
    setSignInFormValues({
      ...signInFormValues,
      [e.target.name]: e.target.value
    })
  }

  const signInHandleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(signInFormValues)
    setSignInFormValues(iStateSignIn)
    props.setUser(payload)
    props.toggleAuthenticated(true)
    props.history.push('/')
  }

  const [registerFormValues, setRegisterFormValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const registerHandleChange = (e) => {
    setRegisterFormValues({
      ...registerFormValues,
      [e.target.name]: e.target.value
    })
  }

  const registerHandleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser({
      name: registerFormValues.name,
      email: registerFormValues.email,
      password: registerFormValues.password
    })
    setRegisterFormValues(iStateRegister)
    props.history.push('/signin')
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
        <form onSubmit={signInHandleSubmit}>
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
        <form onSubmit={registerHandleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              onChange={registerHandleChange}
              name="name"
              type="text"
              placeholder="John Smith"
              value={registerFormValues.name}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              onChange={registerHandleChange}
              name="email"
              type="email"
              placeholder="example@example.com"
              value={registerFormValues.email}
              required
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              onChange={registerHandleChange}
              type="password"
              name="password"
              value={registerFormValues.password}
              required
            />
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              onChange={registerHandleChange}
              type="password"
              name="confirmPassword"
              value={registerFormValues.confirmPassword}
              required
            />
          </div>
          <button
            disabled={
              !registerFormValues.name ||
              !registerFormValues.email ||
              !registerFormValues.password ||
              registerFormValues.confirmPassword !== registerFormValues.password
            }
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}
