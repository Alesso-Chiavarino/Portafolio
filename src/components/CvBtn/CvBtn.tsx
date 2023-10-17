import { FiDownload, useTheme } from '../../config/import.config'
import './CvBtn.scss';

const CvBtn = () => {

  const { isDark } = useTheme()

  return (
    <a className={isDark ? 'cv-link' : 'cv-link-light'} target='_blank' href="https://res.cloudinary.com/dotaebdx8/image/upload/v1697509600/CV_qalupo.pdf"> <FiDownload />Download CV</a>
  )
}

export default CvBtn;