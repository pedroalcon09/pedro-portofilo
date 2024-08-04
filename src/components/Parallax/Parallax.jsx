import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

export const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const textBg = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yPlanets = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);


  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #505064)"
            : "linear-gradient(180deg, #505064, #111132)",
      }}
    >
      <motion.h1 style={{ y: textBg }}>
        {type === "services" ? "O que faço?" : "O que já fiz?"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div
        style={{
          y: yPlanets,
          x: yPlanets,
          backgroundImage: `url(${
            type === "services" ? "planets.png" : "sun.png"
          })`,
        }}
        className="planets"
      ></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
};
