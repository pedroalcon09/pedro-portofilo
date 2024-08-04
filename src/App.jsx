import "./app.scss"
import { Hero } from "./components/Hero/Hero";
import { Parallax } from "./components/Parallax/Parallax";
import NavBar from "./components/NavBar/NavBar"

["Home", "Serviços", "Portfólio", "Contatos", "Sobre"]

const App = () => {
  return <div>
    <section id="Home">
      <NavBar/>
      <Hero/>
    </section>
    <section >
      <Parallax type="services"/>
    </section>
    <section id="Servicos">Services</section>
    <section >
    <Parallax type="portfolio"/>
    </section>
    <section id="Portfolio">Portfolio1</section>
    <section id="Contatos">Contact</section>
    <section id="Sobre">Sobre</section>
  </div>;
};

export default App;
