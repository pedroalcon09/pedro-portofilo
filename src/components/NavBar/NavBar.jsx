import { useState } from "react";
import "./navbar.scss";
import { motion } from "framer-motion";
import { SideBar } from "../SideBar/SideBar";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    visible: (i) => ({ opacity: 1, scale: 1, transition: { delay: 0.5 * i } }),
    hidden: { opacity: 0, scale: 0.7 },
  };

  const socials = [
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/pedro-henrique-alcon-gomes-5ab1b313b/",
    },
    { name: "github", url: "https://github.com/pedroalcon09" },
    { name: "instagram", url: "https://www.instagram.com/pedro_alcon/" },
    { name: "youtube", url: "https://www.youtube.com/@pedroalcon1725/videos" },
  ];

  return (
    <div className="navigation-bar">
      <SideBar />
      <div className="wrapper">
        <span>
          Pedro Alcon
        </span>

        <motion.ul
          className="social"
          initial="hidden"
          animate="visible"
          variants={variants}
        >
          {socials.map((item, i) => (
            <motion.li variants={variants} key={item.name} custom={i} href="#">
              <a href={item.url} target="_blank">
                <img src={`/${item.name}.png`} alt={item.name + "-LOGO"} />
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default NavBar;
