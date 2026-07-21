import Carousel from '../componentes/carrosel';
import Welcome from '../componentes/welcome';
import '../estilos/Home.css';

export default function Home() {
  return (
    <section className="home-layout">
      <Welcome />
      <Carousel />
    </section>
  );
}
