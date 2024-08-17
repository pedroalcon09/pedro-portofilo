import "./sidebar.scss";
import { Links } from "./links/Links";
import { ToggleButton } from "./toggleButton/ToggleButton";
import { motion } from "framer-motion";
import { useState , useEffect, useRef } from "react";
import logoHeader from "../../imgs/logo_small.png"

const variants = {
  open: {
    clipPath: "circle(1700px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: { delay: 0.5, type: "spring", stiffness: 400, damping: 40 },
  },
};

export const SideBar = () => {
  const [open, setOpen] = useState(false)

  const sideBarRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!sideBarRef.current.contains(e.target)) {
        setOpen(false);
      } else if (e.target.localName === 'a'){
        setOpen(false)
      }
    }

    document.addEventListener("mouseup", handler)


    return () => {
      document.removeEventListener("mouseup", handler)
    }
  })

  return (
    <motion.div ref={sideBarRef} className="sidebar" initial="closed" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
      <img className="header_logo" src={logoHeader} alt="LOGO-HEADER" />
        <Links />
      </motion.div>

      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};
