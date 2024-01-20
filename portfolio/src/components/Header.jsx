import React from 'react'
import "./Header.css"
import logo from "../assets/Lovepik_com-450044973-Vector Programming Icon.png"
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'

const Header = () => {
  const { t } = useTranslation()

  return (
    <div className='header'>
        <img src={logo} alt='Logo do portfolio' />
        <div className="navbar">
          <a href="#">{t("about")}</a>
          <a href="#">{t("technologies")}</a>
          <a href="#">{t("projects")}</a>
          <a href="#">Linktree</a>
        </div>
        <div className="language-change">
          <LanguageSwitcher />
        </div>
    </div>
  )
}

export default Header