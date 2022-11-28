import './CvBtn.scss';
import {FiDownload} from 'react-icons/fi'

const CvBtn = () => {
  return (
    <a className='cv-link' href="./cv.pdf" download="cv" > <FiDownload/> Download CV </a>
  )
}

export default CvBtn;