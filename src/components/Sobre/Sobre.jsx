import "./sobre.scss";
import js from "../../imgs/js.png";
import python from "../../imgs/python.png";
import pg from "../../imgs/pg.png";
import postman from "../../imgs/postman.png";
import jest from "../../imgs/jest.png";
import django from "../../imgs/django.png";
import bootstrap from "../../imgs/bootstrap.svg";
import docker from "../../imgs/docker.png";
import react from "../../imgs/react.png";
import html from "../../imgs/html.png";
import css from "../../imgs/css.png";
import sql from "../../imgs/sql.png";
import vscode from "../../imgs/vscode.png";
import git from "../../imgs/git.png";
import pytest from "../../imgs/pytest.png";
import trello from "../../imgs/trello.png";
import clickup from "../../imgs/clickup.png";
import wappler from "../../imgs/wappler.png";
import leaflet from "../../imgs/leaflet.png";
import google from "../../imgs/google.png";
import { useRef } from "react";
import {
  motion,
  useTransform,
  useScroll,
  useDragControls,
} from "framer-motion";
import { GiStarSwirl } from "react-icons/gi";

export const Sobre = () => {
  const controls = useDragControls();

  const constraintsRef = useRef(0);

  const startDrag = (event) => {
    controls.start(event);
  };

  const { scrollYProgress } = useScroll({
    target: constraintsRef,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const bubbles = [
    {
      img: "js",
      src: js,
      s: 1,
      x: Math.floor(Math.random() * window.innerWidth - 50),
      y: Math.floor(Math.random() * window.innerHeight - 50),
    },
    {
      img: "python",
      src: python,
      s: 1,
      x: Math.floor(Math.random() * window.innerWidth - 50),
      y: Math.floor(Math.random() * window.innerHeight - 50),
    },
    {
      img: "pg",
      src: pg,
      s: 0.8,
      x: Math.floor(Math.random() * window.innerWidth - 50),
      y: Math.floor(Math.random() * window.innerHeight - 50),
    },
    {
      img: "postman",
      src: postman,
      s: 0.8,
      x: Math.floor(Math.random() * window.innerWidth - 50),
      y: Math.floor(Math.random() * window.innerHeight - 50),
    },
    {
      img: "jest",
      src: jest,
      s: 0.8,
      x: Math.floor(Math.random() * window.innerWidth - 50),
      y: Math.floor(Math.random() * window.innerHeight - 50),
    },
    {
      img: "django",
      src: django,
      s: 0.8,
      x: Math.floor(Math.random() * window.innerWidth - 50),
      y: Math.floor(Math.random() * window.innerHeight - 50),
    },
    {
      img: "bootstrap",
      src: bootstrap,
      s: 1.2,
      x: Math.floor(Math.random() * window.innerWidth - 50),
      y: Math.floor(Math.random() * window.innerHeight - 50),
    },
    {
      img: "docker",
      src: docker,
      s: 1.2,
      x: Math.floor(Math.random() * window.innerWidth - 50),
      y: Math.floor(Math.random() * window.innerHeight - 50),
    },
    {
      img: "react",
      src: react,
      s: 1.2,
      x: Math.floor(Math.random() * window.innerWidth - 50),
      y: Math.floor(Math.random() * window.innerHeight - 50),
    },
    {
      img: "html",
      src: html,
      s: 1.2,
      x: Math.floor(Math.random() * window.innerWidth - 50),
      y: Math.floor(Math.random() * window.innerHeight - 50),
    },
    {
      img: "css",
      src: css,
      s: 1.2,
      x: Math.floor(Math.random() * window.innerWidth - 50),
      y: Math.floor(Math.random() * window.innerHeight - 50),
    },
    {
      img: "sql",
      src: sql,
      s: 0.7,
      x: Math.floor(Math.random() * window.innerWidth - 50),
      y: Math.floor(Math.random() * window.innerHeight - 50),
    },
    {
      img: "vscode",
      src: vscode,
      s: 0.7,
      x: Math.floor(Math.random() * window.innerWidth - 50),
      y: Math.floor(Math.random() * window.innerHeight - 50),
    },
    {
      img: "git",
      src: git,
      s: 0.7,
      x: Math.floor(Math.random() * window.innerWidth - 50),
      y: Math.floor(Math.random() * window.innerHeight - 50),
    },
    {
      img: "pytest",
      src: pytest,
      s: 0.7,
      x: Math.floor(Math.random() * window.innerWidth - 50),
      y: Math.floor(Math.random() * window.innerHeight - 50),
    },
    {
      img: "trello",
      src: trello,
      s: 1.3,
      x: Math.floor(Math.random() * window.innerWidth - 50),
      y: Math.floor(Math.random() * window.innerHeight - 50),
    },
    {
      img: "clickup",
      src: clickup,
      s: 1.6,
      x: Math.floor(Math.random() * window.innerWidth - 50),
      y: Math.floor(Math.random() * window.innerHeight - 50),
    },
    {
      img: "wappler",
      src: wappler,
      s: 1.6,
      x: Math.floor(Math.random() * window.innerWidth - 50),
      y: Math.floor(Math.random() * window.innerHeight - 50),
    },
    {
      img: "leaflet",
      src: leaflet,
      s: 1.4,
      x: Math.floor(Math.random() * window.innerWidth - 50),
      y: Math.floor(Math.random() * window.innerHeight - 50),
    },
    {
      img: "google",
      src: google,
      s: 0.6,
      x: Math.floor(Math.random() * window.innerWidth - 50),
      y: Math.floor(Math.random() * window.innerHeight - 50),
    },
  ];

  return (
    <div className="sobre">
      <div className="sobre-text">
        <h1>Sobre Mim</h1>
        <div className="division">
          <div className="line-div" />
          <GiStarSwirl />
          <div className="line-div" />
        </div>
        <p>
          Tenho 26 anos, sou de São Paulo capital, trabalho como desenvolvedor
          full-stack há 2 anos após uma adição de carreira. Sou formado em
          Produção Musical pela Anhembi Morumbi e em Programação pela Kenzie
          Academy.
        </p>
      </div>
      <motion.div
        onPointerDown={startDrag}
        className="bubble-container"
        ref={constraintsRef}
        style={{ touchAction: "none" }}
      >
        {bubbles.map((bubble, index) => {
          return (
            <motion.img
              style={{ x: bubble.x, y: bubble.y }}
              className="bubble"
              drag
              dragControls={controls}
              dragConstraints={{
                left: 0,
                right: window.innerWidth - 50,
                top: 0,
                bottom: window.innerHeight - 50,
              }}
              dragElastic={0.2}
              src={bubble.src}
              alt={bubble.img}
              key={index}
              whileDrag={{ opacity: 1, scale: 3 }}
              initial={{ x: bubble.x, y: bubble.y, scale: bubble.s }}
              animate={{ x: bubble.x, y: bubble.y, scale: bubble.s }}
            />
          );
        })}
      </motion.div>
      <motion.div
        style={{ y: yBg }}
        className="stars"
      ></motion.div>
    </div>
  );
};
