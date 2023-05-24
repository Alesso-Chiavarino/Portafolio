import './CvBtn.scss';
import { FiDownload } from 'react-icons/fi'

const CvBtn = () => {
  return (
    <a className='cv-link' href="./CV.pdf" download="CV" > <FiDownload className='download-icon' /> Download CV </a>
  )
}

export default CvBtn;