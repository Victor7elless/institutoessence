import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../estilos/cabecalho.css';
import Logo from '../img/Logo4.png';
import Instagram from '../img/instagram.png';
import Facebook from '../img/facebook.png';

function Cabecalho() {
  const [menuAberto, setMenuAberto] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  const handleNav = (hash: string) => {
    setMenuAberto(false);
    if (isHome) {
      const el = document.querySelector(hash);
      el?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/' + hash);
    }
  };

  return (
    <header className="cabecalho">
      <button
        className="logo-btn"
        onClick={() => navigate('/')}
        aria-label="Ir para página inicial"
        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
      >
        <img src={Logo} alt="Instituto Florence" className="Logo2" />
      </button>

      <div
        className="menu-toggle"
        onClick={() => setMenuAberto(!menuAberto)}
        aria-label="Abrir menu"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && setMenuAberto(!menuAberto)}
      >
        <span></span><span></span><span></span>
      </div>

      <nav className={`Navigate${menuAberto ? ' active' : ''}`} role="navigation">
        <button className="nav-link" onClick={() => handleNav('#quem-somos')}>Quem Somos</button>
        <button className="nav-link" onClick={() => handleNav('#tratamentos')}>Tratamentos</button>
        <button className="nav-link" onClick={() => { setMenuAberto(false); navigate('/tratamentos'); }}>
          Ver Todos
        </button>
      </nav>

      <div className="Redes">
        <a href="https://www.instagram.com/institutoessencee/" target="_blank" rel="noopener noreferrer">
          <img src={Instagram} alt="Instagram" />
        </a>
        <a href="https://www.facebook.com/institutoessencee" target="_blank" rel="noopener noreferrer">
          <img src={Facebook} alt="Facebook" />
        </a>
      </div>
    </header>
  );
}

export default Cabecalho;
