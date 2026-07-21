import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { profissionaisData } from "../data/profissionais";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../estilos/tratamentos.css";

export default function Cardtratamentos() {
  const navigate = useNavigate();
  const [profAtivo, setProfAtivo] = useState(0);

  const tratamentos = profissionaisData[profAtivo].tratamentos.slice(0, 3);

  return (
    <section className="tratamentos" id="tratamentos">
      <h2>
        Alguns de nossos <span className="cor">Tratamentos</span>
      </h2>

      {/* SELETOR DE PROFISSIONAL */}
      <div className="prof-selector">
        {profissionaisData.map((p, i) => (
          <button
            key={i}
            className={`prof-btn${profAtivo === i ? " active" : ""}`}
            onClick={() => setProfAtivo(i)}
          >
            {p.nome.replace("Dra. ", "").split(" ").slice(0, 2).join(" ")}
          </button>
        ))}
      </div>

      {/* DESKTOP */}
      <div className="cards_tratamentos desktop">
        {tratamentos.map((item, index) => (
          <div className="card" key={index}>
            <span className="card-icone">{item.icone}</span>
            <h3>{item.titulo}</h3>
            <p>{item.descricao}</p>
          </div>
        ))}
      </div>

      {/* MOBILE */}
      <div className="mobile">
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          spaceBetween={40}
          loop={true}
          centeredSlides={true}
          grabCursor={true}
          navigation
          pagination={{ clickable: true }}
        >
          {tratamentos.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="card mobile-card">
                <span className="card-icone">{item.icone}</span>
                <h3>{item.titulo}</h3>
                <p>{item.descricao}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <button className="btn_tratamentos" onClick={() => navigate("/tratamentos")}>
        Ver Todos os Tratamentos
      </button>
    </section>
  );
}
