import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <NavLink to="/simple-oscillator">Simple Oscillator</NavLink>
      <span> </span>
      <NavLink to="/fm-signal">FM Oscillator</NavLink>
    </nav>
  )
}

export default Nav;
