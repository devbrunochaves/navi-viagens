import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingElements from '@/components/FloatingElements'
import CourseFAQ from '@/components/CourseFAQ'

export const metadata: Metadata = {
  title: 'Cursos | NAVI Viagens',
  description: 'Aprenda a viajar muito gastando pouco com o método Destravando Milhas. Acesso vitalício, garantia de 7 dias.',
}

const destinations = [
  {
    city: 'Recife',
    country: 'Brasil',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80&auto=format&fit=crop',
  },
  {
    city: 'Nova York',
    country: 'EUA',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=500&q=80&auto=format&fit=crop',
  },
  {
    city: 'Fort Lauderdale',
    country: 'Flórida · EUA',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&q=80&auto=format&fit=crop',
  },
  {
    city: 'Buenos Aires',
    country: 'Argentina',
    image: 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=500&q=80&auto=format&fit=crop',
  },
  {
    city: 'Casa Pueblo',
    country: 'Uruguai',
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=500&q=80&auto=format&fit=crop',
  },
]

const semDM = [
  { title: 'Gastos altos em passagens', desc: 'Você continua pagando preço cheio por algo que poderia custar muito menos.' },
  { title: 'Desinformação', desc: 'Sem saber as regras do jogo, você acumula menos milhas ou perde as que já tem.' },
  { title: 'Perda de benefícios', desc: 'Cartões e programas oferecem vantagens incríveis que passam completamente batido.' },
  { title: 'Oportunidades perdidas', desc: 'Promoções relâmpago e transferências vantajosas ficam pelo caminho por falta de estratégia.' },
  { title: 'Erros comuns', desc: 'Decisões equivocadas que fazem você perder milhas valiosas sem perceber.' },
]

const comDM = [
  { title: 'Economia Real', desc: 'Aprenda a pagar menos — ou nada — em passagens usando milhas acumuladas com inteligência.' },
  { title: 'Estratégias comprovadas', desc: 'Técnicas testadas para acumular milhas com mais rapidez e eficiência no dia a dia.' },
  { title: 'Benefícios exclusivos', desc: 'Acesse recompensas de cartões e programas que você provavelmente nunca soube que existiam.' },
  { title: 'Aproveitamento total de promoções', desc: 'Identifique e aproveite as melhores oportunidades para multiplicar suas milhas.' },
  { title: 'Suporte e direcionamento', desc: 'Evite erros comuns, tome decisões com confiança e nunca mais perca milhas por desinformação.' },
]

