import React from 'react'
import quizImg from "../assets/quiz-react.png";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

const Projects = () => {
  return (
    <div>
        <h3>Projetos</h3>
        <div className="projects-container">
            <div className="card">
                <img src={quizImg} alt="Tela inicial do projeto"/>
                <div className="card-description">
                    <h4>Quiz Front-End</h4>
                    <p>Um quiz de front-end com perguntas sobre HTML, CSS, JavaScript e React.</p>
                    <div className="card-footer">
                        <div className="tec-icons">
                            <FaHtml5 />
                            <FaCss3 />
                            <FaJsSquare />
                            <FaReact />
                        </div>
                        <button>Ver mais</button>
                    </div>
                </div>
            </div>
            <div className="card">
                <img src={quizImg} alt="Tela inicial do projeto"/>
                <div className="card-description">
                    <h4>Quiz Front-End</h4>
                    <p>Um quiz de front-end com perguntas sobre HTML, CSS, JavaScript e React.</p>
                    <div className="card-footer">
                        <div className="tec-icons">
                            <FaHtml5 />
                            <FaCss3 />
                            <FaJsSquare />
                            <FaReact />
                        </div>
                        <button>Ver mais</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects