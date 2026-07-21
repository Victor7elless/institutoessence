import React, { useState } from "react";
import Cabecalho from "../componentes/cabecalho";
import Footer from "../componentes/footer";
import { profissionaisData } from "../data/profissionais";
import "../estilos/paginaTratamentos.css";

export default function Tratamentos() {
  const [profAtivo, setProfAtivo] = useState(0);
  const prof = profissionaisData[profAtivo];

  return (
    <>
      <Cabecalho />
      <main className="pag-tratamentos">
        <div className="pag-hero">
          <h1>Nossos <span className="cor">Tratamentos</span></h1>
          <p>Escolha o profissional e explore os tratamentos disponíveis</p>
        </div>

        {/* SELETOR */}
        <div className="pag-prof-tabs">
          {profissionaisData.map((p, i) => (
            <button
              key={i}
              className={`pag-prof-tab${profAtivo === i ? " active" : ""}`}
              onClick={() => setProfAtivo(i)}
            >
              <span className="tab-nome">{p.nome}</span>
              <span className="tab-titulo">{p.titulo}</span>
            </button>
          ))}
        </div>

        {/* INFO DO PROFISSIONAL */}
        <div className="pag-prof-info">
          <p className="pag-prof-desc">{prof.descricao}</p>
          <span className="pag-prof-registro">{prof.registro}</span>
        </div>

        {/* GRID DE TRATAMENTOS */}
        <div className="pag-cards-grid">
          {prof.tratamentos.map((t, i) => (
            <div className="pag-card" key={i}>
              <span className="pag-card-icone">{t.icone}</span>
              <h3>{t.titulo}</h3>
              <p>{t.descricao}</p>
              <a
                href="https://wa.me/5567984736871"
                target="_blank"
                rel="noopener noreferrer"
                className="pag-card-btn"
              >
                Agendar
              </a>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
