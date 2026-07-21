import React, { useState, useRef } from 'react';
import Perfil from '../img/carlaa23232.png';
import Sandra from '../img/sandra-site.png'
import '../estilos/sobreMim.css';

const profissionais = [
  {
    nome: 'Dra Carla Cristina Telles',
    titulo: `Fisioterapeuta e Terapeuta Integrativa
Crefito 13 - 166432-F`,
    descricao: `Graduada pelo Centro Universitário da Grande Dourados - UNIGRAN.
Pós graduada em ortopedia, traumatologia e desportiva pela faculdade Inspirar.
Fisioterapeuta e Terapeuta integrativa, com formações em diversas abordagens
voltadas à saúde do corpo, mente e emoções.
Apaixonada por cuidar de pessoas, unindo conhecimento técnico e sensibilidade
humana para tratar a causa das dores e promover equilíbrio, bem-estar e qualidade de vida.`,
    imagem: Perfil,
  },
  {
    nome: 'Sandra Telles David',
    titulo: `Profissional da Área da Saúde
Registro Profissional`,
    descricao: `Descrição provisória para apresentação da profissional.
Texto exemplo apenas para manter o layout e o design do card.
Posteriormente, este conteúdo poderá ser ajustado conforme necessário.`,
    imagem: Sandra,
  },
  {
    nome: 'Fabio Telles David',
    titulo: `Profissional da Área da Saúde
Registro Profissional`,
    descricao: `Descrição provisória para apresentação do profissional.
Conteúdo temporário apenas para composição visual do carrossel.
O texto definitivo poderá ser inserido posteriormente.`,
    imagem: Perfil,
  },
];

export default function SobreMim() {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const anterior = () => {
    setIndex((prev) => (prev === 0 ? profissionais.length - 1 : prev - 1));
  };

  const proximo = () => {
    setIndex((prev) => (prev === profissionais.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;

    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        proximo();
      } else {
        anterior();
      }
    }

    touchStartX.current = null;
  };

  const profissional = profissionais[index];

  return (
    <div
      className="Sobre-Carousel"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <button className="Carousel-Btn left" onClick={anterior}>
        ‹
      </button>

      <div className="Card-Sobre">
        <div className="Texto-Sobre">
          <h1>{profissional.nome}</h1>
          <h2>
            {profissional.titulo.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </h2>

          <p>{profissional.descricao}</p>

          <button>Saiba mais</button>
        </div>

        <div className="Img-Sobre">
          <img src={profissional.imagem} alt={profissional.nome} />
        </div>
      </div>

      <button className="Carousel-Btn right" onClick={proximo}>
        ›
      </button>
    </div>
  );
}
