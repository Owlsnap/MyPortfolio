import { useEffect, useRef } from 'react'
import './Hero.css'
import heroImage from '../../assets/hero-photo.jpg'
import MagneticButton from '../MagneticButton/MagneticButton.jsx'

function Hero() {
  const orbRef = useRef(null)

  // Subtle parallax on the orange orb
  useEffect(() => {
    const orb = orbRef.current
    if (!orb) return
    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40
      const y = (e.clientY / window.innerHeight - 0.5) * 40
      orb.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section className="hero" id="hero">
      <div className="hero__orb" ref={orbRef} />

      <div className="hero__container">
        <div className="hero__left">
          <p className="hero__label reveal">Based in Stockholm</p>

          <h1 className="hero__title reveal reveal-delay-1">
            <span className="hero__name">Alex Valentin Blom</span>
            <span className="hero__role">Product Engineer</span>
            <span className="hero__role hero__role--accent">AI Automation</span>
          </h1>

          <p className="hero__tagline reveal reveal-delay-2">
            I take products from idea to shipped — across web, mobile, Web3 &amp; AI.
            I care about the problem as much as the code that solves it.
          </p>

          <div className="hero__ctas reveal reveal-delay-3">
            <MagneticButton variant="filled" href="#projects">
              <span>View work</span>
              <span className="btn-icon">↗</span>
            </MagneticButton>
            <MagneticButton variant="ghost" href="#contact">
              <span>Get in touch</span>
            </MagneticButton>
            <a
              href="/AlexBlomResume.pdf"
              download="AlexBlomResume.pdf"
              className="hero__resume-link"
            >
              Download CV ↓
            </a>
          </div>
        </div>

        <div className="hero__right reveal reveal-delay-2">
          <div className="hero__image-wrap">
            <img id="image" src={heroImage} alt="Alex Blom" />
          </div>
        </div>
      </div>

      {/* About */}
      <div className="about" id="about">
        <div className="about__inner">
          <div className="about__label-col">
            <span className="section-label">About</span>
            <div className="about__index">01</div>
          </div>
          <div className="about__text-col">
            <p className="about__paragraph reveal">
              I own features end to end — from understanding the user problem and shaping the spec,
              to building across the stack and iterating after launch. My strongest tools are React,
              Next.js, and TypeScript, but I reach for whatever gets the product in front of users
              fastest. I currently work part-time as an AI Developer at Litesmartare.se, building
              AI-driven automation that saves Swedish small businesses time on their everyday work.
              Before that, I interned as an Agentic Developer at SISP, building the MVP for Sweden
              Startup Next — a platform that collects and showcases data on Sweden's startup ecosystem —
              in a cross-functional team using spec-driven development and AI-assisted workflows with Claude.
            </p>
            <p className="about__paragraph reveal reveal-delay-1">
              I like building my own products, not just features. I built Supplement Scanner —
              a tool that cuts through marketing on supplement labels by breaking down ingredients,
              dosages, synergies, and cautions, with every claim backed by studies sourced from PubMed.
              I also built Spontana, which puts Stockholm's events in one place — live data from
              Ticketmaster and Visit Stockholm alongside events created by users.
            </p>
            <p className="about__paragraph reveal reveal-delay-2">
              Outside of code, I have an entrepreneurial mindset — I think in terms of users, outcomes,
              and what to build next, and I thrive in fast-paced, growth-heavy environments. I work full-time at
              AstraZeneca as a machine technician, and having made clear my interest in development,
              I've taken on app and agentic development projects there on the side. Beyond work,
              I'm deeply passionate about fitness and bodybuilding, which keeps me disciplined,
              persistent, and always pushing forward.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
