import React from "react";
import Logo from "../img/Logo2.png";
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
            <span>Instagram</span>
            <span>Facebook</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
