import FooterIcons from '../FooterIcons/FooterIcons';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
        <hr/>
        <FooterIcons/>
        <span>© 2022 Alessandro Chiavarino, All rights reserved.</span>
    </footer>
  )
}

export default Footer;