import { motion } from "framer-motion";
import "./hero.scss";

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
  initial: {
    x: 0,
  },
  animate: {
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
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

export const Hero = () => {
  return (
    <div>
      <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Pedro Alcon</motion.h2>
          <motion.h1 variants={textVariants}>
            Desenvolvedor de Software Full-Stack
          </motion.h1>
          <motion.div
            variants={textVariants}
            className="buttons"
          >
            <motion.button
              variants={textVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Ver Projetos
            </motion.button>
            <motion.button
              variants={textVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Fale Comigo
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>

      <motion.div
        className="sliddingTextContainer"
        variants={sliderVariants}
      >
        Desenvolvedor . Músico . Sound Desingner
      </motion.div>

      <motion.div variants={imageVariants} className="imageContainer">
        <motion.img
          variants={imageVariants}
          initial="initial"
          animate="animate"
          src="/hero-vmake.png"
          alt="HERO-IMG"
        />
      </motion.div>
    </div>
    </div>
  );
};


