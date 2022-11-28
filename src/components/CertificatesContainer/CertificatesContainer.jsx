import Certificate from '../Certificate/Certificate';
import './CertificatesContainer.scss';

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
            img: "./img/ubp-icon.jpg",
            course: "Informatic Engineering",
            academy: "Blas Pascal",
            date: "2022 APR - SOON",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, molestias neque quam in magnam dolore.",
            certificate: "#",
        },
    ]

  return (
    <section className='certificates-container'>
        {certificates.map((cert, i) => {
            return <Certificate key={i} {...cert} />
        })}
    </section>
  )
}

export default CertificatesContainer;