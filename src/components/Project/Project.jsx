import './Project.scss';
import {AiFillGithub} from 'react-icons/ai'
import {IoMdRocket} from 'react-icons/io'

const Project = ({name, tech, description, img, git, deploy}) => {
  return (
    <article className='project'>
        <img className='project-img' src={img} alt={name} />
        <div className="project-info1">
            <h3>{name}</h3>
            <div className="project-icon-links">
                <a className='icon-links' target="_blank" href={git}> <AiFillGithub style={{fontSize: "25px"}} color='white'/> </a>
                <a className='icon-links' target="_blank" href={deploy}> <IoMdRocket style={{fontSize: "25px"}} color='white'/> </a>
            </div>
        </div>
        <div className="project-info2">
          {tech.map((t, i) => <span className='tech-used' key={i}> {t.name} </span> )}
        </div>
        <p className='project-info3'>{description}</p>
    </article>
  )
}

export default Project;