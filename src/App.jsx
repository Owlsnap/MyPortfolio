import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import TechChips from './components/TechChips/TechChips.jsx'
import Projects from './components/Projects/Projects.jsx'
import Contact from './components/Contact/Contact.jsx'

function App() {

  return (
    <div className='appContainer'>
      <Navbar/>
      <Hero/>
      <TechChips/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
