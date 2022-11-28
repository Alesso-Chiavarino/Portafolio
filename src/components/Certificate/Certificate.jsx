import './Certificate.scss';

const Certificate = ({img, course, academy, date, description}) => {
  return (
    <article className='certificate'>
        <img className='certificate-icon' src={img} alt={academy} />
        <span className='certificate-course'>{course}</span>
        <div className='certificate-info'>
            <span className='certificate-info-academy-btn'>{academy}</span>
            <span className='certificate-info-date-btn' >{date}</span>
        </div>
        <p className='cerficate-description'>{description}</p>
        <a className='certificate-link' href="#">Certificate</a>
    </article>
  )
}

export default Certificate;