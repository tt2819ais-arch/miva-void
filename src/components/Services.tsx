import { motion } from 'framer-motion'
import { SERVICES } from '../data/content'
import './services.css'

// marquee-like vertical list with crossed counters
export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">§ Что мы делаем</div>
            <h2>Инструменты,<br />которые <em>работают</em>.</h2>
          </div>
          <div className="section-idx">IV</div>
        </div>

        <ul className="svc-list">
          {SERVICES.map((s, i) => (
            <motion.li
              key={s}
              className="svc-row"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.06, duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <span className="svc-n mono">{String(i + 1).padStart(2, '0')}</span>
              <span className="svc-title display">{s}</span>
              <span className="svc-rule" aria-hidden />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
