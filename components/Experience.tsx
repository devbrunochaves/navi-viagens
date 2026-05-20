const categories = [
  { icon: 'fa-heart', label: 'Lua de mel' },
  { icon: 'fa-users', label: 'Família' },
  { icon: 'fa-mountain', label: 'Aventura' },
  { icon: 'fa-gem', label: 'Luxo' },
  { icon: 'fa-umbrella-beach', label: 'Descanso' },
  { icon: 'fa-castle', label: 'Disney' },
  { icon: 'fa-ship', label: 'Cruzeiros' },
]

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="experience-inner">
          <div className="exp-text reveal-left">
            <span className="label">Viagem personalizada</span>
            <h2 className="heading-lg">
              Cada viagem deve ser tão única quanto <em className="text-italic">quem viaja.</em>
            </h2>
            <p className="text-body" style={{ marginTop: 20, marginBottom: 32 }}>
              Na NAVI, acreditamos que uma viagem vai muito além de passagens e hotéis. É sobre transformar sonhos em memórias reais. Por isso, cada roteiro é pensado especialmente para você.
            </p>
            <div className="exp-cats">
              {categories.map(c => (
                <div key={c.label} className="exp-cat">
                  <i className={`fas ${c.icon}`} /> {c.label}
                </div>
              ))}
            </div>
            <a href="#cta" className="btn btn-ghost">
              <i className="fas fa-arrow-right" /> Criar meu roteiro
            </a>
          </div>

          <div className="exp-grid reveal-right">
            <div className="exp-img">
              <img
                src="https://images.unsplash.com/photo-1522702462649-b88f82cbb0c3?w=800&q=80&auto=format&fit=crop"
                alt="Lua de mel"
                loading="lazy"
              />
              <div className="exp-img-label">Lua de mel</div>
            </div>
            <div className="exp-img">
              <img
                src="https://images.unsplash.com/photo-1440778303588-435521a205bc?w=600&q=80&auto=format&fit=crop"
                alt="Família"
                loading="lazy"
              />
              <div className="exp-img-label">Família</div>
            </div>
            <div className="exp-img">
              <img
                src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80&auto=format&fit=crop"
                alt="Luxo"
                loading="lazy"
              />
              <div className="exp-img-label">Luxo</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
