'use client'

import { useEffect } from 'react'

export default function FloatingElements() {
  useEffect(() => {
    const progressBar = document.getElementById('progress-bar')
    if (!progressBar) return

    const handleScroll = () => {
      const scrolled =
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      progressBar.style.width = scrolled + '%'
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div id="progress-bar" />
      <a
        href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Quero%20planejar%20minha%20viagem%20com%20a%20NAVI."
        className="wa-float"
        target="_blank"
        rel="noopener noreferrer"
        title="Falar no WhatsApp"
      >
        <i className="fab fa-whatsapp" />
      </a>
    </>
  )
}
