import './MagicCard.scss';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import { BsWhatsapp } from 'react-icons/bs'
import Form from '../Form/Form';

const MagicCard = () => {
    return (
        <div className='que'>
            <article className='card'>
                <div className="contact-info">
                    <img className='contact-img' src="./img/contact-vector.png" alt="" />
                    <h3>Social Networks</h3>
                    <div className="github">
                        <AiFillGithub className='contact-icon' color='#fff' />
                        <div className="network">
                            <span>Github:</span>
                            <a href="">github.com/alesso-chiavarino</a>
                        </div>
                    </div>
                    <div className="linkedin">
                        <FaLinkedinIn className='contact-icon' color='#fff' />
                        <div className="network">
                            <span>Linkedin:</span>
                            <a href="">linkedin.com/alesso-chiavarino</a>
                        </div>
                    </div>
                    <div className="mail">
                        <SiGmail className='contact-icon' color='#fff' />
                        <div className="network">
                            <span>Mail:</span>
                            <a href="">gmail.com/alessochiavarino</a>
                        </div>
                    </div>
                    <div className="whatsapp">
                        <BsWhatsapp className='contact-icon' color='#fff' />
                        <div className="network">
                            <span>Whatsapp:</span>
                            <a href="">+54 3513079987</a>
                        </div>
                    </div>
                    

                </div>
                <div className="contact-form">
                    {/* <Form/> */}
                </div>
            </article>
        </div>
    )
}

export default MagicCard;