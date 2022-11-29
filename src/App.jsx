// import reactLogo from './assets/react.svg'
import './App.css'
import Banner from './components/Banner/Banner'
import CertificatesContainer from './components/CertificatesContainer/CertificatesContainer'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'

const App = () => {
  return (
    <>
      <Navbar/>
      <Banner/>
      <CertificatesContainer/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
