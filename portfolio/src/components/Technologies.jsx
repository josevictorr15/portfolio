import React from 'react'
import "./Technologies.css"
import { DiJqueryLogo } from "react-icons/di";
import  html  from "../assets/icons8-html.svg"
import  css  from "../assets/icons8-css.svg"
import  javascript  from "../assets/icons8-javascript.svg"
import  typescript  from "../assets/icons8-typescript.svg"
import  react  from "../assets/icons8-react.svg"
import  git  from "../assets/icons8-git.svg"
import  bootstrap  from "../assets/icons8-bootstrap.svg"

const Technologies = () => {
  return (
    <div className='technology-container'>
        <h3>Tecnologias</h3>
        <p id='my-ability'>Minhas habilidades</p>
        <div className="technologies">
            <div className='row'>
                <div className="ability">
                    <img src={html} className='ability-icon'/>
                    <p>HTML</p>
                </div>
                <div className="ability">
                    <img src={css} className='ability-icon'/>
                    <p>CSS</p>
                </div>
                <div className="ability">
                    <img src={javascript} className='ability-icon'/>
                    <p>JavaScript</p>
                </div>
                <div className="ability">
                    <img src={typescript} className='ability-icon'/>
                    <p>TypeScript</p>
                </div>
            </div>
            <div className='row'>
                <div className="ability">
                    <img src={react} className='ability-icon'/>
                    <p>React</p>
                </div>
                <div className="ability">
                    <DiJqueryLogo className='ability-icon'/>
                    <p>jQuery</p>
                </div>
                <div className="ability">
                    <img src={bootstrap} className='ability-icon'/>
                    <p>Bootstrap</p>
                </div>
                <div className="ability">
                    <img src={git} className='ability-icon'/>
                    <p>Git</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Technologies