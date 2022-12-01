import './Brand.scss';
import {Link} from 'react-scroll'

const Brand = () => {
  return (
    <div className='brand-container'>
        <Link className='brand-link' activeClass="active" to={"about"} spy={true} smooth={true} offset={-100} duration={900}>
          <img className='portafolio-icon' src="./img/icon-light.png" alt="icon" />
          <h3 className='brand-name'>Alesso</h3>
          <h3 className='brand-lastname'>Chiavarino</h3>
        </Link>
    </div>
  )
}

export default Brand;