import React from 'react';
import Localizacao from '../img/localizacao.png';
import Contato from '../img/whatssapp.png';
import Relogio from '../img/relogio.png';
import '../estilos/painelContato.css';

export default function PainelContato() {
  return (
    <>
      <div className="painel_contato">
        <div className="localidade">
          <a href="https://maps.app.goo.gl/MniwPvjVBC9Eu7Ev7" target="_blank" rel="noreferrer">
            <img src={Localizacao} alt="Localização" />
            <h2>Localidade</h2>
            <p>
              Rua Ponta Porã, Nº 2280 <br />
              Vila Planalto, Dourados-MS
            </p>
          </a>
        </div>

        <div className="contato">
          <a href="https://wa.me/5567984736871" target="_blank" rel="noreferrer">
            <img src={Contato} alt="Contato" />
            <h2>Contato</h2>
            <p>
              Agende seu horário <br />
              pelo nosso Whatsapp <br />
              (67) 98473-6871
            </p>
          </a>
        </div>

        <div className="horario">
          <img src={Relogio} alt="Horário" />
          <h2>
            Horário <br /> de Atendimento
          </h2>
          <p>
            Segunda a Sexta: <br />
            8h - 11h <br />
            13h - 18h
          </p>
        </div>
      </div>
    </>
  );
}
