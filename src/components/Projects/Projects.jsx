import ProjectsContainer from '../ProjectsContainer/ProjectsContainer';
import './Projects.scss';
import { useInView } from 'react-intersection-observer';
import { observerContext } from '../../context/ObserverContext';
import { useContext, useEffect } from 'react';

const Projects = () => {

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.5,
  });

  const { observerP } = useContext(observerContext);

  useEffect(() => {
    inView ? observerP(true) : observerP(false)
  }, [inView])

  return (
    <section className='projects' ref={ref} id="projects" >
      <h1 className='section-title'>My Projects</h1>
      <ProjectsContainer />
    </section>
  )
}

export default Projects;