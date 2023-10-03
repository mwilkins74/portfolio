import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsSpotify} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://linkedin.com' target='_blank'><BsLinkedin /></a>
      <a href='https://github.com' target='_blank'><BsGithub /></a>
      <a href='https://spotifuy.com' target='_blank'><BsSpotify /></a>
    </div>
  )
}

export default HeaderSocials