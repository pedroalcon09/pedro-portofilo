import "./app.scss"
import { Hero } from "./components/Hero/Hero";
import { Parallax } from "./components/Parallax/Parallax";
import { Skills } from "./components/Skills/Skills";
import NavBar from "./components/NavBar/NavBar"
import { Sobre } from "./components/Sobre/Sobre";
import { Projects } from "./components/Projects/Projects";

["Home", "Serviços", "Portfólio", "Contatos", "Sobre"]

const App = () => {
  return <div>
    <section id="Home">
      <NavBar/>
      <Hero/>
    </section>
    <section id="Sobre">
      <Sobre/>
    </section>
    <section >
      <Parallax type="services"/>
    </section>
    <section id="Habilidades">
      <Skills/>
    </section>
    <section >
    <Parallax type="portfolio"/>
    </section>
    <section id="Portfolio">
      <Projects/>
    </section>
    <section id="Contatos">Contact</section>
  </div>;
};

export default App;
