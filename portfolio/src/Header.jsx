import React from 'react'
import "./Header.css"
import logo from "./assets/Lovepik_com-450044973-Vector Programming Icon.png"
import phone from "./assets/telefone-tocando.png"

const Header = () => {
  return (
    <div className='header'>
        <img src={logo} alt='Logo do portfolio' />
        <div className="navbar">
          <a href="#">Sobre mim</a>
          <a href="#">Projetos</a>
          <a href="#">Habilidades</a>
          <a href="#">Linktree</a>
        </div>
        <div className="language-change">
          <p>Idioma</p>
        </div>
    </div>
  )
}

export default Header