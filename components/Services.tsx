const services = [
  { icon: 'fa-plane', title: 'Passagens Aéreas', desc: 'Nacionais e internacionais com as melhores tarifas e flexibilidade de rotas.' },
  { icon: 'fa-hotel', title: 'Hospedagem Ideal', desc: 'Hotéis boutique, resorts e pousadas selecionados para cada perfil de viajante.' },
  { icon: 'fa-car', title: 'Aluguel de Carros', desc: 'Locação com as melhores coberturas e suporte em qualquer destino do mundo.' },
  { icon: 'fa-shield-halved', title: 'Seguro Viagem', desc: 'Proteção completa para você viajar com total tranquilidade e segurança.' },
  { icon: 'fa-ship', title: 'Cruzeiros', desc: 'Roteiros marítimos nacionais e internacionais com planejamento completo.' },
  { icon: 'fa-suitcase-rolling', title: 'Pacotes Personalizados', desc: 'Roteiros sob medida criados especialmente para o seu sonho de viagem.' },
  { icon: 'fa-passport', title: 'Assessoria de Passaporte', desc: 'Orientação completa para emissão e renovação de documentos de viagem.' },
  { icon: 'fa-landmark', title: 'Visto Americano', desc: 'Assessoria especializada para agendar, preparar e obter o seu visto.' },
]

const delays = ['d1', 'd2', 'd3', 'd4', 'd1', 'd2', 'd3', 'd4']

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-header">
          <span className="label reveal">O que fazemos</span>
          <h2 className="heading-lg reveal d1">
            Tudo que sua viagem<br /><em className="text-italic">precisa em um só lugar.</em>
          </h2>
          <p className="text-body reveal d2" style={{ marginTop: 16 }}>
            Da passagem ao seguro viagem, a NAVI cuida de cada detalhe com atenção e cuidado.
          </p>
        </div>
        <div className="services-grid">
          {services.map((s, i) => (
            <div key={s.title} className={`service-card reveal ${delays[i]}`}>
              <div className="service-icon"><i className={`fas ${s.icon}`} /></div>
              <div className="service-title">{s.title}</div>
              <p className="service-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
