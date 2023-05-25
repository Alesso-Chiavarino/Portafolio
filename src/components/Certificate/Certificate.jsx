import './Certificate.scss';
import { TbFileCertificate } from 'react-icons/tb'
import { MdWatchLater } from 'react-icons/md'

const Certificate = ({ img, course, academy, date, description, certificate }) => {
    return (
        <article className='certificate'>
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