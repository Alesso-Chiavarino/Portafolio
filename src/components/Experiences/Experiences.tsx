import { VerticalTimeline, Experience, useTheme, experiences } from '@/config/import.config';
import './Experiences.scss';
import 'react-vertical-timeline-component/style.min.css';

export const Experiences = () => {

    const { isDark } = useTheme()

    return (
        <section className={isDark ? 'experiences-section' : 'experiences-section-light'}>
            <h1 className='section-title'>My Experience</h1>

            <VerticalTimeline>
                {experiences.map((experience) => (
                    <Experience isDark={isDark} experience={experience} />
                ))}
            </VerticalTimeline>
        </section>
    )
}