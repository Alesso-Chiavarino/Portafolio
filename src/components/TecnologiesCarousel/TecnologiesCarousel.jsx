import { Carousel, Technology } from '../../config/import.config.js'
import "react-multi-carousel/lib/styles.css";
import './TecnologiesCarousel.scss';


const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 3000, min: 1800 },
        items: 4
    },
    desktop: {
        breakpoint: { max: 1800, min: 991 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 991, min: 576 },
        items: 4
    },
    mobile: {
        breakpoint: { max: 576, min: 0 },
        items: 2
    }
};

const TecnologiesCarousel = ({ frontTechnologies, backTechnologies }) => {
    return (
        <Carousel
            className="technologies-slider"
            swipeable={true}
            arrows={false}
            draggable={true}
            showDots={false}
            additionalTransfrom={0}
            pauseOnHover
            rewind={false}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            keyBoardControl={true}
            transitionDuration={500}
        >
            {frontTechnologies ? frontTechnologies.map(((tec, i) => {
                return <Technology key={i} {...tec} />
            })) : backTechnologies.map(((tec, i) => {
                return <Technology key={i} {...tec} />
            }))}
        </Carousel>
    )
}

export default TecnologiesCarousel