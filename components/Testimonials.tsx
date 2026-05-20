'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

const testimonials = [
  {
    image: 'https://images.unsplash.com/photo-1522702462649-b88f82cbb0c3?w=600&q=80&auto=format&fit=crop',
    text: 'A NAVI cuidou de cada detalhe da nossa lua de mel nas Maldivas. Desde o transfer até o jantar surpresa no bangalô. Foi perfeito demais.',
    initials: 'CM',
    name: 'Camila & Marco',
    destination: 'Maldivas',
  },
  {
    image: 'https://images.unsplash.com/photo-1547465376-ff9bc41d6e8a?w=600&q=80&auto=format&fit=crop',
    text: 'Levamos as crianças pela primeira vez para a Disney. A NAVI organizou tudo: hotel no parque, ingressos, FastPass. Os meninos ainda falam nisso.',
    initials: 'RS',
    name: 'Família Rodrigues',
    destination: 'Orlando',
  },
  {
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&q=80&auto=format&fit=crop',
    text: 'Paris sempre foi o meu sonho. A NAVI não só realizou, como foi além. Cada restaurante, cada passeio foi escolhido a dedo. Jamais esquecerei.',
    initials: 'JB',
    name: 'João & Beatriz',
    destination: 'Paris',
  },
  {
    image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=600&q=80&auto=format&fit=crop',
    text: 'Nosso cruzeiro pelo Mediterrâneo foi impecável. A NAVI cuidou de tudo e ainda nos surpreendeu com upgrades que não esperávamos.',
    initials: 'AF',
    name: 'Ana Fonseca',
    destination: 'Mediterrâneo',
  },
]

function getSlidesPerView() {
  if (typeof window === 'undefined') return 3
  if (window.innerWidth < 600) return 1
  if (window.innerWidth < 900) return 2
  return 3
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [spv, setSpv] = useState(3)
  const trackRef = useRef<HTMLDivElement>(null)
  const touchStartX = useRef(0)

  const totalPages = Math.ceil(testimonials.length / spv)

  const goToSlide = useCallback(
    (index: number) => {
      const bounded = Math.max(0, Math.min(index, totalPages - 1))
      setCurrentIndex(bounded)
      if (!trackRef.current) return
      const first = trackRef.current.querySelector<HTMLElement>('.test-card')
      if (first) {
        const cardWidth = first.offsetWidth + 24
        trackRef.current.style.transform = `translateX(-${bounded * spv * cardWidth}px)`
      }
    },
    [totalPages, spv]
  )

  useEffect(() => {
    const update = () => {
      setSpv(getSlidesPerView())
      setCurrentIndex(0)
      if (trackRef.current) trackRef.current.style.transform = 'translateX(0)'
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return (
    <section id="testimonials" className="section">
      <div className="container">
        <div className="test-header">
          <span className="label reveal">Depoimentos</span>
          <h2 className="heading-lg reveal d1">
            Histórias que começaram<br /><em className="text-italic">com uma passagem.</em>
          </h2>
          <p className="text-body reveal d2" style={{ marginTop: 16, maxWidth: 500, marginLeft: 'auto', marginRight: 'auto' }}>
            Clientes reais, experiências reais. É o que nos motiva todos os dias.
          </p>
        </div>

        <div className="test-slider reveal">
          <div
            className="test-track"
            ref={trackRef}
            onTouchStart={e => { touchStartX.current = e.touches[0].clientX }}
            onTouchEnd={e => {
              const diff = touchStartX.current - e.changedTouches[0].clientX
              if (Math.abs(diff) > 50) goToSlide(diff > 0 ? currentIndex + 1 : currentIndex - 1)
            }}
          >
            {testimonials.map(t => (
              <div key={t.name} className="test-card">
                <img className="test-image" src={t.image} alt={t.destination} loading="lazy" />
                <div className="test-quote-icon">&ldquo;</div>
                <p className="test-text">{t.text}</p>
                <div className="test-bottom">
                  <div className="test-person">
                    <div className="test-avatar">{t.initials}</div>
                    <div>
                      <div className="test-name">{t.name}</div>
                      <div className="test-dest-tag">
                        <i className="fas fa-map-pin" /> {t.destination}
                      </div>
                    </div>
                  </div>
                  <div className="test-stars">★★★★★</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="test-nav">
          <button className="test-btn" onClick={() => goToSlide(currentIndex - 1)}>
            <i className="fas fa-arrow-left" />
          </button>
          <div className="test-dots">
            {Array.from({ length: totalPages }).map((_, i) => (
              <div
                key={i}
                className={`test-dot${i === currentIndex ? ' active' : ''}`}
                onClick={() => goToSlide(i)}
              />
            ))}
          </div>
          <button className="test-btn" onClick={() => goToSlide(currentIndex + 1)}>
            <i className="fas fa-arrow-right" />
          </button>
        </div>
      </div>
    </section>
  )
}
