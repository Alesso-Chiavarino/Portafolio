import './CvBtn.scss';
import { FiDownload } from 'react-icons/fi'
import { useTheme } from '../../context/ThemeContext';

const CvBtn = () => {

  const { isDark } = useTheme()

  return (
    <a className={isDark ? 'cv-link' : 'cv-link-light'} href="./CV.pdf" download="CV" > <FiDownload className='download-icon' /> Download CV </a>
  )
}

export default CvBtn;