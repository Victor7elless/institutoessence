import Carousel from './carrosel';
import Welcome from './welcome';
import '../estilos/Home.css';

export default function Home() {
  return (
    <section className="home-layout">
      <Welcome />
      <Carousel />
    </section>
  );
}
