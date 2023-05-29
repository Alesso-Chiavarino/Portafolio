import './App.css';
import './responsive.scss';
import Banner from './components/Banner/Banner'
import CertificatesContainer from './components/CertificatesContainer/CertificatesContainer'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import ObserverProvider from './context/ObserverContext'
import ThemeProvider, { useTheme } from './context/ThemeContext.jsx';

const App = () => {

  const { isDark } = useTheme()

  if (isDark) {
    document.body.style.backgroundColor = '#1A1B23'
  } else {
    document.body.style.backgroundColor = '#F8F8FF'
  }

  return (
    <>
      <Navbar />
      <Banner />
      <CertificatesContainer />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

const AppWrapper = () => {
  return (
    <ThemeProvider>
      <ObserverProvider>
        <App />
      </ObserverProvider>
    </ThemeProvider>
  )
}

export default AppWrapper