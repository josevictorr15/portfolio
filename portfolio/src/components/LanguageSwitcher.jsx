import React from 'react'
import br from "../assets/icons8-brasil-100.png"
import us from "../assets/icons8-eua-100.png"
import { useTranslation } from 'react-i18next'

import "./LanguageSwitcher.css"

const LanguageSwitcher = () => {
    const { t, i18n } = useTranslation()

    const languageOptions = [
        {
            name: "Português",
            value: "ptBR",
            flag: br
        },
        {
            name: "English",
            value: "en",
            flag: us
        }
    ]

  return (
    <div className='language-switcher'>

        {languageOptions.map(languageOption => (
            <button key={languageOption.value} onClick={() => {
                i18n.changeLanguage(languageOption.value)
            }}>
                <img src={languageOption.flag} alt={languageOption.name}/>
            </button>
        ))}
    </div>
  )
}

export default LanguageSwitcher