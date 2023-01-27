import Project from '../Project/Project';
import './ProjectsContainer.scss';

const ProjectsContainer = () => {

    const projects = [
        {
            img: "./img/TechStore.png",
            name: "TechStore App",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, magnam numquam! Quaerat, adipisci quisquam consectetur molestias.",
            git: "https://github.com/Alesso-Chiavarino/TechStore",
            deploy: "https://tttechstore.netlify.app",
            tech: [
                {
                    name: "React",
                },
                {
                    name: "Bootstrap",
                },
                {
                    name: "Firestore",
                },
            ],
        },
        {
            img: "./img/inmobiliaria-baudracco.png",
            name: "Inmobiliary Web",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, magnam numquam! Quaerat, adipisci quisquam consectetur molestias.",
            git: "https://github.com/Alesso-Chiavarino/Alesso_Repo",
            deploy: "https://alesso-chiavarino.github.io/Alesso_Repo/",
            tech: [
                {
                    name: "HTML",
                },
                {
                    name: "CSS",
                },
                {
                    name: "Bootstrap",
                },
            ],
        },
        {
            img: "./img/cafeteria.png",
            name: "Coffee Web",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, magnam numquam! Quaerat, adipisci quisquam consectetur molestias.",
            git: "https://github.com/Alesso-Chiavarino/Cafeteria",
            deploy: "https://cafealesso.000webhostapp.com",
            tech: [
                {
                    name: "HTML",
                },
                {
                    name: "CSS",
                },
                {
                    name: "Jquery",
                },
            ],
        },
        {
            img: "./img/tecnohouse.png",
            name: "E-commerce App",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, magnam numquam! Quaerat, adipisci quisquam consectetur molestias.",
            git: "https://github.com/Alesso-Chiavarino/TecnoHouse",
            deploy: "https://tecnohouse.netlify.app",
            tech: [
                {
                    name: "HTML",
                },
                {
                    name: "CSS",
                },
                {
                    name: "JavaScript",
                },
                {
                    name: "Bootstrap",
                },
            ],
        },
        {
            img: "./img/portafolio.png",
            name: "Portfolio",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, magnam numquam! Quaerat, adipisci quisquam consectetur molestias.",
            git: "https://github.com/Alesso-Chiavarino/Portafolio",
            deploy: "https://tecnohouse.netlify.app",
            tech: [
                {
                    name: "React",
                },
                {
                    name: "Node.js",
                },
                {
                    name: "Express.js",
                },
            ],
        },
        {
            img: "./img/Our-Adventure-Book.png",
            name: "Our Adventure Book",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, magnam numquam! Quaerat, adipisci quisquam consectetur molestias.",
            git: "https://github.com/Alesso-Chiavarino/Our-Adventure-Book",
            deploy: "https://our-adventures-book.netlify.app",
            tech: [
                {
                    name: "React",
                },
                {
                    name: "Tailwind",
                },
                {
                    name: "Node.js",
                },
                {
                    name: "Express.js",
                },
                {
                    name: "MongoDB",
                },
            ],
        },
    ]

    return (
        <section className='projects-container'>
            {projects.map((proj, i) => {
                return <Project key={i} {...proj} />
            })}
        </section>
    )
}

export default ProjectsContainer;