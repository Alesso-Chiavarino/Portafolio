import { ProjectsContainer, useInView, useObserver, useEffect, useTheme } from '../../config/import.config.js'
import './Projects.scss';

const Projects = () => {

  const { isDark } = useTheme()

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
    <section className={isDark ? 'projects' : 'projects-light'} ref={ref} id="projects" >
      <h1 className='section-title'>My Projects</h1>
      <ProjectsContainer />
    </section>
  )
}

export default Projects;