// import reactLogo from './assets/react.svg'
import './App.css'
import Banner from './components/Banner/Banner'
import CertificatesContainer from './components/CertificatesContainer/CertificatesContainer'
import Navbar from './components/Navbar/Navbar'

const App = () => {
  return (
    <>
      <Navbar/>
      <Banner/>
      <CertificatesContainer/>
    </>
  )
}

export default App
