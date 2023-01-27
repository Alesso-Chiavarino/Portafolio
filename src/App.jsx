// import reactLogo from './assets/react.svg'
import './App.css';
import './responsive.scss';
import Banner from './components/Banner/Banner'
import CertificatesContainer from './components/CertificatesContainer/CertificatesContainer'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import { useInView } from 'react-intersection-observer';
import ObserverProvider from './context/ObserverContext'

const App = () => {


  return (
    <ObserverProvider>
      <Navbar />
      <Banner />
      <CertificatesContainer />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </ObserverProvider>
  )
}

export default App
