const items = [
  { icon: 'fa-heart-handshake', title: 'Atendimento Humanizado', desc: 'Você fala com pessoas reais que se importam com a sua viagem tanto quanto você.', delay: 'd1' },
  { icon: 'fa-sliders', title: 'Planejamento Personalizado', desc: 'Cada roteiro é único. Criamos sua viagem do zero, respeitando seus sonhos e orçamento.', delay: 'd2' },
  { icon: 'fa-bolt', title: 'Suporte Rápido', desc: 'Resposta ágil no WhatsApp antes, durante e após a viagem. Você nunca está sozinho.', delay: 'd3' },
  { icon: 'fa-lock', title: 'Segurança em Cada Etapa', desc: 'Trabalhamos com fornecedores certificados e confiáveis para garantir a sua proteção.', delay: 'd1' },
  { icon: 'fa-credit-card', title: 'Parcelamento Facilitado', desc: 'Condições especiais para que o sonho da viagem caiba no seu planejamento financeiro.', delay: 'd2' },
  { icon: 'fa-comments', title: 'Consultoria Completa', desc: 'Orientamos em documentos, vistos, vacinas e tudo que você precisa saber antes de embarcar.', delay: 'd3' },
]

export default function WhyNavi() {
  return (
    <section id="why" className="section">
      <div className="container why-inner">
        <div className="why-header">
          <span className="label">Nossos diferenciais</span>
          <h2 className="heading-lg">
            Por que escolher a <em className="text-italic">NAVI?</em>
          </h2>
          <p className="text-body" style={{ maxWidth: 520, margin: '16px auto 0' }}>
            Mais de uma década cuidando de histórias que começam com uma passagem e terminam com memórias inesquecíveis.
          </p>
        </div>
        <div className="why-grid">
          {items.map(item => (
            <div key={item.title} className={`why-card reveal ${item.delay}`}>
              <div className="why-icon"><i className={`fas ${item.icon}`} /></div>
              <div className="why-title">{item.title}</div>
              <p className="why-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
