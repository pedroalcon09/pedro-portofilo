import "./app.scss"
import { Hero } from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar"

const App = () => {
  return <div>
    <section id="home">
      <NavBar/>
      <Hero/>
    </section>
    <section >Parallax</section>
    <section id="serviços">Services</section>
    <section >Paralax</section>
    <section id="portfólio">Portfolio1</section>
    <section id="contatos">Contact</section>
    <section id="sobre">Sobre</section>
  </div>;
};

export default App;
