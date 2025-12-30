import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../estilos/CarouselStyles.css"; // CSS personalizado

interface CarouselProps {
  images?: string[];
}

const Carousel: React.FC<CarouselProps> = ({
  images = [
    "https://placekitten.com/400/200",
    "https://placebear.com/400/200",
    "https://placekitten.com/401/200",
  ],
}) => {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop
      className="my-swiper"
    >
      {images.map((img, idx) => (
        <SwiperSlide key={idx}>
          <img src={img} alt={`slide-${idx}`} className="carousel-image" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
