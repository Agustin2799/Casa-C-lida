import React from "react";
import { motion } from "framer-motion";

const Button = ({ text }) => {
  return (
    <motion.div
      className=""
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{duration:1.5, delay: 2.3}}
    >
      <motion.button
        initial={{rotate:0, scale:1}}
        whileHover={{ rotate: [0, 10, 8, 6, 4, 2, 0], scale: 1.1 }}
        transition={{ duration: 1}}
        className={
          "w-auto h-auto px-4 pt-1 pb-2 rounded-lg bg-slate-950 bg-opacity-40 text-white text-3xl border-2 border-orange-400 hover:bg-opacity-90 hover:border-lime-400 transition-all duration-75"
        }
      >
        {text}
      </motion.button>
    </motion.div>
  );
};

export default Button;
//w-${w} h-${h} p-${p}
