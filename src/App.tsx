import { Header } from './components/Header'
import { RainBackground } from './components/RainBackground'
import { Competences } from './components/Competences'
import { Projets } from './components/Projets'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <RainBackground>
        <Header/>
        <Competences/>
        <Projets/>
        <Contact/>
      </RainBackground>
      <Footer/>
    </>
  )
}

export default App
