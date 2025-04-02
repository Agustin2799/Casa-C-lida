import React from "react";
import AnimatedParagraph from "./AnimatedParagraph";
import { motion } from "framer-motion";

const SectionTwo = () => {
  return (
    <div className=" sm:pt-0 pt-10 min-h-screen h-auto w-full bg-slate-950 text-slate-200 flex items-center justify-between">
      <div className="flex items-center justify-between w-full text-xl">
        <div className="flex flex-col gap-7 w-3/4 md:w-2/3 mx-auto font-light">
          <motion.p
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: 50, opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            Somos{" "}
            <span className="font-semibold text-amber-500 hover:text-amber-400 cursor-pointer transition-all duration-500">
              Casa Cálida
            </span>
            , una empresa comprometida con el bienestar y el cuidado del medio
            ambiente. Nos especializamos en la fabricación, instalación y
            mantenimiento de{" "}
            <span className="font-semibold text-amber-500 hover:text-amber-400 cursor-pointer transition-all duration-500">
              calefactores ecológicos
            </span>
            , diseñados para brindarte calor de manera eficiente y sostenible,
            sin comprometer la calidad del aire que respiramos.
          </motion.p>

          <motion.p
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: 50, opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            Sabemos que un hogar cálido no es solo cuestión de temperatura, sino
            también de crear un espacio acogedor donde cada momento se vuelva
            especial. Por eso, trabajamos con materiales de alta calidad y
            tecnologías innovadoras que garantizan durabilidad, ahorro
            energético y respeto por el planeta.
          </motion.p>

          <motion.p
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: 50, opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            Nuestro propósito es ofrecerte{" "}
            <span className="font-semibold text-amber-500 hover:text-amber-400 cursor-pointer transition-all duration-500">
              soluciones personalizadas
            </span>{" "}
            que se adapten a tus necesidades y estilo de vida. Ya sea en los
            días más fríos del invierno o en esos momentos donde buscas confort,
            estamos aquí para ayudarte a transformar tu hogar en un lugar lleno
            de calidez y armonía.
          </motion.p>

          <motion.p
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: 50, opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            Porque creemos que cuidar del medio ambiente empieza desde casa, y
            no hay nada más valioso que compartir momentos únicos con quienes
            amas. ¡Conoce{" "}
            <span className="font-semibold text-amber-500 hover:text-amber-400 cursor-pointer transition-all duration-500">
              nuestro catálogo{" "}
            </span>
            y descubre cómo podemos acompañarte!
          </motion.p>
          {/* <AnimatedParagraph
            content={` Porque creemos que cuidar del medio ambiente empieza desde casa, y no hay
      nada más valioso que compartir momentos únicos con quienes amas. ¡Conoce{" "}
      <span className="font-semibold text-amber-500 hover:text-amber-400 cursor-pointer transition-all duration-500">
        nuestro catálogo{" "}
      </span>
      y descubre cómo podemos acompañarte!`}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
