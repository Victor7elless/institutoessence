import React from 'react';
import Cabecalho from '../componentes/cabecalho';
import '../estilos/Welcome.css'
import Carousel from '../componentes/carrosel';


export default function Welcome() {
  return (
    <>
      <div className='main'>
        <div className='fundo'>
          <h1>Bem-vindo(a) ao <br /> Instituto Essence</h1>
          <p>O Instituto Essence nasceu com o propósito de cuidar da saúde de forma integral, unindo ciência, terapias integrativas e um olhar humano para cada pessoa, com atendimentos individualizados e personalizados. 
Mais do que uma clínica, é um espaço de acolhimento, equilíbrio e reconexão com a sua própria essência.
Cada detalhe aqui foi pensado para promover bem-estar, saúde e qualidade de vida de dentro para fora.
</p>
          <button>Saiba mais</button>

        </div>
        <div className='imagem'>
          <Carousel />
        </div>
      </div>
    </>
  );
}



