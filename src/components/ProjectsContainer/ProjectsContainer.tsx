import { projects, Project } from '../../config/import.config'
import './ProjectsContainer.scss';

const ProjectsContainer = () => {

    return (
        <section className='projects-container'>
            {projects.map((proj, i) => {
                return <Project key={i} tech={proj.tech} name={proj.name} deploy={proj.deploy} description={proj.description} git={proj.git} img={proj.img} />
            })}
        </section>
    )
}

export default ProjectsContainer;