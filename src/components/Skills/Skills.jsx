import Learning from '../Learning/Learning';
import TecnologiesCarousel from '../TecnologiesCarousel/TecnologiesCarousel';
import './Skills.scss';
import { useInView } from 'react-intersection-observer';
import { observerContext } from '../../context/ObserverContext';
import { useContext, useEffect } from 'react';

const Skills = () => {

    const frontTechnologies = [
        {
            img: "./img/skills/html.svg",
            name: "HTML",
        },
        {
            img: "./img/skills/css.svg",
            name: "CSS",
        },
        {
            img: "./img/skills/javascript.svg",
            name: "JavaScript",
        },
        {
            img: "./img/skills/react.svg",
            name: "React",
        },
        {
            img: "./img/skills/redux.svg",
            name: "Redux",
        },
        {
            img: "./img/skills/bootstrap.svg",
            name: "Bootstrap",
        },
        {
            img: "./img/skills/figma.svg",
            name: "Figma",
        },
        {
            img: "./img/skills/photoshop.svg",
            name: "Photoshop",
        },
        {
            img: "./img/skills/tailwind.svg",
            name: "Tailwind",
        },
    ]

    const backTechnologies = [
        {
            img: "./img/skills/node.svg",
            name: "Node.js"
        },
        {
            img: "./img/skills/mongo.svg",
            name: "Mongo DB"
        },
        {
            img: "./img/skills/git.svg",
            name: "Git"
        },
        {
            img: "./img/skills/c++.svg",
            name: "C++"
        },
        {
            img: "./img/skills/firebase.svg",
            name: "Firebase"
        },
        {
            img: "./img/skills/express.svg",
            name: "Express.js"
        },
        {
            img: "./img/skills/mysql.svg",
            name: "MySQL"
        },
    ]

    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.5,
    });

    const { observerS } = useContext(observerContext);

    useEffect(() => {
        inView ? observerS(true) : observerS(false)
    }, [inView])

    return (
        <>
            <section className='skills-container' ref={ref} id="skills" >
                <h1 className='section-title'>My Skills</h1>
                <div className="areas">
                    <div className="front-end">
                        <span className='area-span'>Front End</span>
                        <TecnologiesCarousel frontTechnologies={frontTechnologies} className="tecnologies-carousel" />
                    </div>
                    <div className="back-end">
                        <span className='area-span'>Back End</span>
                        <TecnologiesCarousel backTechnologies={backTechnologies} className="tecnologies-carousel" />
                    </div>
                </div>
                <Learning />
            </section>
        </>
    )
}

export default Skills;