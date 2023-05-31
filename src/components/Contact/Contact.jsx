import { MagicCard, useTheme } from '../../config/import.config.js'
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