import { motion } from 'framer-motion'
import { CASES } from '../data/content'
import './cases.css'

export default function Cases() {
  return (
    <section id="cases" className="cases">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">§ Кейсы</div>
            <h2>Что уже <em>в бою</em>.</h2>
          </div>
          <div className="section-idx">IV</div>
        </div>

        <div className="case-grid">
          {CASES.map((c, i) => (
            <motion.article
              key={c.title}
              className="case-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: (i % 2) * 0.1 + Math.floor(i / 2) * 0.06, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <div className="case-preview" aria-hidden>
                <div className="case-preview-grid">
                  <span /><span /><span /><span /><span /><span />
                  <span /><span /><span /><span /><span /><span />
                </div>
                <div className="case-preview-label mono">{String(i + 1).padStart(2, '0')} / {c.tag}</div>
              </div>

              <div className="case-body">
                <div className="mono case-meta">{c.meta}</div>
                <h3 className="case-title display">{c.title}</h3>
                <p className="case-desc">{c.body}</p>
                <ul className="case-stack">
                  {c.stack.map((s) => (
                    <li key={s} className="mono">{s}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
