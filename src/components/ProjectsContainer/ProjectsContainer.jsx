import { projects, Project } from '../../config/import.config.js'
import './ProjectsContainer.scss';

const ProjectsContainer = () => {

    return (
        <section className='projects-container'>
            {projects.map((proj, i) => {
                return <Project key={i} {...proj} />
            })}
        </section>
    )
}

export default ProjectsContainer;