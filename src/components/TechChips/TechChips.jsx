import './TechChips.css'

const techs = [
  'React', 'JavaScript', 'TypeScript', 'HTML', 'CSS',
  'Tailwind', 'Node.js', 'Express', 'MongoDB', 'Firebase',
  'Git', 'Next.js', 'Vite', 'OpenAI', 'Claude API',
  'Solidity', 'Foundry', 'Web3.js', 'Ethers.js', 'Redux',
  'Supabase', 'Puppeteer', 'Railway', 'Vercel', 'Framer Motion',
]

// Build the ticker string (doubled for seamless loop)
const tickerText = [...techs, ...techs]
  .map(t => `<span class="chip-label">${t}</span><span class="chip-dot">·</span>`)
  .join(' ')

function TechChips() {
  return (
    <section className="technologies" id="technologies">
      <div className="tech__header">
        <div className="tech__header-left">
          <span className="section-label reveal">Technologies</span>
          <h2 className="tech__title reveal reveal-delay-1">
            My <em>toolkit</em><br />includes
          </h2>
          <p className="tech__subtitle reveal reveal-delay-2">
            Whether it's bringing a client's vision to life or brainstorming
            innovative solutions, I'm always up for the challenge.
          </p>
        </div>
      </div>

      <div className="chips-container">
        <div className="chips-scroll">
          <div
            className="chips-content"
            dangerouslySetInnerHTML={{ __html: tickerText }}
          />
        </div>
      </div>

      <div className="tech__footer">
        <div className="tech__categories">
          <div className="tech__category reveal">
            <span className="tech__category-label">Frontend</span>
            <ul className="tech__category-list">
              <li>React / Next.js</li>
              <li>TypeScript / JavaScript</li>
              <li>Tailwind / CSS</li>
              <li>Framer Motion</li>
              <li>Redux Toolkit</li>
            </ul>
          </div>
          <div className="tech__category reveal reveal-delay-1">
            <span className="tech__category-label">Backend</span>
            <ul className="tech__category-list">
              <li>Node.js / Express</li>
              <li>MongoDB / Firebase</li>
              <li>Supabase</li>
              <li>REST APIs</li>
              <li>Railway / Vercel</li>
            </ul>
          </div>
          <div className="tech__category reveal reveal-delay-2">
            <span className="tech__category-label">Web3</span>
            <ul className="tech__category-list">
              <li>Solidity / Foundry</li>
              <li>Ethers.js / Viem</li>
              <li>Wagmi</li>
              <li>IPFS / Base chain</li>
              <li>Smart contracts</li>
            </ul>
          </div>
          <div className="tech__category reveal reveal-delay-3">
            <span className="tech__category-label">AI &amp; Tools</span>
            <ul className="tech__category-list">
              <li>Claude API / OpenAI</li>
              <li>Prompt engineering</li>
              <li>Puppeteer / Zod</li>
              <li>Git / GitHub</li>
              <li>Vite / Webpack</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechChips
