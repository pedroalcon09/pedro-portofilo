import { motion } from "framer-motion";
import "./hero.scss";
import colorSharp2 from "../../imgs/color-sharp2.png";
import colorSharp from "../../imgs/color-sharp.png";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  start: {
    x: 0,
  },
  animation: {
    x: "-220%",
    transition: {
      duration: 20,
      repeatType: "mirror",
      repeat: Infinity,
    },
  },
};

const imageVariants = {
  initial: {
    x: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 10,
    transition: {
      duration: 1,
    },
  },
};

export const Hero = () => {
  return (
    <div>
      <motion.div className="hero">
        <div className="wrapper">
          <img className="background-image-right" src={colorSharp2} />
          <img className="background-image-left" src={colorSharp} />
          <motion.div className="textContainer">
            <motion.h2
              variants={textVariants}
              initial="initial"
              animate="animate"
            >
              Pedro Alcon
            </motion.h2>
            <motion.h1
              variants={textVariants}
              initial="initial"
              animate="animate"
            >
              Desenvolvedor de Software Full-Stack
            </motion.h1>
            <motion.div
              variants={textVariants}
              className="buttons"
              initial="initial"
              animate="animate"
            >
              <motion.button
                variants={textVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <a href="#Portfolio">Ver Projetos</a>
              </motion.button>
              <motion.button
                variants={textVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <a href="#Contatos">Fale Comigo</a>
              </motion.button>
            </motion.div>
            <motion.a
              variants={textVariants}
              animate="scrollButton"
              href="#Contatos"
            >
              <motion.img
                className="scroll_btn"
                variants={textVariants}
                animate="scrollButton"
                src="/scroll.png"
                alt=""
              />
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          variants={sliderVariants}
          initial="start"
          animate="animation"
          className="sliddingTextContainer"
        >
          Desenvolvedor · Músico · Sound Desingner
        </motion.div>

        <motion.div
          variants={imageVariants}
          className="imageContainer"
          initial="initial"
          animate="animate"
        >
          <motion.img
            variants={imageVariants}
            src="/hero_v2.png"
            alt="HERO-IMG"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};
