import React from 'react'
import quizImg from "../assets/quiz-react.png";
import calcImcImg from "../assets/calculadora-imc.png"
import javascript from "../assets/icons8-javascript.svg"
import react from "../assets/icons8-react.svg"
import "./Projects.css"
import { useTranslation } from 'react-i18next';

const Projects = () => {
    const { t } = useTranslation() 

  return (
    <div className="projects-container">
        <h3>{t("projects")}</h3>
        <div className="project">
            <div className="project-content">
                <h4>Formulário Multi-Step</h4>
                <p></p>
                <div className="project-tecnology">
                    <img src={react}/>
                </div>
                <div className="project-buttons">
                    <a href="#">
                        <span>Deploy</span>
                    </a>
                    <a href="#">
                        <span>{t("repository")}</span>
                    </a>
                </div>
            </div>
            <img src={quizImg} className='project-img'/>
        </div>
        <div className="project">
            <img src={quizImg} className='project-img' style={{marginRight: "4rem"}}/>
            <div className="project-content" style={{textAlign: 'start'}}>
                <h4 style={{textAlign: "start"}}>Quiz Front-end</h4>
                <p>{t("quizDescription")}</p>
                <div className="project-tecnology">
                    <img src={react}/>
                </div>
                <div className="project-buttons" style={{justifyContent: "flex-start"}}>
                    <button className='deploy'><span>Deploy</span><i></i></button>
                    <button className='repository'><span>{t("repository")}</span><i></i></button>
                </div>
            </div>
        </div>
        <div className="project">
            <div className="project-content">
                <h4>{t("calcTitle")}</h4>
                <p style={{textAlign: "initial"}}>{t("calcDescription")}</p>
                <div className="project-tecnology">
                    <img src={react}/>
                </div>
                <div className="project-buttons">
                    <button className='deploy'><span>Deploy</span><i></i></button>
                    <button className='repository'><span>{t("repository")}</span><i></i></button>
                </div>
            </div>
            <img src={calcImcImg} className='project-img'/>
        </div>
        <a href="#">Ver todos os projetos</a>
    </div>
  )
}

export default Projects