import "./contacts.scss";
import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";
import { Row, Col, Container } from "react-bootstrap";
import colorSharp2 from "../../imgs/color-sharp2.png";
import colorSharp from "../../imgs/color-sharp.png";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const variants =
  window.innerWidth > 767
    ? {
        initial: {
          x: -500,
          opacity: 0,
        },
        animate: {
          x: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
            staggerChildren: 0.3,
          },
        },
      }
    : {
        initial: {
          y: -300,
          opacity: 0,
        },
        animate: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
            staggerChildren: 0.3,
          },
        },
      };

export const Contacts = () => {
  const ref = useRef();

  const formRef = useRef();

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const isInView = useInView(ref, { margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "24aa26f1-3f9b-4eac-95ed",
        "75374e3a-9830-47c6-aa2d",
        formRef.current,
        {
          publicKey: "lnJL6T9d0Y2_JjTZo",
        }
      )
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <div className="contacts">
      <img className="background-image-right" src={colorSharp2} />
      <img className="background-image-left" src={colorSharp} />
      <Container>
        <Row className="d-flex">
          <Col lg={6} className="textContainer">
            <motion.div
              variants={variants}
              initial="initial"
              whileInView="animate"
              className="contactCont"
              ref={ref}
            >
              <motion.h1 variants={variants}>Vamos trabalhar juntos!</motion.h1>
              <motion.div variants={variants} className="contacts_inner_cont">
                <motion.div variants={variants} className="item">
                  <h2>E-mail</h2>
                  <span>pedro09alcon@gmail.com</span>
                </motion.div>
                <motion.div variants={variants} className="item">
                  <h2>Redes Sociais</h2>
                  <span className="icons_contnr">
                    <ul className="social_list">
                      <li className="social_contact">
                        <a
                          href="https://github.com/pedroalcon09"
                          target="_blank"
                        >
                          <SiGithub />
                        </a>
                      </li>
                      <li className="social_contact">
                        <a
                          href="https://www.linkedin.com/in/pedro-henrique-alcon-gomes-5ab1b313b/"
                          target="_blank"
                        >
                          <SiLinkedin />
                        </a>
                      </li>
                      <li className="social_contact">
                        <a
                          href="https://www.instagram.com/pedro_alcon/"
                          target="_blank"
                        >
                          <SiInstagram />
                        </a>
                      </li>
                    </ul>
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>
          </Col>
          <Col lg={6} className="formContainer">
            <motion.div
              className="phoneSvg"
              initial={{ opacity: 1 }}
              whileInView={{ opacity: 0 }}
              transition={{ delay: 3, duration: 1 }}
            >
              <svg width="310px" height="310px" viewBox="0 0 31.666 32.666">
                <motion.path
                  strokeWidth={0.2}
                  fill="none"
                  initial={{ pathLength: 0 }}
                  transition={{ duration: 3 }}
                  animate={isInView && { pathLength: 1 }}
                  d="M28.189,16.504h-1.666c0-5.437-4.422-9.858-9.856-9.858l-0.001-1.664C23.021,4.979,28.189,10.149,28.189,16.504z
            M16.666,7.856L16.665,9.52c3.853,0,6.983,3.133,6.981,6.983l1.666-0.001C25.312,11.735,21.436,7.856,16.666,7.856z M16.333,0
            C7.326,0,0,7.326,0,16.334c0,9.006,7.326,16.332,16.333,16.332c0.557,0,1.007-0.45,1.007-1.006c0-0.559-0.45-1.01-1.007-1.01
            c-7.896,0-14.318-6.424-14.318-14.316c0-7.896,6.422-14.319,14.318-14.319c7.896,0,14.317,6.424,14.317,14.319
            c0,3.299-1.756,6.568-4.269,7.954c-0.913,0.502-1.903,0.751-2.959,0.761c0.634-0.377,1.183-0.887,1.591-1.529
            c0.08-0.121,0.186-0.228,0.238-0.359c0.328-0.789,0.357-1.684,0.555-2.518c0.243-1.064-4.658-3.143-5.084-1.814
            c-0.154,0.492-0.39,2.048-0.699,2.458c-0.275,0.366-0.953,0.192-1.377-0.168c-1.117-0.952-2.364-2.351-3.458-3.457l0.002-0.001
            c-0.028-0.029-0.062-0.061-0.092-0.092c-0.031-0.029-0.062-0.062-0.093-0.092v0.002c-1.106-1.096-2.506-2.34-3.457-3.459
            c-0.36-0.424-0.534-1.102-0.168-1.377c0.41-0.311,1.966-0.543,2.458-0.699c1.326-0.424-0.75-5.328-1.816-5.084
            c-0.832,0.195-1.727,0.227-2.516,0.553c-0.134,0.057-0.238,0.16-0.359,0.24c-2.799,1.774-3.16,6.082-0.428,9.292
            c1.041,1.228,2.127,2.416,3.245,3.576l-0.006,0.004c0.031,0.031,0.063,0.06,0.095,0.09c0.03,0.031,0.059,0.062,0.088,0.095
            l0.006-0.006c1.16,1.118,2.535,2.765,4.769,4.255c4.703,3.141,8.312,2.264,10.438,1.098c3.67-2.021,5.312-6.338,5.312-9.719
            C32.666,7.326,25.339,0,16.333,0z"
                />
              </svg>
            </motion.div>

            <motion.form
              ref={formRef}
              onSubmit={sendEmail}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 4, duration: 1 }}
            >
              <input
                type="text"
                name="name"
                id="inp_name"
                placeholder="Nome"
                required
              />
              <input
                type="text"
                name="email"
                required
                id="inp_email"
                placeholder="E-mail"
              />
              <textarea
                name="message"
                id="inp_message"
                rows={8}
                placeholder="Mensagem"
                required
              ></textarea>
              <button>Enviar</button>
            </motion.form>
            {error === true && <div className="error_form">Erro</div>}

            {success === true && <div className="success_form">Sucesso</div>}
          </Col>
        </Row>
      </Container>
    </div>
  );
};
