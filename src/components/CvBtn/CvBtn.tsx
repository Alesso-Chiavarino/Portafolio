import { FiDownload, useTheme } from '../../config/import.config'
import './CvBtn.scss';

const CvBtn = () => {

  const { isDark } = useTheme()

  return (
    <a className={isDark ? 'cv-link' : 'cv-link-light'} href="./CV.pdf" download="CV" > <FiDownload className='download-icon' /> Download CV </a>
  )
}

export default CvBtn;