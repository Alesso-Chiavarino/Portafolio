import TypeWriter from '../TypeWriter/TypeWriter';
import CvBtn from '../CvBtn/CvBtn';
import { useInView } from 'react-intersection-observer';
import { useObserver } from '../../context/ObserverContext';
import { useEffect } from 'react';
import './Banner.scss';
import { useTheme } from '../../context/ThemeContext.jsx';


const Banner = () => {

  const { isDark } = useTheme()

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.5,
  });

  const { observerA } = useObserver()

  useEffect(() => {
    inView ? observerA(true) : observerA(false)
  }, [inView])

  return (
    <div className={isDark ? 'banner-container' : 'banner-container-white'} ref={ref} id="about">
      <div className="greating-container">
        <h3>Hi, I am</h3>
      </div>
      <div className="name-container">
        <h1>Alessandro Chiavarino</h1>
      </div>
      <div className='area-container'>
        <TypeWriter />
      </div>
      <div className='description-container'>
        <p>I'm a committed developer, responsible, detail-oriented, able to search and find creative and
          effective solutions to challenges of different complexity.</p>
      </div>
      <div className="cv-btn-container">
        <CvBtn />
      </div>
    </div>
  )
}

export default Banner