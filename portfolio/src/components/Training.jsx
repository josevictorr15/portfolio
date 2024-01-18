import React from 'react'
import "./Training.css"
import { TfiEmail } from "react-icons/tfi";
import { MdContentCopy } from "react-icons/md";
import { MdOutlineWhatsapp } from "react-icons/md";
import { FaInstagram, FaWhatsapp, FaTwitter, FaLinkedin} from "react-icons/fa";


const Training = () => {
  return (
    <div className='footer'>
        <div className="row">
            <div className="col">
                <h4 className='title'>Formação <div className="underline"><span></span></div></h4>
                <div className="course">
                    <p className="course-title">Análise e Desenvolvimento de sistemas</p>
                    <p style={{color: "#808080", fontSize: "12px"}}>- Estácio (2022 - 2024)</p>
                </div>
                <div className="course">
                    <p>Curso Web Morderno Completo</p>
                    <p style={{color: "#808080", fontSize: "12px"}}>- Udemy (2023 - 2024)</p>
                </div>
                <div className="course">
                    <p>Formação Front-end</p>
                    <p style={{color: "#808080", fontSize: "12px"}}>- Udemy (2023)</p>
                </div>
            </div>
            <div className="col">
                <h4 className='title'>Soft skills <div className="underline"><span></span></div></h4>
                <p className='soft-skills'>Trabalho em equipe</p>
                <p className='soft-skills'>Resolução de problemas</p>
                <p className='soft-skills'>Agilidade de aprendizado</p>
                <p className='soft-skills'>Trabalho sob pressão</p>
                <p className='soft-skills'>Comunicação</p>
                <p className='soft-skills'>Capacidade de adaptação</p>
                <p className='soft-skills'>Flexibilidade</p>
            </div>
            <div className="col">
                <h4 className='title'>Contato <div className="underline"><span></span></div></h4>
                    <div className="email-container">
                        <TfiEmail className="email-icon"/>
                        <p>victorsantanaa2011@hotmail.com</p>
                        <MdContentCopy className="copy-btn"/>
                    </div>
                    <div className="socia-icons">
                        <FaWhatsapp className="icons"/>
                        <FaInstagram className="icons"/>
                        <FaTwitter className="icons"/>
                        <FaLinkedin className="icons"/>
                    </div>
            </div>
        </div>
        <hr />
        <p className='copyright'>José Victor @ 2024 - All Rights Reserved</p>
    </div>
  )
}

export default Training