import { motion } from 'framer-motion'
import './contact.css'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">§ Связаться</div>
            <h2>Есть задача —<br /><em>давайте</em> соберём.</h2>
          </div>
          <div className="section-idx">VIII</div>
        </div>

        <motion.div
          className="contact-grid"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <a className="contact-card" href="https://t.me/miva_studio" target="_blank" rel="noreferrer">
            <span className="mono contact-k">01 / разработка</span>
            <span className="serif contact-name">MIVA Studio</span>
            <span className="mono contact-handle">@miva_studio →</span>
          </a>

          <a className="contact-card" href="https://t.me/coder_store_bot" target="_blank" rel="noreferrer">
            <span className="mono contact-k">02 / магазин</span>
            <span className="serif contact-name">CODER Store Bot</span>
            <span className="mono contact-handle">@coder_store_bot →</span>
          </a>

          <a className="contact-card" href="https://t.me/coder_channel" target="_blank" rel="noreferrer">
            <span className="mono contact-k">03 / канал</span>
            <span className="serif contact-name">CODER Channel</span>
            <span className="mono contact-handle">@coder_channel →</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
