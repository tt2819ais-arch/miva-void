import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { FAQ } from '../data/content'
import './faq.css'

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="faq">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">§ Частые вопросы</div>
            <h2>Что <em>спрашивают</em>.</h2>
          </div>
          <div className="section-idx">IX</div>
        </div>

        <ul className="faq-list">
          {FAQ.map((f, i) => {
            const isOpen = open === i
            return (
              <li key={f.q} className={`faq-item ${isOpen ? 'is-open' : ''}`}>
                <button
                  className="faq-q"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="mono faq-n">{String(i + 1).padStart(2, '0')}</span>
                  <span className="display faq-text">{f.q}</span>
                  <span className="faq-toggle" aria-hidden>
                    <span />
                    <span />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
                      className="faq-a-wrap"
                    >
                      <div className="faq-a">{f.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
