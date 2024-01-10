import React from 'react';
import foto from "../assets/Foto de perfil.jpeg";
import { FaLaptopCode } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import "./Home.css";


const About = () => {
  return (
    <div className="container">
        <img src={foto} alt="Foto de perfil" />
        <div className="about-container">
          <h2>José Victor</h2>
          <div className="about">
            <FaLaptopCode />
            <p>Desenvolvedor Web com foco em desenvolvimento frontend desde 2022</p>
          </div>
          <div className="about">
            <FaUserGraduate />
            <p>Cursando Análise e Desenvolvimento de Sistemas</p>
          </div>
          <div className="about">
            <FaRocket />
            <p>Buscando uma oportunidade para atuar como desenvolvedor</p>
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