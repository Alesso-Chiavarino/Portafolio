import { TbFileCertificate, MdWatchLater, useTheme } from '../../config/import.config.js'
import './Certificate.scss';

const Certificate = ({ img, course, academy, date, description, certificate }) => {

    const { isDark } = useTheme()

    return (
        <article className={isDark ? 'certificate' : 'certificate-light'}>
            <img className='certificate-academy-icon' src={img} alt={academy} />
            <span className='certificate-course'>{course}</span>
            <div className='certificate-info'>
                <span className='certificate-info-academy-btn'>{academy}</span>
                <span className='certificate-info-date-btn' >{date}</span>
            </div>
            <p className='cerficate-description'>{description}</p>
            {academy === "Blas Pascal" ?
                <a className='certificate-link' href={certificate}> <span><MdWatchLater className='certificate- 
        icon' /></span> In Process </a>
                :
                <a className='certificate-link' target="_blank" href={certificate}> <span><TbFileCertificate className='certificate-icon' /></span> Certificate</a>}

        </article>
    )
}

export default Certificate;