import Certificate from '../Certificate/Certificate';
import './CertificatesContainer.scss';

const CertificatesContainer = () => {

    const certificates = [
        {
            img: "./img/coderhouse-icon.png",
            course: "Desarrollo Web",
            academy: "Coderhouse",
            date: "APR - SEP 2022",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, molestias neque quam in magnam dolore."
        },
    ]

  return (
    <section className='certificates-container'>
        {certificates.map(cert => {
            return <Certificate {...cert} />
        })}
    </section>
  )
}

export default CertificatesContainer;