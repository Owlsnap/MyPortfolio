import { useState, useCallback, useRef } from 'react'
import './Projects.css'
import osciwave1 from '../../assets/osciwave1.png'
import osciwave2 from '../../assets/osciwave2.png'
import spontana1 from '../../assets/spontana_preview.png'
import spontana2 from '../../assets/spontana2.png'
import supplementScannerOne from '../../assets/suppscanner_preview.png'
import supplementScannerTwo from '../../assets/suppscanner_img2.jpg'
import bookstoreOne from '../../assets/bookstoreImageOne.png'
import bookstoreTwo from '../../assets/bookstoreImgTwo.jpg'
import flagOne from '../../assets/flag.png'
import flagTwo from '../../assets/flag2.png'
import dex1 from '../../assets/dex_preview.png'

const projects = [
  {
    id: '01',
    title: 'Osciwave.io',
    desc: 'Landing page for a mobile app that lets users mint audio files as NFTs and use them as unique payment confirmation sounds.',
    tags: ['Next.js 15', 'TypeScript', 'Tailwind', 'Framer Motion', 'React Native', 'Wagmi'],
    live: 'https://osciwave.io',
    github: 'https://github.com/Owlsnap/Osciwave/tree/master',
    preview: osciwave1,
  },
  {
    id: '02',
    title: 'Spontana',
    desc: 'Stockholm event aggregator built for spontaneous nights out. Pulls live events from Ticketmaster and Visit Stockholm APIs.',
    tags: ['React', 'JavaScript', 'Supabase', 'React Router', 'Vite'],
    live: 'https://spontana.app',
    github: 'https://github.com/Owlsnap/spontana',
    preview: spontana1,
  },
  {
    id: '03',
    title: 'Supplement Scanner',
    desc: 'Barscanning app that gives users a quality analysis on dosage and ingredients, plus use-case descriptions. AI-powered data ingestion with Zod normalisation and Jina Reader for LLM-friendly URL extraction.',
    tags: ['React Native', 'TypeScript', 'Node.js', 'Expo Go', 'Claude API'],
    live: 'https://www.supplementscanner.io/',
    github: 'https://github.com/Owlsnap/SupplementScanner',
    preview: supplementScannerOne,
  },
  {
    id: '04',
    title: 'ProtoSwap DEX',
    desc: 'Multi-asset DEX supporting ETH and ERC20 tokens. Features token swaps with slippage calculation, liquidity pools, a flashloan mechanism, and OpenZeppelin security standards including Timelock delays and reentrancy guards.',
    tags: ['Solidity', 'Foundry', 'Wagmi', 'Viem', 'Rainbowkit', 'Ethers.js'],
    live: 'https://protoswap-lemon.vercel.app/',
    github: 'https://github.com/Owlsnap',
    preview: dex1,
  },
  {
    id: '05',
    title: 'E-Bookstore',
    desc: 'Full-stack e-commerce site with user authentication, a complete checkout flow, and an admin dashboard.',
    tags: ['React', 'Node', 'MongoDB', 'Firebase', 'Redux Toolkit', 'JWT'],
    live: 'https://e-bookstore-app.vercel.app/',
    github: 'https://github.com/Owlsnap/E-Bookstore-app',
    preview: bookstoreOne,
  },
  {
    id: '09',
    title: 'World Flags Explorer',
    desc: 'Country explorer built on the REST Countries API. Browse facts, filter by region, and navigate between bordering nations.',
    tags: ['React', 'JavaScript', 'React Router', 'REST API'],
    live: 'https://world-flag-app.netlify.app/',
    github: 'https://github.com/Owlsnap/Flag-App',
    preview: flagOne,
  },
]

function Projects() {
  const [hovered, setHovered] = useState(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const sectionRef = useRef(null)

  const handleMouseMove = useCallback((e) => {
    setMousePos({ x: e.clientX, y: e.clientY })
  }, [])

  const activeProject = projects.find(p => p.id === hovered)

  // Clamp preview so it stays within viewport
  const previewLeft = mousePos.x + 30 + 380 > window.innerWidth
    ? mousePos.x - 400
    : mousePos.x + 30
  const previewTop = Math.max(10, Math.min(mousePos.y - 80, window.innerHeight - 300))

  return (
    <section
      className="projects"
      id="projects"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
    >
      <div className="projects__header reveal">
        <span className="section-label">Selected Work</span>
        <span className="projects__count">{projects.length} projects</span>
      </div>

      <div className="projects__list">
        {projects.map((project, i) => (
          <a
            key={project.id}
            href={project.live ?? project.github}
            target="_blank"
            rel="noreferrer"
            className={`project-row reveal reveal-delay-${Math.min(i, 4)}`}
            onMouseEnter={() => setHovered(project.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <span className="project-row__number">{project.id}</span>

            <div className="project-row__title-wrap">
              <span className="project-row__title">{project.title}</span>
            </div>

            <div className="project-row__tags">
              {project.tags.slice(0, 4).map(tag => (
                <span key={tag} className="project-row__tag">{tag}</span>
              ))}
            </div>

            <div className="project-row__links">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="project-row__github"
                onClick={e => e.stopPropagation()}
              >
                GH ↗
              </a>
              <span className="project-row__arrow">↗</span>
            </div>
          </a>
        ))}
      </div>

      {/* Floating cursor preview */}
      <div
        className={`project-preview${hovered && activeProject?.preview ? ' visible' : ''}`}
        style={{ left: previewLeft, top: previewTop }}
      >
        {activeProject?.preview && (
          <>
            <img src={activeProject.preview} alt={activeProject.title} />
            <div className="project-preview__caption">
              <span>Selected work</span>
              <strong>{activeProject.title}</strong>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default Projects
