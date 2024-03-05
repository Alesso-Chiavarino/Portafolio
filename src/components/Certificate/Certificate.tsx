import { LiaCertificateSolid, MdWatchLater, useTheme } from '../../config/import.config.js'
import './Certificate.scss';

interface CertificateProps {
    img: string,
    course: string,
    academy: string,
    date: string,
    description: string,
    certificate: string
}

const Certificate = ({ img, course, academy, date, description, certificate }: CertificateProps) => {

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
                <span className='certificate-link' style={{ cursor: 'not-allowed' }} ><MdWatchLater className='certificate- 
        icon' />In Process</span>
                :
                <a className='certificate-link' target="_blank" href={certificate}> <span><LiaCertificateSolid className='certificate-icon' /></span> Certificate</a>}

        </article>
    )
}

export default Certificate;