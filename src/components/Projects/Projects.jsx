import ProjectsContainer from '../ProjectsContainer/ProjectsContainer';
import './Projects.scss';

const Projects = () => {
  return (
    <section className='projects'>
        <h1 className='section-title'>My Projects</h1>
        <ProjectsContainer/>
    </section>
  )
}

export default Projects;