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
        animate={
          !navOpen
            ? { opacity: [1, 0.5, 0], height: ["auto", 0] }
            : { opacity: [0, 0.5, 1], height: [0, "auto"] }
        }
      >
        <motion.ul
          className="text-center text-xl px-14 py-8 "
        >
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
        </motion.ul>
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
        <motion.div
          className="sm:hidden flex items-center"
          onClick={desplegaNav}
        >
          <motion.div
            transition={{ duration: 0.8 }}
            animate={
              navOpen
                ? { opacity: [0, 1], rotate: 180, x: 15 }
                : { opacity: [1, 0], rotate: 0, x: 0 }
            }
          >
            <XMarkIcon className=" size-8 text-white" />
          </motion.div>

          <motion.div
            transition={{ duration: 0.8 }}
            animate={
              !navOpen
                ? { opacity: [0, 1], rotate: 180, x: -15 }
                : { opacity: [1, 0], rotate: 0, x: 0 }
            }
          >
            <Bars3Icon className=" size-8 text-white" />
          </motion.div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar2;
