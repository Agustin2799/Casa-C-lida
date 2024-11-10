import React, { useState } from "react";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openAndCloseNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 relative ">
      <div className="container mx-auto flex items-center px-8 xl:px-0">
        <div className="flex flex-grow items-center">
          <img
            className="h-20"
            src="https://freesvg.org/img/1610637287logotype-design-concept-colored.png"
          />
        <h1 className="text-white">hcrt</h1>
        </div>
        <div className="flex lg:hidden" onClick={openAndCloseNav}>
          {isOpen ? (
            <>
              <XMarkIcon className=" size-8 text-white" />
            </>
          ) : (
            <Bars3Icon className="size-8 text-white" />
          )}
        </div>

        <div
          id="menu"
          className={`lg:flex ${
            isOpen ? "flex " : "hidden"
          } flex-grow  absolute top-20 bg-gray-800 lg:relative lg:top-0 w-full left-0 py-10 px-8 lg:py-0 lg:w-auto`}
        >
          <div className="flex justify-between flex-col lg:flex-row w-full">
            <div className="flex flex-col lg:flex-row mb-6 lg:mb-0 lg:items-center ">
              <a className="text-slate-300 lg:mr-7 mb-6 lg:mb-0" href="#">
                Inicio
              </a>
              <a className="text-slate-300 lg:mr-7 mb-6 lg:mb-0" href="#">
                Blog
              </a>
              <a className="text-slate-300 lg:mr-7 mb-6 lg:mb-0" href="#">
                Cursos
              </a>
              <a className="text-slate-300 " href="#">
                Compañía
              </a>
            </div>
            <div className="flex flex-col lg:flex-row text-center">
              <a
                className="text-slate-300 border border-white py-2.5 px-5 rounded-md hover:bg-white hover:text-gray-800 transition-all duration-500 lg:mr-5 mb-6 lg:mb-0"
                href="#"
              >
                Iniciar Sesión
              </a>
              <a
                className="text-slate-300 bg-blue-500 border lg:ms-1 border-blue-500 hover:bg-blue-600 hover:border-blue-600 transition-all duration-500 bottom-3 py-2.5 px-5 rounded-md"
                href="#"
              >
                Regístrate
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
