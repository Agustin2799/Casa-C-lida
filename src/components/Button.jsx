import React from "react";
import { motion } from "framer-motion";

const Button = ({ text }) => {
    return <motion.button initial={{scale:1, rotate:0}} whileHover={{ rotate: [0, 10, 0, -10, 0], scale: 1.1 }} transition={{duration: 2}} className={'w-auto h-auto px-4 pt-1 pb-2 rounded-lg bg-slate-950 bg-opacity-40 text-white text-3xl border-2 border-orange-400 hover:bg-opacity-90 hover:border-amber-400 transition-all duration-75'}>{text}</motion.button>;
};

export default Button;
//w-${w} h-${h} p-${p}