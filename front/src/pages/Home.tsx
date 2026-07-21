import React from 'react';
import Cabecalho from '../componentes/cabecalho';
import Welcome from '../componentes/welcome';
import SobreMim from '../componentes/sobreMim';
import PainelContato from '../componentes/painelContato';
import Tratamentos from '../componentes/Cardtratamentos';
import Avaliacoes from '../componentes/Avaliacoes';
import Footer from '../componentes/footer';

export default function Home() {
  return (
    <>
      <Cabecalho />
      <Welcome />
      <SobreMim />
      <PainelContato />
      <Tratamentos />
      <Avaliacoes />
      <Footer />
    </>
  );
}
