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
          <p className="hero__label reveal">Frontend Developer · Stockholm</p>

          <h1 className="hero__title reveal reveal-delay-1">
            <span className="hero__greeting">Hello,</span>
            <span className="hero__name">I'm Alex Blom.</span>
          </h1>

          <p className="hero__tagline reveal reveal-delay-2">
            Frontend-focused developer specialising in React, Web3 &amp; AI-driven products.
            I turn ideas into polished, high-performance interfaces.
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
              Frontend-heavy developer with fullstack capability, focused on building practical products
              with React, Next.js, and TypeScript. Currently working as an Agentic Developer at SISP,
              building the MVP for Sweden Startup Next — a platform that collects and showcases data on
              Sweden's startup ecosystem. I work in fast-paced, cross-functional teams with spec-driven
              development and modern AI-assisted workflows using Claude.
            </p>
            <p className="about__paragraph reveal reveal-delay-1">
              Deeply passionate about Web3 and decentralised finance. I'm the founder of Osciwave —
              a Web3 mobile app that mints your favourite sound as a 1-of-1 ERC721 NFT used to
              verify payments. I've also built a full decentralised exchange (DEX) with multi-asset
              support, liquidity pools, flashloans, and OpenZeppelin security standards — all in
              Solidity with Foundry, Wagmi, and Viem.
            </p>
            <p className="about__paragraph reveal reveal-delay-2">
              Outside of code, I have a founder and innovation mentality — I love fast-paced,
              growth-heavy environments and I'm super eager to learn. I also hold a position at
              AstraZeneca where I help part-time with app development and assist with agentic
              development workflows. Beyond work, I'm deeply passionate about fitness and
              bodybuilding, which keeps me disciplined, persistent, and always pushing forward.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
