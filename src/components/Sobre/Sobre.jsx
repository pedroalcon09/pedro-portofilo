import "./sobre.scss";
import { bubbles } from "../../data/bubbles";
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
          Tenho 28 anos e atuo como desenvolvedor full-stack há 4 anos, após uma
          transição de carreira para a área de tecnologia. Sou formado em
          Programação pela Kenzie Academy e também em Produção Musical pela
          Universidade Anhembi Morumbi. Ao longo da minha trajetória, participei
          de projetos que envolveram desde o desenvolvimento de interfaces até a
          construção de APIs, bancos de dados e processos de implantação.
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
      <motion.div style={{ y: yBg }} className="stars"></motion.div>
    </div>
  );
};
