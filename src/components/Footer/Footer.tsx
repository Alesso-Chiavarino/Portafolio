import { FooterIcons, useTheme } from '../../config/import.config.js'
import './Footer.scss';

const Footer = () => {

  const { isDark } = useTheme()

  return (
    <footer className={isDark ? 'footer' : 'footer-light'}>
      <hr />
      <FooterIcons />
      <span>© 2022 Alessandro Chiavarino, All rights reserved.</span>
    </footer>
  )
}

export default Footer;