import { ListContainer, Link, SiGooglemessages } from '../../config/import.config'
import './Offcanvas.scss'

interface OffcanvasProps {
    isOpen: (data: boolean) => void,
    open: boolean
}

const Offcanvas = ({ isOpen, open }: OffcanvasProps) => {
    return (
        <div className={open ? 'offcanvas' : 'offcanvas-off'}>
            <div className='icons-container-off'>
                <ListContainer linksClass='nav-link-container-off' isOpen={isOpen} />
                <Link to={"contact"} spy={true} smooth={true} offset={-170} duration={900} className="btn-message" onClick={() => isOpen(!open)} >Contact me
                    <SiGooglemessages />
                </Link>
            </div>
        </div>
    )
}

export default Offcanvas