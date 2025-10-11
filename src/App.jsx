import { useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import TechChips from './components/TechChips/TechChips.jsx'
import Projects from './components/Projects/Projects.jsx'
import Contact from './components/Contact/Contact.jsx'

function App() {

  useEffect(() => {
    // Enhanced smooth scrolling for anchor links
    const smoothScrollToSection = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        e.preventDefault();
        const targetId = target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          const navbarHeight = 64; // 4rem navbar height
          const targetPosition = targetElement.offsetTop - navbarHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    // Add event listener for smooth scrolling
    document.addEventListener('click', smoothScrollToSection);

    // Cleanup
    return () => {
      document.removeEventListener('click', smoothScrollToSection);
    };
  }, []);

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
