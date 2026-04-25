import { motion } from 'framer-motion'
import { APPROACH } from '../data/content'
import './approach.css'

export default function Approach() {
  return (
    <section id="approach" className="approach">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">§ Наш подход</div>
            <h2>Без магии.<br /><em>Процесс.</em></h2>
          </div>
          <div className="section-idx">V</div>
        </div>

        <ol className="apr-grid">
          {APPROACH.map((a, i) => (
            <motion.li
              key={a.n}
              className="apr-step"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.08, duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <div className="apr-n mono">{a.n}</div>
              <div className="apr-rule" />
              <h3 className="apr-title serif">{a.title}</h3>
              <p className="apr-body">{a.body}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
