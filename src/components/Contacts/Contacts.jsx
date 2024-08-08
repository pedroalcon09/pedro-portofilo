import "./contacts.scss";
import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";
import { Row, Col } from "react-bootstrap";
import colorSharp2 from "../../imgs/color-sharp2.png";
import colorSharp from "../../imgs/color-sharp.png";

export const Contacts = () => {
  return (
    <Row className="contacts">
      <img className="background-image-right" src={colorSharp2} />
      <img className="background-image-left" src={colorSharp} />
      <Col lg={6} className="textContainer">
        <div className="contactCont">
          <h1>Vamos trabalhar juntos!</h1>
          <div className="item">
            <h2>Mail</h2>
            <span>pedro09alcon@gmail.com</span>
          </div>
          <div className="item">
            <h2>Redes Sociais</h2>
            <span>
              <ul className="social_list">
                <li className="social_contact">
                  <SiGithub />
                </li>
                <li className="social_contact">
                  <SiLinkedin />
                </li>
                <li className="social_contact">
                  <SiInstagram />
                </li>
              </ul>
            </span>
          </div>
        </div>
      </Col>
      <Col lg={6} className="formContainer">
        <form>
          <input type="text" name="name" id="inp_name" placeholder="Nome" />
          <input
            type="text"
            name="email"
            required
            id="inp_email"
            placeholder="E-mail"
          />
          <textarea
            name="comment"
            id="inp_comment"
            rows={8}
            placeholder="Mensagem"
          ></textarea>
          <button>Enviar</button>
        </form>
      </Col>
    </Row>
  );
};
