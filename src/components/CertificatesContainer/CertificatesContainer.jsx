import Certificate from '../Certificate/Certificate';
import './CertificatesContainer.scss';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CertificatesContainer = () => {

    const certificates = [
        {
            img: "./img/coderhouse-icon.png",
            course: "Desarrollo Web",
            academy: "Coderhouse",
            date: "APR - JUL 2022",
            description: "Course with +40hs of multimedia, learning HTML, CSS, SASS and Bootstrap, +10 challenges and 1 final project.",
            certificate: "https://www.coderhouse.com/certificados/62e2ba25d1827b001962eda4",
        },
        {
            img: "./img/coderhouse-icon.png",
            course: "JavaScript",
            academy: "Coderhouse",
            date: "JUL - SEP 2022",
            description: "Course with +40hs of multimedia learning JavaScript, +10 challenges and 1 final project. ",
            certificate: "https://www.coderhouse.com/certificados/631f60623b1eac001954ac92",
        },
        {
            img: "./img/coderhouse-icon.png",
            course: "React",
            academy: "Coderhouse",
            date: "SEP - OCT 2022",
            description: "Course with +32hs of multimedia learning React.js and Firebase, +8 challenges and 1 final project.",
            certificate: "https://www.coderhouse.com/certificados/6363d471e74441000e92750c",
        },
        {
            img: "./img/coderhouse-icon.png",
            course: "Front end Developer",
            academy: "Coderhouse",
            date: "APR - OCT 2022",
            description: "Bootcamp with +800 hours of programming based on real projects.",
            certificate: "https://www.coderhouse.com/certificados/6363d471e74441000e92750f",
        },
        {
            img: "./img/ubp-icon.jpg",
            course: "Informatic Engineering",
            academy: "Blas Pascal",
            date: "2022 APR - SOON",
            description: "Degree course, analysis, design and development of systems.",
            certificate: "#",
        },
    ]

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1600 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 1600, min: 800 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 800, min: 650 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 650, min: 0 },
            items: 1
        }
    };

    const renderMain = () => {
        if (window.innerWidth < 1000) {
            // console.log('hola')
            return (
                <Carousel
                    className="certificates-slider"
                    swipeable={true}
                    arrows={true}
                    // centerMode={true}

                    draggable={true}
                    showDots={false}
                    additionalTransfrom={0}
                    pauseOnHover={true}
                    rewind={false}
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={4000}
                    keyBoardControl={true}
                    transitionDuration={500}
                >
                    {certificates.map((cert, i) => {
                        return <Certificate key={i} {...cert} />
                    })}
                </Carousel>
            )
        } else {
            return (
                <Carousel
                    className="certificates-slider"
                    swipeable={true}
                    arrows={true}
                    // centerMode={true}
                    draggable={true}
                    showDots={false}
                    additionalTransfrom={0}
                    pauseOnHover={true}
                    rewind={false}
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={4000}
                    keyBoardControl={true}
                    transitionDuration={500}
                >
                    {certificates.map((cert, i) => {
                        return <Certificate key={i} {...cert} />
                    })}
                </Carousel>
            )

        }
    }

    return (
        renderMain()
    )
}

export default CertificatesContainer;