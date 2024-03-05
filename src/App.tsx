import { Banner, CertificatesContainer, Contact, Footer, Navbar, Projects, Experiences, Skills, ObserverProvider, ThemeProvider, useTheme } from './config/import.config'
import './App.css';
import './responsive.scss';

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
      <Experiences />
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