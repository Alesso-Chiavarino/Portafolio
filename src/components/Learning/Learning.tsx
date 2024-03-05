import { useTheme, AiFillGithub } from '../../config/import.config'
import './Learning.scss';

const Learning = () => {

    const { isDark } = useTheme()

    return (
        <article className={isDark ? 'learning' : 'learning-light'}>
            <div className="learning-left-side">
                <p>It gives me true happiness when I add something new to my knowledge.</p>
                <a className='learning-github-btn' target="_blank" href="https://github.com/Alesso-Chiavarino"> <AiFillGithub className='github-icon' /> Github Profile</a>
            </div>
            <div className="learning-right-side">
                <p>I'm currently learning</p>
                <div className='learning-icons-container'>
                    <div className="learning-icon-container">
                        <img className='learning-icon' src="./img/skills/dotnet.svg" alt="" />
                        <span>.Net</span>
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