import React from "react";
import Logo from "../img/Logo2.png";
import Instagram from "../img/instagram.png";
import Facebook from "../img/facebook.png";
import "../estilos/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="agrupamento">

        {/* NAVEGAÇÃO */}
        <div className="quem-somos">
          <h2>Navegue pelo Site</h2>
          <a href="#quem-somos">Quem Somos</a>
          <a href="#tratamentos">Tratamentos</a>
          <a href="#painel-contato">Minhas Informações</a>
        </div>

        {/* LOGO */}
        <div className="footer-logo">
          <img src={Logo} alt="Instituto Florence" />
          <p>© 2024 Instituto Florence. Todos os direitos reservados.</p>
        </div>

        {/* CONTATOS */}
        <div className="contatos">
          <h2>Contatos</h2>
          <p>
            Rua Ponta Porã, Nº 2280 <br />
            Vila Planalto, Dourados - MS
          </p>
          <p>(67) 98473-6871</p>

          <div className="redes-footer">
            <a
              href="https://www.instagram.com/institutoessencee/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Instagram} alt="Instagram" />
            </a>

            <a
              href="https://www.facebook.com/institutoessencee"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Facebook} alt="Facebook" />
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}
