import { Learning, TechnologiesCarousel, useInView, useObserver, useEffect, backTechnologies, frontTechnologies, useTheme } from '../../config/import.config'
import './Skills.scss';

const Skills = () => {

    const { isDark } = useTheme()

    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0.5,
    });

    const { observerS } = useObserver()

    useEffect(() => {
        inView ? observerS(true) : observerS(false)
    }, [inView])

    return (
        <>
            <section className={isDark ? 'skills-container' : 'skills-container-light'} ref={ref} id="skills" >
                <h1 className='section-title'>My Skills</h1>
                <div className="areas">
                    <div className="front-end">
                        <span className='area-span'>Front End</span>
                        <TechnologiesCarousel frontTechnologies={frontTechnologies} className="tecnologies-carousel" />
                    </div>
                    <div className="back-end">
                        <span className='area-span'>Back End</span>
                        <TechnologiesCarousel backTechnologies={backTechnologies} className="tecnologies-carousel" />
                    </div>
                </div>
                <Learning />
            </section>
        </>
    )
}

export default Skills;