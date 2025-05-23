import { AiFillGithub, IoMdRocket, generateToast, useTheme } from '../../config/import.config'
import './Project.scss';

interface ProjectProps {
  name: string,
  tech: { name: string }[],
  description: string,
  img: string,
  git: string,
  deploy: string
}

const Project = ({ name, tech, description, img, git, deploy }: ProjectProps) => {

  const { isDark } = useTheme()

  const checkPermission = () => {
    generateToast('error', 'Deploy not available, you need to contact me to get permission.');
  }

  return (
    <article className={isDark ? 'project' : 'project-light'}>
      <a target='_blank' href={deploy}>
        <div className="project-img-container">
          <img className='project-img' src={img} alt={name} />
        </div>
      </a>
      <div className="project-info1">
        <h3>{name}</h3>
        <div className="project-icon-links">
          <a className='icon-links' target="_blank" href={git}> <AiFillGithub style={{ fontSize: "25px" }} color='white' /> </a>
          {deploy === 'denied' ? <span className='icon-links' onClick={checkPermission} > <IoMdRocket style={{ fontSize: "25px" }} color='white' /> </span>
            :
            <a className='icon-links' target="_blank" href={deploy} > <IoMdRocket style={{ fontSize: "25px" }} color='white' /> </a>}
        </div>
      </div>
      <div className="project-info2">
        {tech.map((t, i) => <span className='tech-used' key={i}> {t.name} </span>)}
      </div>
      <p className='project-info3'>{description}</p>
    </article>
  )
}

export default Project;