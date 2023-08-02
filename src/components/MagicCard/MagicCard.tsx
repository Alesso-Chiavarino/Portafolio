import { AiFillGithub, FaLinkedinIn, SiGmail, BsWhatsapp, Form, useTheme } from '../../config/import.config'
import './MagicCard.scss';

const MagicCard = () => {

    const { isDark } = useTheme()

    return (
        <div className={isDark ? 'card-container' : 'card-container-light'}>
            <article className='card'>
                <div className="contact-info">
                    <img className='contact-img' src="./img/contact-vector.png" alt="" />
                    <h3>Social Networks</h3>
                    <div className="card-github">
                        <AiFillGithub className='contact-icon' color='#fff' />
                        <div className="network">
                            <span>Github:</span>
                            <a className='link-network' href="https://github.com/Alesso-Chiavarino" target='_blank'>github.com/alesso-chiavarino</a>
                        </div>
                    </div>
                    <div className="linkedin">
                        <FaLinkedinIn className='contact-icon' color='#fff' />
                        <div className="network">
                            <span>Linkedin:</span>
                            <a className='link-network' href="https://www.linkedin.com/in/alessandro-chiavarino-a93a37235/" target='_blank'>linkedin.com/alesso-chiavarino</a>
                        </div>
                    </div>
                    <div className="mail">
                        <SiGmail className='contact-icon' color='#fff' />
                        <div className="network">
                            <span>Mail:</span>
                            <a className='link-network' href="mailto:alessochiavarino@gmail.com" target='_blank'>gmail.com/alessochiavarino</a>
                        </div>
                    </div>
                    <div className="card-whatsapp">
                        <BsWhatsapp className='contact-icon' color='#fff' />
                        <div className="network">
                            <span>Whatsapp:</span>
                            <a className='link-network' href="https://wa.me/3513079987" target='_blank'>+54 3513079987</a>
                        </div>
                    </div>


                </div>
                <div className="contact-form">
                    <h3>Send me a message</h3>
                    <Form />
                </div>
            </article>
        </div>
    )
}

export default MagicCard;