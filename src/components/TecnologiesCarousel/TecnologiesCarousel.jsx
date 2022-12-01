import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Technology from '../Technology/Technology';
import './TecnologiesCarousel.scss';

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

const TecnologiesCarousel = ({frontTechnologies, backTechnologies}) => {
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
                // containerClass="carousel-container"
                // dotListClass="custom-dot-list-style"
                // itemClass="carousel-item-padding-40-px"
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