import './Learning.scss';
import { AiFillGithub } from 'react-icons/ai'

const Learning = () => {
    return (
        <article className='learning'>
            <div className="learning-left-side">
                <p>It gives me true happiness when I add something new to my knowledge.</p>
                <a className='learning-github-btn' target="_blank" href="https://github.com/Alesso-Chiavarino"> <AiFillGithub className='github-icon' /> Github Profile</a>
            </div>
            <div className="learning-right-side">
                <p>I'm currently learning</p>
                <div className='learning-icons-container'>
                    <div className="learning-icon-container">
                        <img className='learning-icon' src="./img/skills/express.svg" alt="" />
                        <span>Express.js</span>
                    </div>
                    <div className="learning-icon-container">
                        <img className='learning-icon' src="./img/skills/next-light.svg" alt="" />
                        <span>Next.js</span>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Learning;