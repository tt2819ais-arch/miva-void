import { motion } from 'framer-motion'
import './twopaths.css'

export default function TwoPaths() {
  return (
    <section id="two-paths" className="two-paths">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">§ Два пути — одна цель</div>
            <h2>От идеи<br />до <em>прибыли</em>.</h2>
          </div>
          <div className="section-idx">VII</div>
        </div>

        <div className="tp-row">
          <motion.div
            className="tp-side"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <span className="mono tp-tag">/ индивидуально</span>
            <h3 className="tp-name serif">MIVA Systems</h3>
            <p className="tp-body">Разработка под задачу. Системы, боты, сервисы — с нуля.</p>
            <a href="#contact" className="mono tp-link link-ul">заказать разработку →</a>
          </motion.div>

          <motion.div
            className="tp-bridge"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.1, ease: [0.2, 0.8, 0.2, 1] }}
            aria-hidden
          >
            <span className="tp-bridge-dot" />
            <span className="tp-bridge-dot" />
          </motion.div>

          <motion.div
            className="tp-side tp-side--right"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <span className="mono tp-tag">/ готовое</span>
            <h3 className="tp-name serif">CODER Market</h3>
            <p className="tp-body">Готовые решения. Берёшь — запускаешь — зарабатываешь.</p>
            <a href="#contact" className="mono tp-link link-ul">смотреть каталог →</a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
