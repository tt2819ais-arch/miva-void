import { useEffect, useState } from 'react'
import './terminal.css'

type Line = { kind: 'cmd' | 'out' | 'ok' | 'warn'; text: string; delay?: number }

const SCRIPT: Line[] = [
  { kind: 'cmd', text: 'whoami', delay: 400 },
  { kind: 'out', text: 'miva :: systems by coder' },
  { kind: 'cmd', text: 'cat ./services.json', delay: 700 },
  { kind: 'out', text: '{' },
  { kind: 'out', text: '  "dev": ["telegram_bots", "web_apps", "pipelines"],' },
  { kind: 'out', text: '  "stack": ["ts", "python", "rust", "go"],' },
  { kind: 'out', text: '  "delivery": "7 — 30 days",' },
  { kind: 'out', text: '  "support": "24/7"' },
  { kind: 'out', text: '}' },
  { kind: 'cmd', text: 'deploy --target prod', delay: 900 },
  { kind: 'ok',  text: '[OK] build complete — 1.2s' },
  { kind: 'ok',  text: '[OK] pushed · live · green' },
  { kind: 'cmd', text: '_', delay: 600 },
]

// very lightweight typewriter; replays on loop.
export default function Terminal() {
  const [rendered, setRendered] = useState<Line[]>([])
  const [typing, setTyping] = useState('')

  useEffect(() => {
    let cancelled = false

    const run = async () => {
      while (!cancelled) {
        setRendered([])
        setTyping('')
        for (let i = 0; i < SCRIPT.length; i++) {
          const line = SCRIPT[i]
          if (cancelled) return
          if (line.delay) await sleep(line.delay)
          if (line.kind === 'cmd') {
            for (let c = 0; c <= line.text.length; c++) {
              if (cancelled) return
              setTyping(line.text.slice(0, c))
              await sleep(35 + Math.random() * 50)
            }
            setRendered((r) => [...r, line])
            setTyping('')
          } else {
            await sleep(80)
            setRendered((r) => [...r, line])
          }
        }
        await sleep(2400)
      }
    }

    run()
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <div className="term" aria-hidden>
      <div className="term-bar">
        <span className="term-dot" />
        <span className="term-dot" />
        <span className="term-dot" />
        <span className="term-title">miva@systems ~ /run</span>
      </div>
      <div className="term-body mono">
        {rendered.map((l, i) => (
          <div key={i} className={`term-line term-${l.kind}`}>
            {l.kind === 'cmd' ? <span className="term-prompt">$</span> : null}
            <span>{l.text}</span>
          </div>
        ))}
        {typing !== '' && (
          <div className="term-line term-cmd">
            <span className="term-prompt">$</span>
            <span>
              {typing}
              <span className="term-caret" />
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))
