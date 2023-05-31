import { useTheme } from '../../config/import.config.js';
import './Technology.scss';

const Technology = ({ img, name }) => {

  const { isDark } = useTheme()

  return (
    <div className={`technology ${isDark ? 'technology' : 'technology-light'}`}>
      <img className='technology-icon' src={img} alt={name} />
      <span>{name}</span>
    </div>
  )
}

export default Technology;