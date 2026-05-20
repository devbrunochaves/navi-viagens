'use client'

import { useState } from 'react'

const faqItems = [
  {
    q: 'Preciso ter um cartão de crédito black para começar?',
    a: 'Não! Esse é um dos maiores mitos sobre milhas. Você pode acumular milhas com cartões comuns, sem anuidade alta. No Destravando Milhas, você aprende a escolher os melhores cartões para o seu perfil e rotina de gastos.',
  },
  {
    q: 'Nunca acumulei milhas na vida. Esse curso é pra mim?',
    a: 'Sim, especialmente pra você! O Destravando Milhas foi criado para quem está começando do zero. Todo o conteúdo é apresentado de forma clara e progressiva, sem jargões complicados ou pré-requisitos técnicos.',
  },
  {
    q: 'Em quanto tempo começo a acumular milhas?',
    a: 'Você começa a acumular milhas assim que aplicar as estratégias do módulo 1. Muitos alunos relatam ver resultado já na primeira semana após o início do curso.',
  },
  {
    q: 'As milhas realmente funcionam para viajar pagando menos?',
    a: 'Sim! Com as estratégias certas, é possível emitir passagens nacionais e internacionais usando milhas, reduzindo drasticamente — ou até zerando — o custo da passagem aérea.',
  },
  {
    q: 'Por quanto tempo tenho acesso ao curso?',
    a: 'Seu acesso ao Destravando Milhas é vitalício. Você paga uma vez e acessa para sempre, incluindo todas as atualizações futuras sem custo adicional.',
  },
  {
    q: 'O Destravando Milhas tem suporte?',
    a: 'Sim! Você terá acesso à comunidade exclusiva de alunos e canais de suporte para tirar dúvidas diretamente com a equipe. Você não fica sozinho na jornada.',
  },
  {
    q: 'Além do curso, tem algum bônus?',
    a: 'Sim! Você recebe materiais bônus exclusivos, incluindo planilhas de controle de milhas, guia de cartões recomendados por perfil e acesso à comunidade privada de alunos NAVI.',
  },
]

export default function CourseFAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="curso-faq-list">
      {faqItems.map((item, i) => (
        <div key={i} className={`curso-faq-item${open === i ? ' open' : ''}`}>
          <div
            className="curso-faq-question"
            onClick={() => setOpen(open === i ? null : i)}
          >
            {item.q}
            <i className="fas fa-chevron-down" />
          </div>
          <div className={`curso-faq-answer${open === i ? ' open' : ''}`}>
            <div className="curso-faq-answer-inner">{item.a}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
