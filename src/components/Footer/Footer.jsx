import FooterIcons from '../FooterIcons/FooterIcons';
import './Footer.scss';
import { useTheme } from '../../context/ThemeContext';

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