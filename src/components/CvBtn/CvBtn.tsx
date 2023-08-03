import { FiDownload, useTheme } from '../../config/import.config'
import './CvBtn.scss';

const CvBtn = () => {

  const { isDark } = useTheme()

  return (
    <a className={isDark ? 'cv-link' : 'cv-link-light'} href="./CV.pdf" download="CV" > <FiDownload />Download CV</a>
  )
}

export default CvBtn;