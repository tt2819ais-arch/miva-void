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
        <a href="#top" className="nav-mark" aria-label="M I V A — наверх" onClick={close}>
          <span className="mark-glyph">M</span>
          <span className="mark-word">M&nbsp;I&nbsp;V&nbsp;A&nbsp;/&nbsp;SYSTEMS</span>
        </a>

        <nav className="nav-links" aria-label="Основное меню">
          <a href="#ecosystem" className="link-ul">экосистема</a>
          <a href="#cases" className="link-ul">кейсы</a>
          <a href="#calc" className="link-ul">калькулятор</a>
          <a href="#faq" className="link-ul">faq</a>
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
        <a href="#cases" onClick={close}>кейсы</a>
        <a href="#services" onClick={close}>что делаем</a>
        <a href="#calc" onClick={close}>калькулятор</a>
        <a href="#testimonials" onClick={close}>отзывы</a>
        <a href="#faq" onClick={close}>faq</a>
        <a href="#contact" onClick={close}>связаться</a>
      </div>
    </header>
  )
}
