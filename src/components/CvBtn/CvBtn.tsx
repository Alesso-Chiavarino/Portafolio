import { FiDownload, useTheme } from '../../config/import.config'
import './CvBtn.scss';

const CvBtn = () => {

  const { isDark } = useTheme()
  const CV_URL = "https://res.cloudinary.com/dotaebdx8/image/upload/CV.pdf";

  return (
    <a className={isDark ? 'cv-link' : 'cv-link-light'} target='_blank' href={CV_URL}> <FiDownload />Download CV</a>
  )
}

export default CvBtn;