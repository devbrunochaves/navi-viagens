'use client'

import { useEffect, useRef } from 'react'

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!bgRef.current) return
      const scrollY = window.scrollY
      if (scrollY < window.innerHeight) {
        bgRef.current.style.transform = `scale(1) translateY(${scrollY * 0.3}px)`
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="hero">
      <div className="hero-bg" ref={bgRef} />
      <div className="hero-overlay" />
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <i className="fas fa-star" />
            Agência de Viagens
          </div>
          <h1 className="hero-title">
            Você vive<br /><em>a experiência.</em><br />
            A NAVI cuida do resto.
          </h1>
          <p className="hero-sub">
            Pacotes personalizados, passagens, hospedagem e suporte completo para sua viagem acontecer com tranquilidade e sofisticação.
          </p>
          <div className="hero-actions">
            <a href="#cta" className="btn btn-primary">
              <i className="fas fa-paper-plane" />
              Planejar minha viagem
            </a>
            <a
              href="https://wa.me/5511999999999"
              className="btn btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-whatsapp" />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="hero-float-cards">
        <div className="float-card">
          <i className="fas fa-shield-halved" />
          <div className="float-card-text">
            <strong>100% Seguro</strong>
            Suporte antes, durante e após
          </div>
        </div>
        <div className="float-card">
          <i className="fas fa-globe-americas" />
          <div className="float-card-text">
            <strong>+50 Destinos</strong>
            Nacionais e internacionais
          </div>
        </div>
        <div className="float-card">
          <i className="fas fa-credit-card" />
          <div className="float-card-text">
            <strong>Parcelamento</strong>
            Facilidades de pagamento
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <div className="scroll-line" />
        <span className="scroll-text">Scroll</span>
      </div>
    </section>
  )
}
