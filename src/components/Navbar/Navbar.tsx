import { ListContainer, Brand, BsSunFill, BsMoonFill, Link, RiMenu5Fill, useState, IoCloseSharp, useTheme } from '../../config/import.config'
import { BiSolidMessageRoundedDetail } from 'react-icons/bi'
import './Navbar.scss';
import Offcanvas from '../Offcanvas/Offcanvas';

const Navbar = () => {

    const { isDark, toggleTheme } = useTheme()

    const [open, setOpen] = useState(false)

    const isOpen = (data: boolean) => {
        setOpen(data)
    }

    return (
        <div className={isDark ? 'navbar-container' : 'navbar-container-light'}>
            <div className='navbar'>
                <Brand />
                <ListContainer linksClass='nav-link-container' isOpen={isOpen} />
                <div className='icons-container'>
                    {open
                        ?
                        <IoCloseSharp className='hamburguer' onClick={() => isOpen(!open)} />
                        :
                        <RiMenu5Fill className='hamburguer' onClick={() => isOpen(!open)} />}
                    <Link activeClass="active" to={"contact"} spy={true} smooth={true} offset={-170} duration={900} className="icon-container-message" >
                        <BiSolidMessageRoundedDetail style={{ fontSize: '18px' }} />
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
            <Offcanvas isOpen={isOpen} open={open} />
        </div>
    )
}

export default Navbar;