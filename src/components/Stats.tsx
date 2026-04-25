import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { STATS } from '../data/content'
import './stats.css'

function Counter({ to, duration = 1.6 }: { to: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const mv = useMotionValue(0)
  const rounded = useTransform(mv, (v) => Math.round(v).toString())
  const inView = useInView(ref, { once: true, amount: 0.4 })

  useEffect(() => {
    if (!inView) return
    const ctrl = animate(mv, to, { duration, ease: [0.2, 0.8, 0.2, 1] })
    return () => ctrl.stop()
  }, [inView, mv, to, duration])

  useEffect(() => {
    const unsub = rounded.on('change', (v) => {
      if (ref.current) ref.current.textContent = v
    })
    return () => unsub()
  }, [rounded])

  return <span ref={ref}>0</span>
}

export default function Stats() {
  return (
    <section id="stats" className="stats">
      <div className="container">
        <div className="stats-grid">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              className="stat-cell"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <div className="stat-n display">
                <Counter to={s.n} />
                <span className="stat-suffix">{s.suffix}</span>
              </div>
              <div className="mono stat-label">— {s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
