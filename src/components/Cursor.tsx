import { useEffect, useRef, useState } from 'react'
import './cursor.css'

// lightweight cursor follower. hidden on touch. skips if reduced-motion.
const isDisabledEnvironment = () => {
  if (typeof window === 'undefined') return true
  return (
    window.matchMedia('(pointer: coarse)').matches ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null)
  const pos = useRef({ x: -100, y: -100 })
  const target = useRef({ x: -100, y: -100 })
  const [enabled] = useState(() => !isDisabledEnvironment())
  const [hover, setHover] = useState(false)

  useEffect(() => {
    if (!enabled) return

    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX
      target.current.y = e.clientY
      const el = e.target as HTMLElement | null
      const interactive = !!el?.closest('a, button, [data-cursor="hover"]')
      setHover(interactive)
    }

    let raf = 0
    const tick = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.18
      pos.current.y += (target.current.y - pos.current.y) * 0.18
      const el = ref.current
      if (el) {
        el.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    window.addEventListener('mousemove', onMove)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <>
      <div
        ref={ref}
        className={`cursor ${hover ? 'is-hover' : ''}`}
        aria-hidden
      />
    </>
  )
}
