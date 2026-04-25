import './marquee.css'

// thin scrolling ribbon between sections — decorative text loop.
export default function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items]
  return (
    <div className="mq" aria-hidden>
      <div className="mq-track">
        {doubled.map((t, i) => (
          <span className="mq-item" key={i}>
            <span className="display mq-text">{t}</span>
            <span className="mq-dot">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
