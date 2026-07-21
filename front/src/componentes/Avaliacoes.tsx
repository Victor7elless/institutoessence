import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../estilos/avaliacoes.css";

interface Avaliacao {
  nome: string;
  avatar: string;
  foto: string | null;
  nota: number;
  texto: string;
  data: string;
  localGuide?: boolean;
  totalReviews?: number;
}

// Fallback estático — exibido enquanto a API carrega ou se falhar
const FALLBACK: Avaliacao[] = [
  { nome: 'Maria Fernanda S.', avatar: 'MF', foto: null, nota: 5, texto: 'Atendimento excepcional! A Dra. Carla é muito atenciosa e profissional. Fiz fisioterapia por 2 meses e o resultado foi incrível. Super recomendo!', data: 'há 2 semanas' },
  { nome: 'João Paulo R.', avatar: 'JP', foto: null, nota: 5, texto: 'Excelente clínica! Ambiente acolhedor, profissionais qualificados e tratamento personalizado. Minha dor crônica nas costas diminuiu muito.', data: 'há 1 mês' },
  { nome: 'Ana Carolina B.', avatar: 'AC', foto: null, nota: 5, texto: 'Fiz drenagem linfática com a Sandra e amei o resultado! Profissional incrível, com muito conhecimento e cuidado. Nota 10!', data: 'há 3 semanas' },
  { nome: 'Roberto M.', avatar: 'RM', foto: null, nota: 5, texto: 'Após um acidente, precisei de fisioterapia ortopédica. O trabalho da Dra. Carla foi fundamental na minha recuperação. Atendimento humanizado!', data: 'há 2 meses' },
  { nome: 'Patrícia L.', avatar: 'PL', foto: null, nota: 5, texto: 'Melhor clínica de saúde integrativa da região! Fiz sessões de acupuntura e os resultados foram surpreendentes. Equipe super qualificada.', data: 'há 1 semana' },
  { nome: 'Carlos E.', avatar: 'CE', foto: null, nota: 5, texto: 'Fiz Pilates Clínico e melhorei muito minha postura. A Dra. Carla explica tudo com muita clareza. Atendimento de primeira qualidade!', data: 'há 3 meses' },
];

// URL da API — em produção, troque pelo endereço real do servidor
const API_URL = process.env.REACT_APP_REVIEWS_API_URL || 'http://localhost:3001/api/reviews';

const Estrelas: React.FC<{ nota: number }> = ({ nota }) => (
  <div className="estrelas" aria-label={`${nota} de 5 estrelas`}>
    {[1, 2, 3, 4, 5].map((i) => (
      <span key={i} className={i <= nota ? "estrela cheia" : "estrela"}>★</span>
    ))}
  </div>
);

const Avatar: React.FC<{ foto: string | null; iniciais: string }> = ({ foto, iniciais }) =>
  foto
    ? <img src={foto} alt={iniciais} className="av-avatar av-avatar-foto" />
    : <div className="av-avatar">{iniciais}</div>;

const AvaliacaoCard: React.FC<{ avaliacao: Avaliacao }> = ({ avaliacao }) => (
  <div className="av-card">
    <div className="av-top">
      <Avatar foto={avaliacao.foto} iniciais={avaliacao.avatar} />
      <div className="av-user-info">
        <p className="av-nome">{avaliacao.nome}</p>
        <Estrelas nota={avaliacao.nota} />
        {avaliacao.localGuide && <span className="av-guide">Guia local</span>}
      </div>
      <span className="av-data">{avaliacao.data}</span>
    </div>
    <p className="av-texto">"{avaliacao.texto}"</p>
  </div>
);

export default function Avaliacoes() {
  const [reviews, setReviews]   = useState<Avaliacao[]>(FALLBACK);
  const [rating, setRating]     = useState(5.0);
  const [total, setTotal]       = useState(0);
  const [loading, setLoading]   = useState(true);
  const [fromApi, setFromApi]   = useState(false);

  useEffect(() => {
    let vivo = true;
    fetch(API_URL)
      .then(r => r.json())
      .then(data => {
        if (!vivo) return;
        if (data.reviews?.length) {
          setReviews(data.reviews);
          setRating(data.rating ?? 5);
          setTotal(data.total  ?? data.reviews.length);
          setFromApi(true);
        }
      })
      .catch(() => { /* mantém fallback silenciosamente */ })
      .finally(() => { if (vivo) setLoading(false); });
    return () => { vivo = false; };
  }, []);

  return (
    <section className="avaliacoes-section">
      <div className="avaliacoes-header">
        <div className="google-badge">
          <svg viewBox="0 0 24 24" className="google-icon" aria-hidden="true">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.47 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          <span>Avaliações Google</span>
          {loading && <span className="av-loading">…</span>}
          {fromApi && <span className="av-live" title="Avaliações em tempo real">●</span>}
        </div>

        <div className="nota-geral">
          <span className="nota-numero">{rating.toFixed(1)}</span>
          <Estrelas nota={Math.round(rating)} />
          {total > 0 && <span className="total-avaliacoes">({total} avaliações)</span>}
        </div>
      </div>

      {/* CARROSSEL RESPONSIVO */}
      <div className="avaliacoes-carousel">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          pagination={{
            el: '.swiper-pagination-custom',
            clickable: true,
            bulletClass: 'swiper-pagination-bullet-custom',
            bulletActiveClass: 'swiper-pagination-bullet-active-custom',
          }}
          spaceBetween={20}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          className="swiper-avaliacoes"
        >
          {reviews.map((avaliacao, index) => (
            <SwiperSlide key={index}>
              <AvaliacaoCard avaliacao={avaliacao} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Botões de navegação customizados */}
        <div className="swiper-button-prev-custom swiper-nav-btn">‹</div>
        <div className="swiper-button-next-custom swiper-nav-btn">›</div>

        {/* Paginação customizada */}
        <div className="swiper-pagination-custom"></div>
      </div>
    </section>
  );
}
