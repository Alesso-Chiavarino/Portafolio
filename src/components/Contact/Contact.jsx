import React from 'react'
import MagicCard from '../MagicCard/MagicCard'
import { useTheme } from '../../context/ThemeContext.jsx'
import './Contact.scss';

const Contact = () => {

  const { isDark } = useTheme()

  return (
    <section className={isDark ? 'contact' : 'contact-light'} id="contact" >
      <h1 className='section-title'>Contact Me</h1>
      <MagicCard />
    </section>
  )
}

export default Contact