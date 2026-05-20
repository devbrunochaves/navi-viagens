import type { Metadata } from 'next'
import './globals.css'
import ScrollRevealInit from '@/components/ScrollRevealInit'

export const metadata: Metadata = {
  title: 'NAVI | Experiências em Viagens',
  description: 'Agência boutique de viagens. Pacotes personalizados, passagens, hospedagem e suporte completo para sua viagem acontecer com tranquilidade e sofisticação.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <body>
        <ScrollRevealInit />
        {children}
      </body>
    </html>
  )
}
