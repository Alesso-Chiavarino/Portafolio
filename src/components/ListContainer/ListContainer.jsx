import './ListContainer.scss';
import { observerContext } from '../../context/ObserverContext';
import { useContext } from 'react';
import { Link } from 'react-scroll'

const ListContainer = () => {

    const links = [
        {
            name: "About me",
            path: "about",
            offset: -100,
        },
        {
            name: "Skills",
            path: "skills",
            offset: -180,
        },
        {
            name: "Projects",
            path: "projects",
            offset: -180,
        }
    ]

    const { observeAbout, observeSkills, observeProjects } = useContext(observerContext);

    return (
        <div className='nav-link-container'>
            {links.map((link, i) => {
                return (
                    observeSkills && link.name == "Skills" || observeAbout && link.name == "About me" || observeProjects && link.name == "Projects" ? <Link key={i} className='nav-link-active' activeClass="active" to={link.path} spy={true} smooth={true} offset={link.offset} duration={500}> {link.name}
                    </Link> : <Link key={i} className='nav-link' activeClass="active" to={link.path} spy={true} smooth={true} offset={link.offset} duration={500}> {link.name}
                    </Link>
                )
            })}
        </div>

    )
}

export default ListContainer