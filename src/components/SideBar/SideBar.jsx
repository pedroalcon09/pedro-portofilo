import "./sidebar.scss";
import { Links } from "./links/Links";
import { ToggleButton } from "./toggleButton/ToggleButton";
import { motion, transform } from "framer-motion";
import { useState } from "react";

const sidebarVariants = {
  open: {
    clipPath: "circle(1000px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: { delay: 0.1, type: "spring", stiffness: 400, damping: 40 },
  },
};



export const SideBar = () => {
  const [open, setOpen] = useState(false)

  

  return (
    <motion.div className="sidebar" initial="closed" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={sidebarVariants}>
        <Links />
      </motion.div>

      <ToggleButton initial="hidden" setOpen={setOpen} />
    </motion.div>
  );
};
