import { useTheme, certificates, Certificate, Carousel } from '../../config/import.config'
import "react-multi-carousel/lib/styles.css";

const CertificatesContainer = () => {

    const { isDark } = useTheme()

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
            return (
                <Carousel
                    className={isDark ? 'certificates-slider' : 'certificates-slider-light'}
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
            )
        } else {
            return (
                <Carousel
                    className={isDark ? 'certificates-slider' : 'certificates-slider-light'}
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
            )

        }
    }

    return (
        renderMain()
    )
}

export default CertificatesContainer;