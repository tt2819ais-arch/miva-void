import { motion } from 'framer-motion'
import { BRAND } from '../data/content'
import Terminal from './Terminal'
import './hero.css'

// hero: big wordmark "M I V A" on the left, live terminal on the right.
export default function Hero() {
  const letters = BRAND.name.split('')

  return (
    <section className="hero" id="top">
      {/* backdrop word */}
      <div className="hero-backdrop" aria-hidden>
        <span>VOID</span>
      </div>

      {/* side tickers */}
      <aside className="hero-side hero-side--left mono" aria-hidden>
        <span>▮ live</span>
        <span>/sys/ok</span>
        <span>build 9·4·1</span>
        <span>lat 12ms</span>
      </aside>
      <aside className="hero-side hero-side--right mono" aria-hidden>
        <span>n° 001</span>
        <span>mmxxv</span>
        <span>void</span>
        <span>coder</span>
      </aside>

      <div className="hero-grid container">
        <div className="hero-meta">
          <span className="mono eyebrow">n° 001 — mmxxv</span>
          <span className="hero-dot" aria-hidden />
          <span className="mono eyebrow">{BRAND.byline}</span>
        </div>

        <div className="hero-main">
          <h1 className="hero-title display" aria-label={`${BRAND.name} ${BRAND.sub}`}>
            <span className="hero-word">
              {letters.map((ch, i) => (
                <motion.span
                  key={i}
                  className="hero-letter"
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.15 + i * 0.07, duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
                >
                  {ch}
                </motion.span>
              ))}
            </span>
            <motion.span
              className="hero-sub mono"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
            >
              / {BRAND.sub.toLowerCase()}
            </motion.span>
          </h1>

          <motion.p
            className="hero-tagline mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.8 }}
          >
            &lt;/&gt;&nbsp;&nbsp;{BRAND.tagline.toLowerCase()}
          </motion.p>

          <motion.div
            className="hero-ctas"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.15, duration: 0.7 }}
          >
            <a href="#calc" className="btn btn--primary">
              <span>собрать проект</span>
              <span className="btn-arrow">→</span>
            </a>
            <a href="#cases" className="btn btn--ghost">
              <span>смотреть кейсы</span>
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero-terminal"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <Terminal />
        </motion.div>

        <motion.div
          className="hero-foot"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.25, duration: 0.8 }}
        >
          <ul className="hero-tags">
            <li>разработка</li>
            <li>автоматизация</li>
            <li>боты</li>
            <li>фриланс-найм</li>
            <li>готовые проекты</li>
          </ul>

          <a href="#ecosystem" className="hero-scroll" aria-label="Вниз к разделам">
            <span className="mono">scroll</span>
            <span className="hero-scroll-line" />
          </a>
        </motion.div>
      </div>

      {/* soft frame lines, like a print cover */}
      <div className="hero-frame" aria-hidden>
        <span /><span /><span /><span />
      </div>
    </section>
  )
}
