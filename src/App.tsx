import React from 'react';
import Cabecalho from './componentes/cabecalho';
import Welcome from './componentes/welcome';
import SobreMim from './componentes/sobreMim';
import PainelContato from './componentes/painelContato';
import Tratamentos from './componentes/tratamentos';
import Footer from './componentes/footer';


export default function App() {
  return (
    <>
      <Cabecalho />
      <Welcome />
      <SobreMim />
      <PainelContato />
      <Tratamentos />
      <Footer />

      
    </>
  );
}

