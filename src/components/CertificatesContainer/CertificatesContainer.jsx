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
            date: "APR - SEP 2022",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, molestias neque quam in magnam dolore.",
            certificate: "https://www.coderhouse.com/certificados/62e2ba25d1827b001962eda4",
        },
        {
            img: "./img/coderhouse-icon.png",
            course: "JavaScript",
            academy: "Coderhouse",
            date: "APR - SEP 2022",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, molestias neque quam in magnam dolore.",
            certificate: "https://www.coderhouse.com/certificados/631f60623b1eac001954ac92",
        },
        {
            img: "./img/coderhouse-icon.png",
            course: "React",
            academy: "Coderhouse",
            date: "APR - SEP 2022",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, molestias neque quam in magnam dolore.",
            certificate: "https://www.coderhouse.com/certificados/6363d471e74441000e92750c",
        },
        {
            img: "./img/coderhouse-icon.png",
            course: "Front end Developer",
            academy: "Coderhouse",
            date: "APR - SEP 2022",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, molestias neque quam in magnam dolore.",
            certificate: "https://www.coderhouse.com/certificados/6363d471e74441000e92750f",
        },
        {
            img: "./img/ubp-icon.jpg",
            course: "Informatic Engineering",
            academy: "Blas Pascal",
            date: "2022 APR - SOON",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, molestias neque quam in magnam dolore.",
            certificate: "#",
        },
    ]

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (

        <div className='ki-padre'>

            <Carousel
                className="certificates-slider"
                swipeable={true}
                arrows={true}
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
        </div>
    )
}

export default CertificatesContainer;