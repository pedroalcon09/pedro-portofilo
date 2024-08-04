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

const itemVariants = {
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
  
  const items = [
    { name: "Home", htmlId: "Home" },
    { name: "Serviços", htmlId: "Servicos" },
    { name: "Portfólio", htmlId: "Portfolio" },
    { name: "Contatos", htmlId: "Contatos" },
    { name: "Sobre", htmlId: "Sobre" }
  ];

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a
          href={`#${item.htmlId}`}
          key={item.htmlId}
          variants={itemVariants}
          whileHover={{scale: 1.1}} 
          whileTap={{scale: 0.9}}
        >
          {item.name}
        </motion.a>
      ))}
    </motion.div>
  );
};
