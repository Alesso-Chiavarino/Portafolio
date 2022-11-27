import ListContainer from '../Banner/ListContainer/ListContainer';
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
                <div className='icon-container'>
                    <BsSunFill color='#fff'/>
                </div>
                <div className="icon-container">
                    <SiGooglemessages color=''/>
                </div>
                {/* hola */}
            </div>
        </div>
    </div>
  )
}

export default Navbar;