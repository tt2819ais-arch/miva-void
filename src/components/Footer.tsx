import './footer.css'

export default function Footer() {
  const y = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="footer-super display" aria-hidden>
        <span>M&nbsp;I&nbsp;V&nbsp;A</span>
        <span className="footer-super-2">· VOID ·</span>
        <span>M&nbsp;I&nbsp;V&nbsp;A</span>
      </div>

      <div className="container footer-inner">
        <div className="footer-top">
          <div className="footer-col footer-col--brand">
            <div className="footer-mark">
              <span className="mark-glyph display">M</span>
              <span className="mono">M&nbsp;I&nbsp;V&nbsp;A &nbsp;/&nbsp; VOID</span>
            </div>
            <p className="footer-tag">
              Coder — пространство кодера. Инструменты, проекты и решения
              для тех, кто создаёт и зарабатывает в digital.
            </p>
            <div className="footer-live mono">
              <span className="footer-live-dot" /> live · статус зелёный
            </div>
          </div>

          <div className="footer-col">
            <div className="eyebrow">Экосистема</div>
            <ul>
              <li><a href="#ecosystem">M I V A Systems</a></li>
              <li><a href="#ecosystem">CODER Market</a></li>
              <li><a href="#products">M I V A Studio</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <div className="eyebrow">Каналы</div>
            <ul>
              <li><a href="https://t.me/coder_channel" target="_blank" rel="noreferrer">@coder_channel</a></li>
              <li><a href="https://t.me/coder_store_bot" target="_blank" rel="noreferrer">@coder_store_bot</a></li>
              <li><a href="https://t.me/miva_studio" target="_blank" rel="noreferrer">@miva_studio</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <div className="eyebrow">Навигация</div>
            <ul>
              <li><a href="#cases">Кейсы</a></li>
              <li><a href="#calc">Калькулятор</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#contact">Связаться</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bot">
          <span className="mono">© {y} · M I V A / CODER</span>
          <span className="mono">код. запуск. результат.</span>
          <a href="#top" className="mono link-ul">наверх ↑</a>
        </div>
      </div>
    </footer>
  )
}
