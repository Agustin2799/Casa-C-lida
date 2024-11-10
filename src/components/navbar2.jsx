import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

//Es mala práctica alojar varios componentes en el mismo archivo.
const Navbar2 = () => {
  const [navOpen, setNavOpen] = useState(false);

  const desplegaNav = () => {
    setNavOpen(!navOpen);
  };

  const content = (
    <>
      <motion.div
        className="sm:hidden absolute top-16 w-full left-0 right-0 bg-slate-950 transition duration-1000"
        transition={{ duration: 0.5 }}
        initial={{ opacity: 0}} // Establece la opacidad inicial en 0, es decir, el ícono comienza invisible.
        // 'animate' define cómo debe cambiar la opacidad cuando el ícono es visible.
        animate={{ opacity: navOpen ? 1 : 0}} // Cambia la opacidad a 1, lo que hace que el ícono se vuelva visible.
        // 'exit' define cómo debe comportarse la opacidad cuando el ícono desaparece (en este caso se desvanece).
        exit={{ opacity: 0}} // Hace que el ícono se desvanezca (opacidad 0) cuando el estado cambia.
      >
        <ul className="text-center text-xl px-14 py-8 ">
          <Link spy={true} smooth={true} to="">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              Home
            </li>
          </Link>
          <Link spy={true} smooth={true} to="">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              About
            </li>
          </Link>
          <Link spy={true} smooth={true} to="">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              Services
            </li>
          </Link>
          <Link spy={true} smooth={true} to="">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              Products
            </li>
          </Link>
        </ul>
      </motion.div>
    </>
  );
  return (
    <nav>
      <div className="h-20 justify-between flex z-50 text-white md:px-20 px-10 py-4 bg-slate-950">
        <div className=" flex flex-1 items-center">
          <span className="text-3xl font-bold">Logo</span>
        </div>
        <div className="sm:flex flex-1 items-center justify-center font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 text-[18px] m-auto">
              <Link
                spy={true}
                smooth={true}
                className="hover:text-fuchsia-600 transition border-b-2 border-slate-950  hover:border-fuchsia-600 cursor-pointer duration-500"
                to=""
              >
                <li>Home</li>
              </Link>
              <Link
                spy={true}
                smooth={true}
                className="hover:text-fuchsia-600 transition border-b-2 border-slate-950  hover:border-fuchsia-600 cursor-pointer duration-500"
                to=""
              >
                <li>About</li>
              </Link>
              <Link
                spy={true}
                smooth={true}
                className="hover:text-fuchsia-600 transition border-b-2 border-slate-950  hover:border-fuchsia-600 cursor-pointer duration-500"
                to=""
              >
                <li>Services</li>
              </Link>
              <Link
                spy={true}
                smooth={true}
                className="hover:text-fuchsia-600 transition border-b-2 border-slate-950  hover:border-fuchsia-600 cursor-pointer duration-500"
                to=""
              >
                <li>Products</li>
              </Link>
              <Link
                spy={true}
                smooth={true}
                className="hover:text-fuchsia-600 transition border-b-2 border-slate-950  hover:border-fuchsia-600 cursor-pointer duration-500"
                to=""
              >
                <li></li>
              </Link>
            </ul>
          </div>
        </div>
        <div>{content}</div>
        <div className="sm:hidden flex items-center" onClick={desplegaNav}>
          {/* Este div contiene el componente motion.div de Framer Motion, que se utiliza para aplicar animaciones. */}
          <motion.div
            // La propiedad 'transition' define la duración de la animación en 0.8 segundos.
            transition={{ duration: 0.8 }}
            // 'animate' define las animaciones que deben aplicarse a este div
            animate={{
              // La animación de opacidad es de 0 a 1, lo que hace que el elemento se desvanezca al aparecer.
              opacity: [0, 1],
              // La animación de rotación, si navOpen es verdadero, rota 180 grados; si es falso, no rota (0 grados).
              rotate: navOpen ? 180 : 0,
            }}
          >
            {/* Este div dentro de motion.div envuelve los íconos y tiene una clave (key) condicional basada en
    el estado 'navOpen'. Esto es importante para que React trate los elementos como si fueran diferentes
    cuando 'navOpen' cambia y haga que se realice una transición suave entre los íconos. 
    
    En Framer Motion, las propiedades initial y exit se utilizan en la animación de un componente cuando se monta (inicia) o se desmonta (sale) de la interfaz de usuario.
    */}
            <motion.div
              key={navOpen ? "X" : "Bars"} // Establece un valor dinámico para la clave (key) basado en el valor de 'navOpen'.
              initial={{ opacity: 0 }} // Establece la opacidad inicial en 0, es decir, el ícono comienza invisible.
              // 'animate' define cómo debe cambiar la opacidad cuando el ícono es visible.
              animate={{ opacity: 1 }} // Cambia la opacidad a 1, lo que hace que el ícono se vuelva visible.
              // 'exit' define cómo debe comportarse la opacidad cuando el ícono desaparece (en este caso se desvanece).
              exit={{ opacity: 0 }} // Hace que el ícono se desvanezca (opacidad 0) cuando el estado cambia.
              // 'transition' también se aplica aquí para definir la duración de la transición de opacidad.
              transition={{ duration: 0.8 }} // Define que la transición de opacidad dure 0.8 segundos.
            >
              {/* Aquí decidimos qué ícono se muestra dependiendo de si 'navOpen' es verdadero o falso. */}
              {navOpen ? (
                // Si 'navOpen' es verdadero, mostramos el ícono de la 'X' (ícono de cerrar).
                <XMarkIcon className="size-8 text-white" />
              ) : (
                // Si 'navOpen' es falso, mostramos el ícono de las barras (ícono de menú).
                <Bars3Icon className="size-8 text-white" />
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;
