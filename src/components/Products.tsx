import { motion } from 'framer-motion'
import { PRODUCTS } from '../data/content'
import './products.css'

export default function Products() {
  return (
    <section id="products" className="products">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">§ Продукты</div>
            <h2>Три канала, <em>одна</em> сборка.</h2>
          </div>
          <div className="section-idx">III</div>
        </div>

        <div className="prod-list">
          {PRODUCTS.map((p, i) => (
            <motion.article
              key={p.name}
              className="prod-row"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.08, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <div className="prod-index mono">{String(i + 1).padStart(2, '0')}</div>

              <div className="prod-main">
                <div className="mono prod-tag">{p.tag}</div>
                <h3 className="prod-name display">{p.name}</h3>
                <p className="prod-body">{p.body}</p>
              </div>

              <a className="prod-link mono" href={p.href} target="_blank" rel="noreferrer">
                <span>{p.handle}</span>
                <span className="prod-arrow" aria-hidden>→</span>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
