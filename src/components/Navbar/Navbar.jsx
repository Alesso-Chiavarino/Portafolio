import ListContainer from '../ListContainer/ListContainer';
import Brand from '../Brand/Brand';
import { BsSunFill, BsMoonFill } from 'react-icons/bs'
import { SiGooglemessages } from 'react-icons/si'
import './Navbar.scss';
import { Link } from 'react-scroll'
import { RiMenu5Fill } from 'react-icons/ri'
import { useState } from 'react'
import { IoCloseSharp } from 'react-icons/io5'
import { useTheme } from '../../context/ThemeContext.jsx';

const Navbar = () => {

    const { isDark, toggleTheme } = useTheme()

    const [open, setOpen] = useState(false)

    const isOpen = (data) => {
        setOpen(data)
    }

    return (
        <div className={isDark ? 'navbar-container' : 'navbar-container-light'}>
            <div className='navbar'>
                <Brand />
                <ListContainer linksClass='nav-link-container' isOpen={isOpen} />
                {open ? <IoCloseSharp className='hamburguer' onClick={() => setOpen(!open)} /> : <RiMenu5Fill className='hamburguer' onClick={() => setOpen(!open)} />}
                <div className='icons-container'>
                    <Link activeClass="active" to={"contact"} spy={true} smooth={true} offset={-170} duration={900} className="icon-container-message" >
                        <SiGooglemessages />
                    </Link>
                    {isDark ?
                        <div className='icon-container-light' onClick={toggleTheme}>
                            <BsSunFill />
                        </div> :
                        <div className='icon-container-light' onClick={toggleTheme}>
                            <BsMoonFill />
                        </div>
                    }
                </div>
            </div>
            <div className={open ? 'offcanvas' : 'offcanvas-off'}>
                <div className='icons-container-off'>
                    <ListContainer linksClass='nav-link-container-off' isOpen={isOpen} />
                    <Link to={"contact"} spy={true} smooth={true} offset={-170} duration={900} className="btn-message" onClick={() => setOpen(!open)} >Contact me
                        <SiGooglemessages />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;