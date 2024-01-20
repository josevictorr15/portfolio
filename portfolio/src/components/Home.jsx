import React from 'react';
import foto from "../assets/Foto de perfil.jpeg";
import { FaLaptopCode } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

import "./Home.css";


const About = () => {
  const  { t } = useTranslation()

  return (
    <div className="container">
        <img src={foto} alt="Foto de perfil" />
        <div className="about-container">
          <h2>José Victor</h2>
          <div className="about">
            <FaLaptopCode />
            <p>{t("about1")}</p>
          </div>
          <div className="about">
            <FaUserGraduate />
            <p>{t("about2")}</p>
          </div>
          <div className="about">
            <FaRocket />
            <p>{t("about3")}</p>
          </div>
          <div className="link-buttons">
            <button>
              <FaGithub />
              <p>Github</p>
            </button>
            <button>
              <FaLinkedinIn />
              <p>Linkedin</p>
            </button>
          </div>
        </div>
    </div>
  )
}

export default About