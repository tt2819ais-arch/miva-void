import { motion, type Variants } from 'framer-motion'
import { ECOSYSTEM } from '../data/content'
import './ecosystem.css'

const EASE = [0.2, 0.8, 0.2, 1] as const

const fade: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.8, ease: EASE },
  }),
}

export default function Ecosystem() {
  return (
    <section id="ecosystem">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">§ Бренды экосистемы</div>
            <h2>Одна экосистема —<br />много решений.</h2>
          </div>
          <div className="section-idx">I — II</div>
        </div>

        <div className="eco-grid">
          {ECOSYSTEM.map((b, i) => (
            <motion.article
              key={b.name}
              className="eco-card"
              variants={fade}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
            >
              <div className="eco-top">
                <span className="eco-mark serif">{b.mark}</span>
                <span className="mono eco-role">— {b.role}</span>
              </div>

              <h3 className="eco-name serif">{b.name}</h3>
              <p className="eco-body">{b.body}</p>

              <a className="eco-link link-ul mono" href={b.url}>
                подробнее →
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
