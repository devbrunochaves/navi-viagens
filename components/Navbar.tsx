'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav id="navbar" className={`${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
      <div className="container nav-inner">
        <Link href="/" className="nav-logo">
          {/* CSS filter inverts to white on dark bg, removes on scrolled */}
          <img src="/logo-preta.png" alt="NAVI Viagens" />
        </Link>

        <ul className="nav-links">
          <li><a href="/#services" onClick={closeMenu}>Serviços</a></li>
          <li><a href="/#destinations" onClick={closeMenu}>Destinos</a></li>
          <li><a href="/#experience" onClick={closeMenu}>Experiências</a></li>
          <li><a href="/#why" onClick={closeMenu}>Por que a NAVI</a></li>
          <li><a href="/#testimonials" onClick={closeMenu}>Depoimentos</a></li>
          <li><Link href="/blog" onClick={closeMenu}>Blog</Link></li>
          <li><Link href="/cursos" onClick={closeMenu}>Cursos</Link></li>
        </ul>

        <div className="nav-cta">
          <a
            href="https://wa.me/5511999999999"
            className="nav-wa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-whatsapp" /> WhatsApp
          </a>
          <a href="/#cta" className="btn btn-primary">Planejar viagem</a>
        </div>

        <div className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </div>
      </div>
    </nav>
  )
}
