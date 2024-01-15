import React from 'react'
import quizImg from "../assets/quiz-react.png";
import html from "../assets/icons8-html.svg"
import css from "../assets/icons8-css.svg"
import javascript from "../assets/icons8-javascript.svg"
import react from "../assets/icons8-html.svg"
import "./Projects.css"

const Projects = () => {
  return (
    <div className="projects-container">
        <h3>Projetos</h3>
        <div className="projects-card">
            <div className="card">
                <img src={quizImg} className='card-img' />
                <div className="card-body">
                    <h1 className="card-title">NYC</h1>
                    <p className="card-sub-title">New York City</p>
                    <p className="card-info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate doloribus, iure a laborum veniam, et velit vitae magni labore ipsum incidunt esse in quasi laboriosam architecto, nostrum facilis quidem dolor.</p>
                    <button className="card-btn">Book tour</button>
                </div>
            </div>
            <div className="card">
                <div className="mac-btns">
                    <div className="red"></div>
                    <div className="yellow"></div>
                    <div className="green"></div>
                </div>
                <img src={quizImg} className='card-img' />
                <div className="card-body">
                    <h1 className="card-title">Quiz Front-end</h1>
                    <p className="card-info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate doloribus, iure a laborum veniam, et velit vitae magni labore ipsum incidunt esse in quasi laboriosam architecto, nostrum facilis quidem dolor.</p>
                    <button className="card-btn">Book tour</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects