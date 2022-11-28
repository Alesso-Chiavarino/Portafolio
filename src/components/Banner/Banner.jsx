import TypeWriter from '../TypeWriter/TypeWriter';
import CvBtn from '../CvBtn/CvBtn';
import './Banner.scss';

const Banner = () => {
  return (
    <div className="banner-container">
        <div className="greating-container">
            <h3>Hi, i am</h3>
        </div>
        <div className="name-container">
            <h1>Alessandro Chiavarino</h1>
        </div>
        <div className='area-container'>
            <TypeWriter/>
        </div>
        <div className="cvc-btn-container">
          <CvBtn/>
        </div>
    </div>
  )
}

export default Banner