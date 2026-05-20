export default function CTA() {
  return (
    <section id="cta">
      <div className="cta-bg" />
      <div className="cta-overlay" />
      <div className="container">
        <div className="cta-content">
          <span className="label reveal">Pronto para embarcar?</span>
          <h2 className="heading-xl reveal d1">Sua próxima viagem começa aqui.</h2>
          <p className="text-body reveal d2">
            Fale com a NAVI e receba um planejamento personalizado para a viagem que você sempre sonhou.
          </p>
          <div className="cta-actions reveal d3">
            <a
              href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Quero%20planejar%20minha%20viagem%20com%20a%20NAVI."
              className="btn btn-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-whatsapp" /> Solicitar orçamento
            </a>
            <a href="mailto:contato@naviviagens.com.br" className="btn btn-outline">
              <i className="fas fa-envelope" /> Enviar e-mail
            </a>
          </div>
          <div className="cta-trust reveal d4">
            <div className="trust-item"><i className="fas fa-check-circle" /> Sem compromisso</div>
            <div className="trust-item"><i className="fas fa-check-circle" /> Resposta em até 2h</div>
            <div className="trust-item"><i className="fas fa-check-circle" /> 100% personalizado</div>
          </div>
        </div>
      </div>
    </section>
  )
}
