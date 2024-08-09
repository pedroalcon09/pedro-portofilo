import "./app.scss";
import { Hero } from "./components/Hero/Hero";
import { Parallax } from "./components/Parallax/Parallax";
import { Skills } from "./components/Skills/Skills";
import { NavBar } from "./components/NavBar/NavBar";
import { Sobre } from "./components/Sobre/Sobre";
import { Projects } from "./components/Projects/Projects";
import { Contacts } from "./components/Contacts/Contacts";
import "bootstrap/dist/css/bootstrap.min.css";

["Home", "Serviços", "Portfólio", "Contatos", "Sobre"];

const App = () => {
  return (
    <div>
      {/* <section id="Home">
      <NavBar/>
      <Hero/>
    </section>
    <section id="Sobre">
      <Sobre/>
    </section>
      <section id="Parallax1">
        <Parallax type="services" />
      </section>
      <section id="Habilidades">
        <Skills />
      </section>
      <section id="Parallax2">
        <Parallax type="portfolio" />
      </section> */}
      <section id="Portfolio">
        <Projects />
      </section>
      {/* <section id="Contatos">
        <Contacts />
      </section> */}
    </div>
  );
};

export default App;
