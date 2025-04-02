import React from "react";
import { motion } from "framer-motion";

const AnimatedParagraph = ({ content }) => {
  return (
    <motion.p
      whileInView={{ x: 0, opacity: 1 }}
      initial={{ x: 50, opacity: 0 }}
      transition={{ duration: 1.5 }}
      dangerouslySetInnerHTML={{ __html: content }}
    >
      {content}
    </motion.p>
  );
};

export default AnimatedParagraph;
