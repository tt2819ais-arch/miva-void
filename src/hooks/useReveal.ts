import { useEffect, useRef, useState } from 'react'

// tiny intersection-observer hook for reveal-on-scroll. keeps the component tree clean.
export function useReveal<T extends HTMLElement = HTMLDivElement>(threshold = 0.18) {
  const ref = useRef<T | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true)
            io.unobserve(e.target)
          }
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' },
    )

    io.observe(node)
    return () => io.disconnect()
  }, [threshold])

  return { ref, visible }
}
