import { useEffect, useState } from 'react'
import './nav.css'

// small nav; tucks into a sheet on mobile.
export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="nav-inner container">
        <a href="#top" className="nav-mark" aria-label="MIVA — наверх" onClick={close}>
          <span className="mark-glyph">M</span>
          <span className="mark-word">miva / void</span>
        </a>

        <nav className="nav-links" aria-label="Основное меню">
          <a href="#ecosystem" className="link-ul">экосистема</a>
          <a href="#products" className="link-ul">продукты</a>
          <a href="#services" className="link-ul">что делаем</a>
          <a href="#approach" className="link-ul">подход</a>
          <a href="#contact" className="link-ul">связаться</a>
        </nav>

        <a href="#contact" className="nav-cta">Написать</a>

        <button
          className={`nav-burger ${open ? 'is-open' : ''}`}
          aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      <div className={`nav-sheet ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <a href="#ecosystem" onClick={close}>экосистема</a>
        <a href="#products" onClick={close}>продукты</a>
        <a href="#services" onClick={close}>что делаем</a>
        <a href="#approach" onClick={close}>подход</a>
        <a href="#why" onClick={close}>почему coder</a>
        <a href="#contact" onClick={close}>связаться</a>
      </div>
    </header>
  )
}
