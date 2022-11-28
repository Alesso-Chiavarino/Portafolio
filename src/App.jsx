// import reactLogo from './assets/react.svg'
import './App.css'
import Banner from './components/Banner/Banner'
import CertificatesContainer from './components/CertificatesContainer/CertificatesContainer'
import Navbar from './components/Navbar/Navbar'
import Skills from './components/Skills/Skills'

const App = () => {
  return (
    <>
      <Navbar/>
      <Banner/>
      <CertificatesContainer/>
      <Skills/>
    </>
  )
}

export default App
