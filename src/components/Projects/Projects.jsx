import { useState, useCallback, useRef } from 'react'
import './Projects.css'
import osciwave1 from '../../assets/osciwave1.webp'
import osciwave2 from '../../assets/osciwave2.png'
import spontana1 from '../../assets/spontana_preview.png'
import spontana2 from '../../assets/spontana2.png'
import supplementScannerOne from '../../assets/suppscanner_preview.png'
import supplementScannerTwo from '../../assets/suppscanner_img2.jpg'
import dex1 from '../../assets/dex_preview.png'

const projects = [
  {
    id: '01',
    title: 'Osciwave.io',
    desc: 'Founded and built from scratch. Every payment sounds the same — Osciwave lets users own theirs by minting a favorite sound as a 1-of-1 ERC721 NFT that plays as their personal payment confirmation.',
    tags: ['Next.js 15', 'TypeScript', 'Tailwind', 'Framer Motion', 'React Native', 'Wagmi'],
    live: 'https://osciwave.io',
    github: 'https://github.com/Owlsnap/Osciwave/tree/master',
    preview: osciwave1,
  },
  {
    id: '02',
    title: 'Spontana',
    desc: 'Finding something to do tonight means checking five different sites. Spontana puts Stockholm\'s events in one place — live data from Ticketmaster and Visit Stockholm, plus events created by users.',
    tags: ['React', 'JavaScript', 'Supabase', 'React Router', 'Vite'],
    live: 'https://spontana.app',
    github: 'https://github.com/Owlsnap/spontana',
    preview: spontana1,
  },
  {
    id: '03',
    title: 'Supplement Scanner',
    desc: 'Supplement labels are full of marketing and short on evidence. Supplement Scanner breaks down ingredients, dosages, synergies, and cautions — every claim backed by studies sourced from PubMed.',
    tags: ['React Native', 'TypeScript', 'Node.js', 'Expo Go', 'Claude API'],
    live: 'https://www.supplementscanner.io/',
    github: 'https://github.com/Owlsnap/SupplementScanner',
    preview: supplementScannerOne,
  },
  {
    id: '04',
    title: 'ProtoSwap DEX',
    desc: 'A full decentralized exchange, from smart contracts to UI. Swap ETH and ERC20 tokens with clear slippage, provide liquidity, or take flash loans — secured with OpenZeppelin Timelock delays and reentrancy guards.',
    tags: ['Solidity', 'Foundry', 'Wagmi', 'Viem', 'Rainbowkit', 'Ethers.js'],
    live: 'https://protoswap-lemon.vercel.app/',
    github: 'https://github.com/Owlsnap',
    preview: dex1,
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
              <p className="project-preview__desc">{activeProject.desc}</p>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default Projects
