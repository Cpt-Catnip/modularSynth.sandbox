import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <span> </span>
      <NavLink to="/simple-oscillator">Simple Oscillator</NavLink>
      <span> </span>
      <NavLink to="/fm-signal">FM Oscillator</NavLink>
      <span> </span>
      <NavLink to="/controlled-module">Controlled Module</NavLink>
    </nav>
  )
}

export default Nav;
