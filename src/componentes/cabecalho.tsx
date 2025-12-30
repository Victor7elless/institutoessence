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
        <img src={Instagram} alt="Instagram" />
        <img src={Facebook} alt="Facebook" />
      </div>
    </header>
  );
}

export default Cabecalho;
