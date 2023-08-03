import { FiDownload, useTheme } from '../../config/import.config'
import './CvBtn.scss';

const CvBtn = () => {

  const { isDark } = useTheme()

  return (
    <a className={isDark ? 'cv-link' : 'cv-link-light'} target='_blank' href="https://res.cloudinary.com/dotaebdx8/image/upload/v1691071739/CV_a17wxy.pdf"> <FiDownload />Download CV</a>
  )
}

export default CvBtn;