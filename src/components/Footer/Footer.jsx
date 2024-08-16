import "./footer.scss";
import { motion } from "framer-motion";
import logoSmall from "../../imgs/logo_small.png";

export const Footer = () => {
  const textVariants = {
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
    scrollButton: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  return (
    <div className="footer">
      <div className="footer_container">
        <img src={logoSmall} alt="Pedro-Alcon-Logo" />
        <h5>Copyright © 2024 Pedro Alcon · Design Pedro Alcon</h5>
        <motion.a variants={textVariants} animate="scrollButton" href="#Home">
          <motion.img
            className="scroll_btn"
            variants={textVariants}
            animate="scrollButton"
            src="/scroll2.png"
            alt=""
          />
        </motion.a>
      </div>
    </div>
  );
};
