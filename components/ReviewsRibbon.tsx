const reviews = [
  { initials: 'CM', name: 'Camila & Marco', destination: 'Maldivas', text: '"A NAVI transformou nossa lua de mel em algo que nunca vamos esquecer. Cada detalhe foi pensado com tanto carinho!"' },
  { initials: 'RS', name: 'Família Rodrigues', destination: 'Orlando, Disney', text: '"Viagem para a Disney com três crianças e tudo saiu perfeito. A organização e o suporte da NAVI foram incríveis."' },
  { initials: 'LP', name: 'Letícia Pereira', destination: 'Nova York', text: '"Conseguiram o visto americano para toda a família em tempo recorde. Atendimento excepcional do início ao fim."' },
  { initials: 'AF', name: 'Ana Fonseca', destination: 'Mediterrâneo', text: '"O cruzeiro pelo Mediterrâneo foi o sonho da minha vida. A NAVI cuidou de absolutamente tudo com elegância."' },
  { initials: 'JB', name: 'João & Beatriz', destination: 'Paris, França', text: '"Paris foi mágico, mas o que tornou inesquecível foi saber que tinha apoio constante da NAVI em todo momento."' },
]

function ReviewCard({ initials, name, destination, text }: typeof reviews[0]) {
  return (
    <div className="review-card">
      <div className="review-stars">★★★★★</div>
      <p className="review-text">{text}</p>
      <div className="review-author">
        <div className="review-avatar">{initials}</div>
        <div>
          <div className="review-name">{name}</div>
          <div className="review-dest">
            <i className="fas fa-map-pin" /> {destination}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ReviewsRibbon() {
  return (
    <section id="reviews-ribbon">
      <div className="reviews-track">
        {/* Duplicated for seamless infinite loop */}
        {[...reviews, ...reviews].map((r, i) => (
          <ReviewCard key={i} {...r} />
        ))}
      </div>
    </section>
  )
}
