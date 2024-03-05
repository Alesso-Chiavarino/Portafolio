import { MdWork, VerticalTimelineElement, IExperience, ExperienceType, HiAcademicCap } from '@/config/import.config';

interface ExperienceProps {
    isDark: boolean;
    experience: IExperience;
}

export const Experience = ({ isDark, experience }: ExperienceProps) => {

    return (
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={isDark ? { background: '#21232E', color: '#fff' } : { background: '#EEEEFC', color: '#1A202B' }}
            contentArrowStyle={{ borderRight: `7px solid  ${isDark ? '#21232E' : '#EEEEFC'}` }}
            date={experience.date}
            iconStyle={{ background: '#679CFF', color: '#fff' }}
            icon={experience.type === ExperienceType.education ? <HiAcademicCap /> : <MdWork />}
        >
            <h3 className="vertical-timeline-element-title">{experience.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{experience.subtitle}</h4>
            <p>
                {experience.description}
            </p>
        </VerticalTimelineElement>
    )
}