import React from 'react'
import logo from '../logo.svg'

export default function Header() {
  return (
    <div className='top'>
        <nav>
            <img src={logo} className="logo"></img>
        </nav>
        <h1 className='title'>Getting Started</h1>
        <p>Create an account and start using the app</p>
    </div>
  )
}
