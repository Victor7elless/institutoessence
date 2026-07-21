import React, { useState, useRef } from 'react';
import Perfil from '../img/carlaa23232.png';
import Sandra from '../img/sandra-site.png';
import { profissionaisData } from '../data/profissionais';
import '../estilos/sobreMim.css';

const imgMap: Record<string, string> = {
  'carlaa23232': Perfil,
  'sandra-site': Sandra,
};

export default function SobreMim() {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const anterior = () => setIndex((p) => (p === 0 ? profissionaisData.length - 1 : p - 1));
  const proximo = () => setIndex((p) => (p === profissionaisData.length - 1 ? 0 : p + 1));

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? proximo() : anterior();
    touchStartX.current = null;
  };

  const prof = profissionaisData[index];

  return (
    <div
      className="Sobre-Carousel"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      id="quem-somos"
    >
      <button className="Carousel-Btn left" onClick={anterior} aria-label="Profissional anterior">‹</button>

      <div className="Card-Sobre">
        <div className="Texto-Sobre">
          <h1>{prof.nome}</h1>
          <h2>
            {prof.titulo}<br />
            <span style={{ fontSize: '16px', opacity: 0.85 }}>{prof.registro}</span>
          </h2>
          <p>{prof.descricao}</p>
          <button>Saiba mais</button>
        </div>
        <div className="Img-Sobre">
          <img src={imgMap[prof.imagem] || Perfil} alt={prof.nome} />
        </div>
      </div>

      <button className="Carousel-Btn right" onClick={proximo} aria-label="Próximo profissional">›</button>
    </div>
  );
}
