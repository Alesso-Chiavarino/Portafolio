import ListContainer from '../ListContainer/ListContainer';
import Brand from '../Brand/Brand';
import {BsSunFill} from 'react-icons/bs'
import {SiGooglemessages} from 'react-icons/si'
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <div className='navbar'>
            <Brand/>
            <ListContainer/>
            <div className='icons-container'>
                <div className="icon-container-message">
                    <SiGooglemessages/>
                </div>
                <div className='icon-container-light'>
                    <BsSunFill/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar;