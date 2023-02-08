import './CvBtn.scss';
import { FiDownload } from 'react-icons/fi'

const CvBtn = () => {
  return (
    <a className='cv-link' href="./CV.pdf" download="CV" > <FiDownload /> Download CV </a>
  )
}

export default CvBtn;