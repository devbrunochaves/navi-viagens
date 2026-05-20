'use client'

import { useEffect, useRef } from 'react'

function animateCounter(el: HTMLElement, target: number, duration = 1800) {
  const start = performance.now()
  const update = (now: number) => {
    const elapsed = now - start
    const progress = Math.min(elapsed / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    el.textContent = Math.round(eased * target).toLocaleString('pt-BR')
    if (progress < 1) requestAnimationFrame(update)
  }
  requestAnimationFrame(update)
}

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            section.querySelectorAll<HTMLElement>('.counter').forEach(c => {
              animateCounter(c, +(c.dataset.target ?? 0))
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 }
    )
    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="stats" ref={sectionRef}>
      <div className="container">
        <div className="stats-grid">
          <div className="stat-item reveal d1">
            <div className="stat-icon"><i className="fas fa-users" /></div>
            <div className="stat-number">
              <span className="counter" data-target="1200">0</span>+
            </div>
            <div className="stat-label">Clientes atendidos</div>
          </div>
          <div className="stat-item reveal d2">
            <div className="stat-icon"><i className="fas fa-plane-departure" /></div>
            <div className="stat-number">
              <span className="counter" data-target="3500">0</span>+
            </div>
            <div className="stat-label">Viagens realizadas</div>
          </div>
          <div className="stat-item reveal d3">
            <div className="stat-icon"><i className="fas fa-headset" /></div>
            <div className="stat-number">
              24<span style={{ fontSize: '1.2rem' }}>/7</span>
            </div>
            <div className="stat-label">Atendimento personalizado</div>
          </div>
          <div className="stat-item reveal d4">
            <div className="stat-icon"><i className="fas fa-star" /></div>
            <div className="stat-number">
              <span className="counter" data-target="98">0</span>%
            </div>
            <div className="stat-label">Satisfação dos clientes</div>
          </div>
        </div>
      </div>
    </section>
  )
}
