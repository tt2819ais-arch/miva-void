import { motion } from 'framer-motion'
import { TESTIMONIALS } from '../data/content'
import './testimonials.css'

export default function Testimonials() {
  return (
    <section id="testimonials" className="test">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">§ Отзывы</div>
            <h2>Что <em>говорят</em>.</h2>
          </div>
          <div className="section-idx">VIII</div>
        </div>

        <div className="test-grid">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.author}
              className="test-card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <div className="test-quote display">“</div>
              <blockquote className="test-text">{t.text}</blockquote>
              <figcaption className="test-meta">
                <span className="display test-author">{t.author}</span>
                <span className="mono test-role">{t.role}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
