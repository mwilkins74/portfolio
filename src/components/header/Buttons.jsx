import React from 'react'
import resume from '../../assets/Mark_Wilkins_Resume.pdf'

const CTA = () => {
  return (
    <div className='header__buttons'>
      <a href={resume} download className='btn'>Download Resume</a>
      <a href="#contact" className='btn btn-primary'>Contact</a>
    </div>
  )
}

export default CTA