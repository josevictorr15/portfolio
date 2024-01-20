import React from 'react'
import "./Training.css"
import { TfiEmail } from "react-icons/tfi";
import { MdContentCopy } from "react-icons/md";
import { FaInstagram, FaWhatsapp, FaTwitter, FaLinkedin} from "react-icons/fa";
import { useTranslation } from 'react-i18next';

const Training = () => {
    const { t } = useTranslation()

  return (
    <div className='footer'>
        <div className="row">
            <div className="col">
                <h4 className='title'>{t("formation")} <div className="underline"><span></span></div></h4>
                <div className="course">
                    <p className="course-title">{t("faculty")}</p>
                    <p style={{color: "#808080", fontSize: "12px"}}>- Estácio (2022 - 2024)</p>
                </div>
                <div className="course">
                    <p>{t("courseWeb")}</p>
                    <p style={{color: "#808080", fontSize: "12px"}}>- Udemy (2023 - 2024)</p>
                </div>
                <div className="course">
                    <p>{t("frontend")}</p>
                    <p style={{color: "#808080", fontSize: "12px"}}>- Udemy (2023)</p>
                </div>
            </div>
            <div className="col">
                <h4 className='title'>Soft skills <div className="underline"><span></span></div></h4>
                <p className='soft-skills'>{t("teamWork")}</p>
                <p className='soft-skills'>{t("resolution")}</p>
                <p className='soft-skills'>{t("learning")}</p>
                <p className='soft-skills'>{t("pressure")}</p>
                <p className='soft-skills'>{t("comunication")}</p>
                <p className='soft-skills'>{t("adaptability")}</p>
                <p className='soft-skills'>{t("flexibility")}</p>
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