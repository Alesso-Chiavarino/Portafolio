import { useObserver, Link, useTheme } from '../../config/import.config'
import './ListContainer.scss';

interface ListContainerProps {
    linksClass: string,
    isOpen: (data: boolean) => void
}

const ListContainer = ({ linksClass, isOpen }: ListContainerProps) => {

    const { isDark } = useTheme()

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

    const { observeAbout, observeSkills, observeProjects } = useObserver()

    return (
        <div className={linksClass}>
            {links.map((link, i) => {
                return (
                    observeSkills && link.name == "Skills" || observeAbout && link.name == "About me" ||
                        observeProjects && link.name == "Projects"
                        ?
                        <Link key={i} className={isDark ? 'nav-link-active' : 'nav-link-active-light'} onClick={() => isOpen(!open)}
                            activeClass="active" to={link.path} spy={true} smooth={true} offset=
                            {link.offset}
                            duration={900}> {link.name}
                        </Link>
                        :
                        <Link key={i} className={isDark ? 'nav-link' : 'nav-link-light'} activeClass="active" onClick={() =>
                            isOpen(!open)} to={link.path} spy={true} smooth={true} offset={link.offset}
                            duration={900}> {link.name}
                        </Link>
                )
            })}
        </div>

    )
}

export default ListContainer