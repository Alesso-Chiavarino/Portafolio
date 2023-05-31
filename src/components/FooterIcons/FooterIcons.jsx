import './FooterIcons.scss';
import { useTheme } from '../../config/import.config.js';

const FooterIcons = () => {

    const { isDark } = useTheme()

    return (
        <div className={isDark ? 'footer-network-container' : 'footer-network-container-light'}>
            <a href="https://wa.me/3513079987" target="_blank"> <i className='whatsapp fa fa-whatsapp'></i> </a>

            <a href='https://github.com/Alesso-Chiavarino' target="_blank">
                <i className='github fa fa-github'></i>
            </a>
            <a href='https://linkedin.com/in/alessandro-chiavarino-a93a37235/' target="_blank">
                <i className='twitter fa fa-linkedin'></i>
            </a>
            <a href='https://twitter.com/alesso_1912' target="_blank">
                <i className='twitter fa fa-twitter'></i>
            </a>
            <a href='https://www.facebook.com/alessandro.chiavarino' target="_blank">
                <i className='facebook fa fa-facebook'></i>
            </a>
            <a href='https://www.instagram.com/alesso_chiavarino/' target="_blank">
                <i className='instagram fa fa-instagram'></i>
            </a>
        </div>
    )
}

export default FooterIcons;