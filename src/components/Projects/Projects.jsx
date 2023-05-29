import ProjectsContainer from '../ProjectsContainer/ProjectsContainer';
import './Projects.scss';
import { useInView } from 'react-intersection-observer';
import { useObserver } from '../../context/ObserverContext';
import { useEffect } from 'react';

const Projects = () => {

  const { ref, inView } = useInView({
    /* Optional options */
    // threshold: 0.5,
    threshold: 0.4,
  });


  const { observerP } = useObserver()

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