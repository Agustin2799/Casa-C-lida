import Navbar from "./components/navbar";
import Navbar2 from "./components/navbar2";
import AnimationText from "./components/AnimationText";
import { motion } from "framer-motion";
// Actualiza las importaciones

function App() {
  return (
    <>
      <Navbar2 />
      <section className="bg-[url(/fuego-medias.jpg)] bg-cover bg-center">
        <div className="relative h-screen w-full bg-gray-900 bg-opacity-50">
          <div className="absolute  left-10 md:left-auto md:right-44 top-36 md:top-16 flex items-center justify-center">
            <AnimationText />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
