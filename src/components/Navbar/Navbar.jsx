import ListContainer from '../ListContainer/ListContainer';
import Brand from '../Brand/Brand';
import {BsSunFill} from 'react-icons/bs'
import {SiGooglemessages} from 'react-icons/si'
import './Navbar.scss';
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <div className='navbar'>
            <Brand/>
            <ListContainer/>
            <div className='icons-container'>
                <Link activeClass="active" to={"contact"} spy={true} smooth={true} offset={-170} duration={900} className="icon-container-message" >
                    <SiGooglemessages/>
                </Link>
                <div className='icon-container-light'>
                    <BsSunFill/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar;