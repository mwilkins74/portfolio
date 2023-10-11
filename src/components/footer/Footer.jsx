import React from 'react'
import './Footer.css'
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import { BsSpotify } from "react-icons/bs"

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">Mark Wilkins</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/mark-wilkins-84565666/" target="_blank" rel="noreferrer">
          <AiFillLinkedin />
        </a>
        <a href="https://github.com/mwilkins74" target="_blank" rel="noreferrer">
          <AiOutlineGithub />
        </a>
        <a href="https://github.com/mwilkins74" target="_blank" rel="noreferrer">
          <BsSpotify />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Mark Wilkins Portfolio</small>
      </div>
    </footer>
  )
}

export default Footer