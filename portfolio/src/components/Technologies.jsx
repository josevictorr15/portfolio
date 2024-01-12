import React from 'react'
import "./Technologies.css"
import { DiHtml5, DiCss3, DiJsBadge, DiReact, DiJqueryLogo, DiBootstrap, DiGit } from "react-icons/di";
import { BiLogoTypescript } from "react-icons/bi";

const Technologies = () => {
  return (
    <div className='technology-container'>
        <h3>Tecnologias</h3>
        <p id='my-ability'>Minhas habilidades</p>
        <div className="technologies">
            <div className='row'>
                <div className="ability">
                    <DiHtml5 className="ability-icon"/>
                    <p>HTML</p>
                </div>
                <div className="ability">
                    <DiCss3 className="ability-icon"/>
                    <p>CSS</p>
                </div>
                <div className="ability">
                    <DiJsBadge className="ability-icon"/>
                    <p>JavaScript</p>
                </div>
                <div className="ability">
                    <BiLogoTypescript className="ability-icon"/>
                    <p>TypeScript</p>
                </div>
            </div>
            <div className='row'>
                <div className="ability">
                    <DiReact className="ability-icon"/>
                    <p>React</p>
                </div>
                <div className="ability">
                    <DiJqueryLogo className="ability-icon"/>
                    <p>jQuery</p>
                </div>
                <div className="ability">
                    <DiBootstrap className="ability-icon"/>
                    <p>Bootstrap</p>
                </div>
                <div className="ability">
                    <DiGit className="ability-icon"/>
                    <p>Git</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Technologies