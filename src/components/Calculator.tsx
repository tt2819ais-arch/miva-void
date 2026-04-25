import { useState } from 'react'
import { motion } from 'framer-motion'
import { PROJECT_TYPES, COMPLEXITY } from '../data/content'
import './calculator.css'

type Integration = { id: string; label: string; price: number; days: number }

const INTEGRATIONS: Integration[] = [
  { id: 'pay',  label: 'Платежи',      price: 30, days: 2 },
  { id: 'crm',  label: 'CRM / ERP',    price: 40, days: 3 },
  { id: 'ai',   label: 'AI / GPT',     price: 60, days: 4 },
  { id: 'auth', label: 'Авторизация',  price: 20, days: 1 },
  { id: 'sms',  label: 'SMS / Email',  price: 15, days: 1 },
  { id: 'sup',  label: 'Поддержка 1 мес.', price: 50, days: 0 },
]

export default function Calculator() {
  const [type, setType] = useState<string>(PROJECT_TYPES[0].id)
  const [cplx, setCplx] = useState<string>(COMPLEXITY[1].id)
  const [intl, setIntl] = useState<Set<string>>(new Set())

  const pt = PROJECT_TYPES.find((p) => p.id === type)!
  const ck = COMPLEXITY.find((c) => c.id === cplx)!

  const addDays = INTEGRATIONS.filter((i) => intl.has(i.id)).reduce((s, i) => s + i.days, 0)
  const addPrice = INTEGRATIONS.filter((i) => intl.has(i.id)).reduce((s, i) => s + i.price, 0)

  const days = Math.round(pt.days * ck.k + addDays)
  const price = Math.round(pt.base * ck.k + addPrice)

  const toggle = (id: string) => {
    setIntl((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  return (
    <section id="calc" className="calc">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">§ Собрать проект</div>
            <h2>Оценка — <em>за минуту</em>.</h2>
          </div>
          <div className="section-idx">V</div>
        </div>

        <div className="calc-layout">
          <div className="calc-form">
            <div className="calc-row">
              <div className="mono calc-label">01 / тип проекта</div>
              <div className="calc-chips">
                {PROJECT_TYPES.map((p) => (
                  <button
                    key={p.id}
                    className={`chip ${type === p.id ? 'is-on' : ''}`}
                    onClick={() => setType(p.id)}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="calc-row">
              <div className="mono calc-label">02 / сложность</div>
              <div className="calc-chips">
                {COMPLEXITY.map((c) => (
                  <button
                    key={c.id}
                    className={`chip ${cplx === c.id ? 'is-on' : ''}`}
                    onClick={() => setCplx(c.id)}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="calc-row">
              <div className="mono calc-label">03 / интеграции</div>
              <div className="calc-chips">
                {INTEGRATIONS.map((i) => (
                  <button
                    key={i.id}
                    className={`chip ${intl.has(i.id) ? 'is-on' : ''}`}
                    onClick={() => toggle(i.id)}
                  >
                    {i.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <motion.aside
            className="calc-out"
            layout
            transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <div className="calc-out-row">
              <div className="mono calc-out-k">срок</div>
              <div className="calc-out-v display">
                <AnimNum value={days} />
                <span className="calc-out-unit">д.</span>
              </div>
            </div>
            <div className="calc-out-row">
              <div className="mono calc-out-k">от</div>
              <div className="calc-out-v display">
                <AnimNum value={price} />
                <span className="calc-out-unit">т ₽</span>
              </div>
            </div>
            <a href="#contact" className="btn btn--primary calc-cta">
              <span>оставить заявку</span>
              <span className="btn-arrow">→</span>
            </a>
            <p className="mono calc-note">* оценка ориентировочная. финальную цифру сверяем после брифа.</p>
          </motion.aside>
        </div>
      </div>
    </section>
  )
}

function AnimNum({ value }: { value: number }) {
  return (
    <motion.span
      key={value}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="calc-num"
    >
      {value}
    </motion.span>
  )
}
