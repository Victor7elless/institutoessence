import React, { useState } from 'react';
import '../estilos/cabecalho.css';
import Logo from '../img/Logo4.png';
import Instagram from '../img/instagram.png';
import Facebook from '../img/facebook.png';

function Cabecalho() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="cabecalho">
      <img src={Logo} alt="Logo" className="Logo2" />

      {/* BOTÃO HAMBÚRGUER */}
      <div
        className="menu-toggle"
        onClick={() => setMenuAberto(!menuAberto)}
        aria-label="Abrir menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* MENU */}
      <nav className={`Navigate ${menuAberto ? 'active' : ''}`}>
        <a href="#quem-somos" onClick={() => setMenuAberto(false)}>
          Quem Somos
        </a>
        <a href="#tratamentos" onClick={() => setMenuAberto(false)}>
          Tratamentos
        </a>
      </nav>

      {/* REDES */}
      <div className="Redes">
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


    </header>
  );
}

export default Cabecalho;
