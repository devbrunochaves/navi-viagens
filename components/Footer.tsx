export default function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <img src="/logo-preta.png" alt="NAVI Viagens" />
            <p>
              A NAVI é uma agência boutique de viagens especializada em experiências personalizadas.
              Do planejamento ao retorno, cuidamos de cada detalhe com dedicação e sofisticação.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="Instagram"><i className="fab fa-instagram" /></a>
              <a href="https://wa.me/5511999999999" className="social-link" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp" /></a>
              <a href="#" className="social-link" aria-label="Facebook"><i className="fab fa-facebook-f" /></a>
              <a href="mailto:contato@naviviagens.com.br" className="social-link" aria-label="Email"><i className="fas fa-envelope" /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Serviços</h4>
            <ul className="footer-links">
              <li><a href="/#services">Passagens Aéreas</a></li>
              <li><a href="/#services">Hospedagem</a></li>
              <li><a href="/#services">Cruzeiros</a></li>
              <li><a href="/#services">Aluguel de Carros</a></li>
              <li><a href="/#services">Seguro Viagem</a></li>
              <li><a href="/#services">Visto Americano</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Destinos</h4>
            <ul className="footer-links">
              <li><a href="/#destinations">Paris</a></li>
              <li><a href="/#destinations">Orlando</a></li>
              <li><a href="/#destinations">Maldivas</a></li>
              <li><a href="/#destinations">Chile</a></li>
              <li><a href="/#destinations">Argentina</a></li>
              <li><a href="/#destinations">Nordeste</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contato</h4>
            <div className="footer-contact-item">
              <i className="fab fa-whatsapp" />
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">(11) 99999-9999</a>
            </div>
            <div className="footer-contact-item">
              <i className="fas fa-envelope" />
              <a href="mailto:contato@naviviagens.com.br">contato@naviviagens.com.br</a>
            </div>
            <div className="footer-contact-item">
              <i className="fab fa-instagram" />
              <a href="#" target="_blank" rel="noopener noreferrer">@naviviagens</a>
            </div>
            <div style={{ marginTop: 20 }}>
              <h4>Pagamentos</h4>
              <div className="payment-icons">
                <span className="pay-badge">Visa</span>
                <span className="pay-badge">Master</span>
                <span className="pay-badge">Pix</span>
                <span className="pay-badge">Boleto</span>
                <span className="pay-badge">Débito</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-legal">
            © 2025 NAVI Experiências em Viagens. Todos os direitos reservados.<br />
            CNPJ: 00.000.000/0001-00 · Cadastur: 00.000000.00-0
          </div>
          <div className="footer-abav">Agência registrada · ABAV · IATA</div>
        </div>
      </div>
    </footer>
  )
}
