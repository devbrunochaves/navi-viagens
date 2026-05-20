'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollRevealInit() {
  const pathname = usePathname()

  useEffect(() => {
    // Pequeno delay para garantir que o DOM da nova rota foi renderizado
    const timer = setTimeout(() => {
      const reveals = document.querySelectorAll<Element>('.reveal, .reveal-left, .reveal-right')

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible')
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
      )

      reveals.forEach(el => observer.observe(el))

      return () => observer.disconnect()
    }, 80)

    return () => clearTimeout(timer)
  }, [pathname]) // re-executa a cada troca de rota

  return null
}
