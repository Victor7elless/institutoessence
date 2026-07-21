import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../estilos/tratamentos.css";

const tratamentos = [
  {
    titulo: "Clareamento Dental",
    texto:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente atque ex beatae."
  },
  {
    titulo: "Ortodontia",
    texto:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente atque ex beatae."
  },
  {
    titulo: "Implantes Dentários",
    texto:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente atque ex beatae."
  }
];

export default function Tratamentos() {
  return (
    <section className="tratamentos">
      <h2>
        Alguns de nossos <span className="cor">Tratamentos</span>
      </h2>

      {/* DESKTOP */}
      <div className="cards_tratamentos desktop">
        {tratamentos.map((item, index) => (
          <div className="card" key={index}>
            <h3>{item.titulo}</h3>
            <p>{item.texto}</p>
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
                <h3>{item.titulo}</h3>
                <p>{item.texto}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <button className="btn_tratamentos">
        Ver Todos os Tratamentos
      </button>
    </section>
  );
}
