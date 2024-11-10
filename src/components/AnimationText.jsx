import React from 'react'
import { motion } from 'framer-motion'


const AnimationText = () => {
  return (
    <h1 className="text-white text-5xl md:text-6xl font-light flex-col flex gap-5">
          <motion.span initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{duration: 1.5, delay: 1}}>Casa Cálida...</motion.span>
          <motion.span initial={{ x: 50, opacity: 0 }} animate={{ x: 1, opacity: 1 }} transition={{duration: 1.5, delay: 2.5}}>Momentos Únicos.</motion.span>
    </h1>
  );
}

export default AnimationText