export default function CursosPage() {
  return (
    <>
      <FloatingElements />
      <Navbar />
      <main>

        {/* ─── HERO ─── */}
        <section className="curso-hero">
          <div className="container">
            <div className="curso-hero-inner">

              <div>
                <div className="curso-hero-tag">
                  <i className="fas fa-plane" /> Destravando Milhas
                </div>
                <h1 className="curso-hero-title">
                  O segredo para viajar <span>muito</span>,<br />gastando pouco.
                </h1>
                <p className="curso-hero-sub">
                  Chega de achar que viajar é caro. Com o método Destravando Milhas você aprende a acumular, organizar e usar milhas para ter experiências incríveis — mesmo começando do zero.
                </p>
                <div className="curso-hero-cta">
                  <a href="#preco" className="btn btn-curso">
                    <i className="fas fa-rocket" /> Quero viajar muito mais!
                  </a>
                  <div className="curso-hero-trust">
                    <div className="curso-trust-item"><i className="fas fa-check" /> Acesso vitalício</div>
                    <div className="curso-trust-item"><i className="fas fa-check" /> 7 dias de garantia</div>
                    <div className="curso-trust-item"><i className="fas fa-check" /> Suporte exclusivo</div>
                  </div>
                </div>
              </div>

              <div className="curso-hero-visual">
                <img
                  className="curso-hero-img"
                  src="https://images.unsplash.com/photo-1488085061387-422e29b40080?w=800&q=80&auto=format&fit=crop"
                  alt="Viajar o mundo com milhas"
                />
                <div className="curso-hero-float">
                  <div className="curso-float-icon"><i className="fas fa-users" /></div>
                  <div className="curso-float-text">
                    <strong>+12.000 alunos</strong>
                    <span>já estão viajando mais</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ─── MOMENTS ─── */}
        <section className="curso-moments">
          <div className="container">
            <h2 className="curso-moments-title reveal">
              Esses momentos <em>te esperam...</em>
            </h2>
            <div className="curso-moments-grid">
              {destinations.map((d) => (
                <div key={d.city} className="curso-moment-card reveal">
                  <img src={d.image} alt={d.city} loading="lazy" />
                  <div className="curso-moment-overlay" />
                  <div className="curso-moment-info">
                    <span className="curso-moment-city">{d.city}</span>
                    <span className="curso-moment-country">{d.country}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── NO BLACK CARD ─── */}
        <section className="curso-nocard">
          <div className="container">
            <div className="curso-nocard-inner">

              <div className="curso-nocard-visual reveal-left">
                <div className="curso-card-mockup">
                  <i className="fas fa-credit-card" />
                  <span>Qualquer cartão funciona</span>
                  <div className="curso-nocard-badge">SEM<br />BLACK<br />CARD</div>
                </div>
              </div>

              <div className="reveal-right">
                <span className="label">Mito quebrado</span>
                <h2 className="heading-lg">
                  Nem precisa de cartão black.<br />
                  <em className="text-italic">Você só precisa de estratégia certa.</em>
                </h2>
                <p className="text-body" style={{ marginTop: 16 }}>
                  Com o método Destravando Milhas você aprende a acumular milhas com os cartões do dia a dia para viajar muito mais, gastando muito menos.
                </p>
                <ul className="curso-nocard-bullets">
                  <li><i className="fas fa-check-circle" /> Cartões comuns já são suficientes para acumular milhas</li>
                  <li><i className="fas fa-check-circle" /> Aprenda a escolher o cartão certo para o seu perfil</li>
                  <li><i className="fas fa-check-circle" /> Transforme os gastos do cotidiano em passagens aéreas</li>
                  <li><i className="fas fa-check-circle" /> Maximize cada ponto com as melhores transferências</li>
                </ul>
                <a href="#preco" className="btn btn-curso">Quero começar agora</a>
              </div>

            </div>
          </div>
        </section>

        {/* ─── WHY ─── */}
        <section className="curso-why">
          <div className="container">
            <div className="curso-why-header">
              <span className="label reveal">Entenda a diferença</span>
              <h2 className="curso-why-title reveal d1">
                Por que o <span>Destravando Milhas</span><br />é para você?
              </h2>
            </div>
            <div className="curso-why-grid">

              {/* Sem o DM */}
              <div className="curso-why-col sem reveal-left">
                <div className="curso-why-col-title">
                  <i className="fas fa-times-circle" /> Sem o DM
                </div>
                <ul className="curso-why-items">
                  {semDM.map(item => (
                    <li key={item.title} className="curso-why-item">
                      <div className="curso-why-item-icon"><i className="fas fa-times" /></div>
                      <div className="curso-why-item-text">
                        <strong>{item.title}</strong>
                        <p>{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Com o DM */}
              <div className="curso-why-col com reveal-right">
                <div className="curso-why-col-title">
                  <i className="fas fa-check-circle" /> Com o DM
                </div>
                <ul className="curso-why-items">
                  {comDM.map(item => (
                    <li key={item.title} className="curso-why-item">
                      <div className="curso-why-item-icon"><i className="fas fa-check" /></div>
                      <div className="curso-why-item-text">
                        <strong>{item.title}</strong>
                        <p>{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: 36 }}>
                  <a
                    href="#preco"
                    className="btn btn-curso"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    <i className="fas fa-rocket" /> Quero fazer viagens inesquecíveis
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ─── STORY ─── */}
        <section className="curso-story">
          <div className="container">
            <div className="curso-story-inner">

              <div className="reveal-left">
                <span className="label">Nossa história</span>
                <h2 className="heading-lg">
                  Esqueça tudo o que já te<br /><em className="text-italic">falaram sobre viagens!</em>
                </h2>
                <p style={{ marginTop: 20 }}>
                  A maioria das pessoas acredita que para viajar bem é preciso ter muito dinheiro, usar cartão black ou esperar anos acumulando milhas. Isso é um mito.
                </p>
                <p>
                  O Destravando Milhas nasceu da experiência real de quem viajou o mundo usando pontos e milhas — sem gastar uma fortuna. Com o método certo, qualquer pessoa consegue acumular milhas suficientes para voar em menos de 1 ano, mesmo começando do zero.
                </p>
                <p>
                  Hoje, mais de 12.000 alunos já transformaram a forma como viajam, trocando dívidas por passagens e sonhos por realidade.
                </p>
                <a href="#preco" className="btn btn-curso">Quero viajar economizando!</a>
              </div>

              <div className="curso-story-img reveal-right">
                <img
                  src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80&auto=format&fit=crop"
                  alt="Viagem dos sonhos"
                  loading="lazy"
                />
              </div>

            </div>

            {/* Stats row */}
            <div className="curso-story-stats">
              {[
                { value: '+12.000', label: 'Alunos satisfeitos' },
                { value: '98%', label: 'Taxa de satisfação' },
                { value: '+50', label: 'Destinos ensinados' },
                { value: '7 dias', label: 'Garantia total' },
              ].map(s => (
                <div key={s.label} className="curso-story-stat reveal">
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── GUARANTEE ─── */}
        <section className="curso-guarantee">
          <div className="container">
            <div className="curso-guarantee-inner reveal">
              <div className="curso-guarantee-badge">
                <span className="dias">7</span>
                <span className="dias-label">dias de</span>
                <span className="garantia">garantia</span>
              </div>
              <div className="curso-guarantee-text">
                <h2>Risco zero para você.</h2>
                <p>
                  Se por algum motivo você sentir que o Destravando Milhas não é para você, basta enviar um e-mail em até 7 dias após a compra e faremos o reembolso completo. Sem perguntas, sem burocracia. Sua satisfação é nossa prioridade.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── PRICING ─── */}
        <section id="preco" className="curso-pricing">
          <div className="container">
            <div className="curso-pricing-inner">

              <div className="reveal-left">
                <span className="label">Investimento</span>
                <h2 className="heading-lg">
                  Quanto custa viajar<br /><em className="text-italic">mais e pagar menos?</em>
                </h2>
                <p className="text-body" style={{ marginTop: 16 }}>
                  Muito menos do que uma única passagem. Com o Destravando Milhas, você aprende de uma vez para viajar melhor pelo resto da vida.
                </p>
                <ul className="curso-pricing-includes">
                  <li><i className="fas fa-check-circle" /> Acesso vitalício ao curso completo</li>
                  <li><i className="fas fa-check-circle" /> Atualizações gratuitas para sempre</li>
                  <li><i className="fas fa-check-circle" /> Comunidade exclusiva de alunos NAVI</li>
                  <li><i className="fas fa-check-circle" /> Planilhas e materiais bônus</li>
                  <li><i className="fas fa-check-circle" /> Suporte dedicado</li>
                  <li><i className="fas fa-check-circle" /> 7 dias de garantia total</li>
                </ul>
              </div>

              <div className="curso-price-card reveal-right">
                <div className="curso-price-exclusive">🎉 Oferta exclusiva</div>
                <div className="curso-price-label">Acesso vitalício por apenas</div>
                <div className="curso-price-from">De R$197,00</div>
                <div className="curso-price-main">
                  <span className="curso-price-currency">R$</span>
                  <span className="curso-price-value">29</span>
                  <span className="curso-price-cents">,08</span>
                </div>
                <div className="curso-price-period">por mês · ou R$97 à vista</div>
                <div className="curso-price-divider" />
                <ul className="curso-price-features">
                  <li><i className="fas fa-star" /> Acesso imediato após o pagamento</li>
                  <li><i className="fas fa-star" /> Módulos em vídeo + materiais em PDF</li>
                  <li><i className="fas fa-star" /> Bônus exclusivos NAVI + DM</li>
                </ul>
                <a
                  href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Quero%20me%20matricular%20no%20Destravando%20Milhas."
                  className="btn btn-curso curso-price-cta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-rocket" /> Garantir minha vaga!
                </a>
                <div className="curso-price-safe">
                  <i className="fas fa-shield-halved" />
                  Pagamento 100% seguro · 7 dias de garantia
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section className="curso-faq">
          <div className="container">
            <div className="curso-faq-header">
              <span className="label reveal">Dúvidas frequentes</span>
              <h2 className="heading-lg reveal d1">Perguntas e respostas</h2>
            </div>
            <CourseFAQ />
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
