import { projects } from '../../data/projects.js';
import Project from '../Project/Project';
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