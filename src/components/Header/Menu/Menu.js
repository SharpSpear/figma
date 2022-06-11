import React from "react"
import './Menu.css'
import { NavLink } from "react-router-dom"

const Menu = () => {
  return (
    <div className="menu">
      <NavLink to="#">About</NavLink>
      <NavLink to="#">Strategy</NavLink>
      <NavLink to="#">Rewards & Taxes</NavLink>
      <NavLink to="#">RoadMap</NavLink>
    </div>
  )
}

export default Menu;