import React from 'react'
import quizImg from "../assets/quiz-react.png";
import calcImcImg from "../assets/calculadora-imc.png"
import javascript from "../assets/icons8-javascript.svg"
import react from "../assets/icons8-react.svg"
import "./Projects.css"

const Projects = () => {

  return (
    <div className="projects-container">
        <h3>Projetos</h3>
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
                        <span>Repositório</span>
                    </a>
                </div>
            </div>
            <img src={quizImg} className='project-img'/>
        </div>
        <div className="project">
            <img src={quizImg} className='project-img' style={{marginRight: "4rem"}}/>
            <div className="project-content" style={{textAlign: 'start'}}>
                <h4 style={{textAlign: "start"}}>Quiz Front-end</h4>
                <p>Um quiz de front-end com perguntas sobre HTML, CSS, JavaScript e React. Neste projeto eu trabalhei com componentização e não com o React Dom, ou seja, não tem dependências externas do <span style={{fontWeight: "bold", color: "black"}}>React</span>.</p>
                <div className="project-tecnology">
                    <img src={react}/>
                </div>
                <div className="project-buttons" style={{justifyContent: "flex-start"}}>
                    <button className='deploy'><span>Deploy</span><i></i></button>
                    <button className='repository'><span>Repositório</span><i></i></button>
                </div>
            </div>
        </div>
        <div className="project">
            <div className="project-content">
                <h4>Calculadora de IMC</h4>
                <p style={{textAlign: "initial"}}>A calculadora do IMC ajuda a entender se o seu peso está dentro do limite ideal para a sua altura. Feito com <span style={{fontWeight: "bold", color: "black"}}>React</span>, este projeto disponibiliza a funcionalidade de ver o seu índice e sua situação e comparar com a tabela IMC.</p>
                <div className="project-tecnology">
                    <img src={react}/>
                </div>
                <div className="project-buttons">
                    <button className='deploy'><span>Deploy</span><i></i></button>
                    <button className='repository'><span>Repositório</span><i></i></button>
                </div>
            </div>
            <img src={calcImcImg} className='project-img'/>
        </div>
    </div>
  )
}

export default Projects