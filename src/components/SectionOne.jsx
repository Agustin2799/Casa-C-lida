import React from 'react'
import AnimationText from "./AnimationText";
import Button from "./Button";

const SectionOne = () => {
  return (
    <section className="bg-[url(/fuego-medias.jpg)] bg-cover bg-center max-w-full overflow-x-hidden">
      <div className="relative h-screen w-full bg-gray-900 bg-opacity-50">
        <div className="absolute left-10 md:left-auto md:right-44 top-36 md:top-16 flex flex-col items-start justify-center">
          <AnimationText />
          <div className="mt-12">
            <Button text={"Ver catálogo"} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionOne