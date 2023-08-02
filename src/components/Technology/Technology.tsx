import { useTheme } from '../../config/import.config';
import './Technology.scss';

interface TechnologyProps {
  img: string,
  name: string,
  key?: number
}

const Technology = ({ img, name }: TechnologyProps) => {

  const { isDark } = useTheme()

  return (
    <div className={`technology ${isDark ? 'technology' : 'technology-light'}`}>
      <img className='technology-icon' src={img} alt={name} />
      <span>{name}</span>
    </div>
  )
}

export default Technology;