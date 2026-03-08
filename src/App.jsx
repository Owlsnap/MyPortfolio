import { useEffect, useState, useRef } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import TechChips from './components/TechChips/TechChips.jsx'
import Projects from './components/Projects/Projects.jsx'
import Contact from './components/Contact/Contact.jsx'

function App() {
  const [theme, setTheme] = useState('dark')
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const mouse = useRef({ x: 0, y: 0 })
  const ring = useRef({ x: 0, y: 0 })

  // Apply theme to root
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  // Custom cursor
  useEffect(() => {
    const dot = dotRef.current
    const ringEl = ringRef.current
    if (!dot || !ringEl) return

    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY }
      dot.style.left = e.clientX + 'px'
      dot.style.top = e.clientY + 'px'
    }

    let rafId
    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.12
      ring.current.y += (mouse.current.y - ring.current.y) * 0.12
      ringEl.style.left = ring.current.x + 'px'
      ringEl.style.top = ring.current.y + 'px'
      rafId = requestAnimationFrame(animate)
    }
    rafId = requestAnimationFrame(animate)

    const onEnter = () => {
      ringEl.classList.add('hovered')
      dot.classList.add('hovered')
    }
    const onLeave = () => {
      ringEl.classList.remove('hovered')
      dot.classList.remove('hovered')
    }

    // Attach hover listeners (and re-attach after DOM changes via MutationObserver)
    const attachHover = () => {
      document.querySelectorAll('a, button, [data-hover]').forEach(el => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    }
    attachHover()
    const mo = new MutationObserver(attachHover)
    mo.observe(document.body, { childList: true, subtree: true })

    window.addEventListener('mousemove', onMove)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
      mo.disconnect()
    }
  }, [])

  // Smooth scroll for anchor links
  useEffect(() => {
    const smoothScroll = (e) => {
      const target = e.target.closest('a[href^="#"]')
      if (!target) return
      e.preventDefault()
      const id = target.getAttribute('href').substring(1)
      const el = document.getElementById(id)
      if (el) window.scrollTo({ top: el.offsetTop - 64, behavior: 'smooth' })
    }
    document.addEventListener('click', smoothScroll)
    return () => document.removeEventListener('click', smoothScroll)
  }, [])

  // Scroll-reveal via IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    const observe = () => {
      document.querySelectorAll('.reveal:not(.revealed)').forEach(el => observer.observe(el))
    }
    observe()
    // Re-observe after small delay for dynamically rendered elements
    const t = setTimeout(observe, 300)
    return () => { observer.disconnect(); clearTimeout(t) }
  }, [])

  return (
    <div className='appContainer'>
      <div className='cursor-dot' ref={dotRef} />
      <div className='cursor-ring' ref={ringRef} />
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <Projects />
      <TechChips />
      <Contact />
    </div>
  )
}

export default App
