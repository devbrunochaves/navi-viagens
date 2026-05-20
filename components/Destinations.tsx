const destinations = [
  {
    name: 'Paris',
    flag: 'Europa · França',
    desc: 'A cidade do amor. Arte, gastronomia, moda e a Torre Eiffel ao entardecer.',
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1000&q=80&auto=format&fit=crop',
    waText: 'Quero+saber+sobre+Paris!',
    delay: '',
  },
  {
    name: 'Orlando',
    flag: 'América · EUA',
    desc: 'Disney, Universal, SeaWorld e muito mais para toda a família.',
    image: 'https://images.unsplash.com/photo-1514214246283-d8a07a8fb8ca?w=700&q=80&auto=format&fit=crop',
    waText: 'Quero+saber+sobre+Orlando!',
    delay: 'd1',
  },
  {
    name: 'Maldivas',
    flag: 'Oceano Índico',
    desc: 'Bangalôs sobre o mar e águas cristalinas para o casal mais apaixonado.',
    image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=700&q=80&auto=format&fit=crop',
    waText: 'Quero+saber+sobre+Maldivas!',
    delay: 'd2',
  },
  {
    name: 'Londres',
    flag: 'Europa · UK',
    desc: 'Cultura, história e modernidade na capital britânica.',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=900&q=80&auto=format&fit=crop',
    waText: 'Quero+saber+sobre+Londres!',
    delay: 'd1',
  },
  {
    name: 'Nordeste',
    flag: 'Brasil · Nordeste',
    desc: 'Praias paradisíacas, culinária única e o acolhimento do povo nordestino.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80&auto=format&fit=crop',
    waText: 'Quero+saber+sobre+Nordeste!',
    delay: 'd2',
  },
  {
    name: 'Chile',
    flag: 'América do Sul',
    desc: 'Patagônia, deserto do Atacama e vinhedos com paisagens surreais.',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=700&q=80&auto=format&fit=crop',
    waText: 'Quero+saber+sobre+Chile!',
    delay: 'd3',
  },
  {
    name: 'Argentina',
    flag: 'América do Sul',
    desc: 'Buenos Aires, Bariloche e as Cataratas do Iguaçu em um só roteiro.',
    image: 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=700&q=80&auto=format&fit=crop',
    waText: 'Quero+saber+sobre+Argentina!',
    delay: 'd4',
  },
  {
    name: 'Gramado',
    flag: 'Brasil · RS',
    desc: 'Charme europeu, gastronomia e chocolates na Serra Gaúcha.',
    image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=700&q=80&auto=format&fit=crop',
    waText: 'Quero+saber+sobre+Gramado!',
    delay: 'd5',
  },
]

export default function Destinations() {
  return (
    <section id="destinations" className="section">
      <div className="container">
        <div className="section-header">
          <span className="label reveal">Destinos em destaque</span>
          <h2 className="heading-lg reveal d1">
            O mundo está <em className="text-italic">esperando por você.</em>
          </h2>
          <p className="text-body reveal d2" style={{ marginTop: 16 }}>
            Dos sonhos mais clássicos às aventuras mais inusitadas, a NAVI leva você até lá.
          </p>
        </div>
        <div className="destinations-grid">
          {destinations.map(d => (
            <div key={d.name} className={`dest-card reveal ${d.delay}`}>
              <img className="dest-img" src={d.image} alt={d.name} loading="lazy" />
              <div className="dest-overlay" />
              <div className="dest-content">
                <div className="dest-flag">{d.flag}</div>
                <div className="dest-name">{d.name}</div>
                <p className="dest-desc">{d.desc}</p>
                <a
                  href={`https://wa.me/5511999999999?text=${d.waText}`}
                  className="dest-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Solicitar orçamento <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
