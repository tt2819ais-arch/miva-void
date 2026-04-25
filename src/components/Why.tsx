import { motion } from 'framer-motion'
import { WHY } from '../data/content'
import './why.css'

export default function Why() {
  return (
    <section id="why" className="why">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">§ Почему CODER</div>
            <h2>Мы создаём системы,<br />которые <em>работают</em>.</h2>
          </div>
          <div className="section-idx">VI</div>
        </div>

        <div className="why-grid">
          {WHY.map((w, i) => (
            <motion.div
              key={w.title}
              className="why-cell"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.06, duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <span className="why-k mono">{w.k}</span>
              <h3 className="why-title display">{w.title}</h3>
              <p className="why-body">{w.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
