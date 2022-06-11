import React from "react"
import { LogoIcon } from "../../icons"
import Menu from "./Menu/Menu"
import './Header.css'

const Header = () => {
  return(
    <header className="header">
      <div className="logo">
        <LogoIcon/>
      </div>
      <div className="logo-title">
        Eternity Earn
      </div>
      <Menu/>
      <div className="tool">
        <div className="whitepaper">Whitepaper</div>
        <button className="blue-btn btn">Launch Dapp</button>
      </div>
        
    </header>
  )
}

export default Header;