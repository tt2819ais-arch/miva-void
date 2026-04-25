import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import './contact.css'

type Field = 'name' | 'contact' | 'brief'
type Errors = Partial<Record<Field, string>>

export default function Contact() {
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [brief, setBrief] = useState('')
  const [touched, setTouched] = useState<Record<Field, boolean>>({
    name: false,
    contact: false,
    brief: false,
  })
  const [sent, setSent] = useState(false)

  const errors: Errors = useMemo(() => {
    const e: Errors = {}
    if (name.trim().length < 2) e.name = 'как к вам обращаться?'
    if (!/^@?[a-zA-Z0-9_\-.+ ]{3,}$|^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.trim()))
      e.contact = 'tg-ник или email'
    if (brief.trim().length < 10) e.brief = 'пара предложений о задаче'
    return e
  }, [name, contact, brief])

  const canSend = Object.keys(errors).length === 0

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault()
    setTouched({ name: true, contact: true, brief: true })
    if (!canSend) return
    // open telegram chat with pre-filled message
    const payload =
      `Заявка с miva-void.\nИмя: ${name}\nКонтакт: ${contact}\n\n${brief}`
    const url = `https://t.me/miva_studio?text=${encodeURIComponent(payload)}`
    window.open(url, '_blank')
    setSent(true)
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">§ Связаться</div>
            <h2>Есть задача —<br />давайте <em>соберём</em>.</h2>
          </div>
          <div className="section-idx">X</div>
        </div>

        <div className="contact-layout">
          <motion.form
            className="cf"
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
            noValidate
          >
            <Field
              label="01 / имя"
              value={name}
              onChange={setName}
              error={touched.name ? errors.name : undefined}
              onBlur={() => setTouched((t) => ({ ...t, name: true }))}
              placeholder="как к вам обращаться"
            />
            <Field
              label="02 / контакт"
              value={contact}
              onChange={setContact}
              error={touched.contact ? errors.contact : undefined}
              onBlur={() => setTouched((t) => ({ ...t, contact: true }))}
              placeholder="@telegram или email"
            />
            <Field
              label="03 / задача"
              value={brief}
              onChange={setBrief}
              error={touched.brief ? errors.brief : undefined}
              onBlur={() => setTouched((t) => ({ ...t, brief: true }))}
              placeholder="что нужно сделать, сроки, ссылки"
              textarea
            />

            <div className="cf-foot">
              <button
                type="submit"
                className={`btn btn--primary ${!canSend ? 'is-disabled' : ''}`}
                disabled={!canSend}
              >
                <span>{sent ? 'открыто в telegram' : 'отправить'}</span>
                <span className="btn-arrow">→</span>
              </button>
              <span className="mono cf-note">данные уходят прямо в чат, без бэкенда.</span>
            </div>
          </motion.form>

          <aside className="cf-side">
            <div className="eyebrow">прямые контакты</div>
            <a className="cf-link" href="https://t.me/miva_studio" target="_blank" rel="noreferrer">
              <span className="display cf-link-name">M I V A Studio</span>
              <span className="mono">@miva_studio →</span>
            </a>
            <a className="cf-link" href="https://t.me/coder_store_bot" target="_blank" rel="noreferrer">
              <span className="display cf-link-name">CODER Store</span>
              <span className="mono">@coder_store_bot →</span>
            </a>
            <a className="cf-link" href="https://t.me/coder_channel" target="_blank" rel="noreferrer">
              <span className="display cf-link-name">CODER Channel</span>
              <span className="mono">@coder_channel →</span>
            </a>
          </aside>
        </div>
      </div>
    </section>
  )
}

function Field(props: {
  label: string
  value: string
  onChange: (v: string) => void
  onBlur: () => void
  error?: string
  placeholder?: string
  textarea?: boolean
}) {
  const { label, value, onChange, onBlur, error, placeholder, textarea } = props
  return (
    <label className={`ff ${error ? 'has-err' : ''} ${value ? 'has-val' : ''}`}>
      <div className="mono ff-lbl">
        <span>{label}</span>
        {error && <span className="ff-err">— {error}</span>}
      </div>
      {textarea ? (
        <textarea
          className="ff-input"
          rows={4}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          placeholder={placeholder}
        />
      ) : (
        <input
          className="ff-input"
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          placeholder={placeholder}
        />
      )}
      <span className="ff-line" aria-hidden />
    </label>
  )
}
