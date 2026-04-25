import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './splash.css'

type Props = { onEnter: () => void }

const CHANNELS = ['0x01', '0x02', '0x03', '0x04', '0x05', '0x06']

export default function Splash({ onEnter }: Props) {
  const [leaving, setLeaving] = useState(false)
  const [clock, setClock] = useState(() => fmt(new Date()))
  const [frame, setFrame] = useState(0)

  useEffect(() => {
    const i = setInterval(() => {
      setClock(fmt(new Date()))
      setFrame((f) => (f + 1) % 60)
    }, 1000)
    return () => clearInterval(i)
  }, [])

  const handleEnter = () => {
    if (leaving) return
    setLeaving(true)
    setTimeout(onEnter, 650)
  }

  // allow keyboard enter
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') handleEnter()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [leaving])

  return (
    <AnimatePresence>
      {!leaving && (
        <motion.div
          className="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] } }}
          role="dialog"
          aria-label="Вход на сайт"
        >
          <div className="splash-grid" aria-hidden />
          <div className="splash-grain" aria-hidden />

          <div className="splash-corners" aria-hidden>
            <span className="sc sc-tl" />
            <span className="sc sc-tr" />
            <span className="sc sc-bl" />
            <span className="sc sc-br" />
          </div>

          <header className="splash-head">
            <span className="splash-mark mono">M · I · V · A / SYSTEMS</span>
            <span className="splash-clock mono">{clock}</span>
          </header>

          <aside className="splash-side splash-side--left mono" aria-hidden>
            <span>LINK · OK</span>
            <span>FRAME · {String(frame).padStart(2, '0')}</span>
            <span>CH · {CHANNELS[frame % CHANNELS.length]}</span>
          </aside>
          <aside className="splash-side splash-side--right mono" aria-hidden>
            <span>N° 001</span>
            <span>MMXXV</span>
            <span>SECURE</span>
          </aside>

          <div className="splash-center">
            <motion.div
              className="splash-eyebrow mono"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              § подключение установлено
            </motion.div>

            <motion.h1
              className="splash-title display"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <span>M</span>
              <span>I</span>
              <span>V</span>
              <span>A</span>
            </motion.h1>

            <motion.p
              className="splash-sub mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              digital systems · by coder
            </motion.p>

            <motion.button
              className="splash-btn mono"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              onClick={handleEnter}
              type="button"
            >
              <span className="splash-btn-inner">
                <span className="splash-btn-dot" />
                начать
              </span>
              <span className="splash-btn-hint">нажми enter</span>
            </motion.button>
          </div>

          <footer className="splash-foot mono">
            <span>load · 100%</span>
            <span className="splash-line" />
            <span>ready</span>
          </footer>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function fmt(d: Date) {
  const p = (n: number) => String(n).padStart(2, '0')
  return `${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}`
}
