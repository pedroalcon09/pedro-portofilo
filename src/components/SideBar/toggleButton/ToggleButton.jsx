import { motion, transform } from "framer-motion";

export const ToggleButton = ({ setOpen }) => {
  return (
    <button onClick={() => setOpen((prev) => !prev)}>
      <svg width="23" heeigh="23" viewBox="0 0 23 23">
        <motion.path
          strokeWidth="3"
          stroke="white"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <motion.path
          strokeWidth="3"
          stroke="white"
          strokeLinecap="round"
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1},
            open: { opacity: 0,  x: 100},
            transition: {
                type: "spring",
                stiffness: 100,
                delay: 2
            }
          }}
        />
        <motion.path
          strokeWidth="3"
          stroke="white"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </button>
  );
};
