import { useEffect, useRef } from 'react'

// attaches a subtle magnetic pull to any element on mouse-move within a radius.
// fine-grained: uses transform on the element directly, no layout thrash.
export function useMagnetic<T extends HTMLElement>(strength = 0.25, radius = 120) {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(pointer: coarse)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let raf = 0
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect()
      const cx = r.left + r.width / 2
      const cy = r.top + r.height / 2
      const dx = e.clientX - cx
      const dy = e.clientY - cy
      const d = Math.hypot(dx, dy)
      if (d < radius) {
        cancelAnimationFrame(raf)
        raf = requestAnimationFrame(() => {
          el.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`
        })
      } else {
        cancelAnimationFrame(raf)
        raf = requestAnimationFrame(() => {
          el.style.transform = 'translate(0, 0)'
        })
      }
    }

    const onLeave = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        el.style.transform = 'translate(0, 0)'
      })
    }

    window.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      window.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(raf)
    }
  }, [strength, radius])

  return ref
}
