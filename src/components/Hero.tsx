import { motion } from 'framer-motion'
import { BRAND } from '../data/content'
import './hero.css'

// hero: big wordmark + quiet meta around it. spaced like a book cover.
export default function Hero() {
  const letters = BRAND.name.split('')

  return (
    <section className="hero" id="top">
      <div className="hero-grid container">
        <div className="hero-meta">
          <span className="mono eyebrow">n° 001 — MMXXV</span>
          <span className="hero-dot" aria-hidden />
          <span className="mono eyebrow">{BRAND.byline}</span>
        </div>

        <h1 className="hero-title serif" aria-label={`${BRAND.name} ${BRAND.sub}`}>
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
            className="hero-sub"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
          >
            {BRAND.sub}
          </motion.span>
        </h1>

        <motion.p
          className="hero-tagline mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          &lt;/&gt;&nbsp;&nbsp;{BRAND.tagline.toLowerCase()}
        </motion.p>

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
