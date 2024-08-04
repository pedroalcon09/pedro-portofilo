import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.2
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.02,
      staggerDirection: -1,
    },
  },
};

const itemsVariants = {
  open: {
    y: 0,
    opacity: 1
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

export const Links = () => {
  const items = ["Home", "Serviços", "Portfólio", "Contatos", "Sobre"];

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a
          href={`#${item.toLowerCase()}`}
          key={item}
          variants={itemsVariants}
          whileHover={{scale: 1.1}} 
          whileTap={{scale: 0.9}}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};
