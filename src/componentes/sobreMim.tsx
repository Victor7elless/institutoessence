import React from 'react';
import Perfil from '../img/carlaa23232.png';
import '../estilos/sobreMim.css';

export default function SobreMim() {
  return (
    <div className="Card-Sobre">
      <div className="Texto-Sobre">
        <h1>Dra Carla Cristina Telles</h1>
        <h2>
          Fisioterapeuta e Terapeuta Integrativa <br />
          Crefito 13 - 166432-F
        </h2>

        <p>
          Graduada pelo Centro Universitário da Grande Dourados - UNIGRAN.
          Pós graduada em ortopedia, traumatologia e desportiva pela faculdade Inspirar.
          Fisioterapeuta e Terapeuta integrativa, com formações em diversas abordagens
          voltadas à saúde do corpo, mente e emoções.
          Apaixonada por cuidar de pessoas, unindo conhecimento técnico e sensibilidade
          humana para tratar a causa das dores e promover equilíbrio, bem-estar e qualidade de vida.
        </p>

        <button>Saiba mais</button>
      </div>

      <div className="Img-Sobre">
        <img src={Perfil} alt="Dra Carla Cristina Telles" />
      </div>
    </div>
  );
}
