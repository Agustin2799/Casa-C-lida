import React from 'react'
import { GlobeEuropeAfricaIcon, CurrencyDollarIcon, FireIcon } from '@heroicons/react/24/outline';

const SectionThree = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center  bg-slate-950">
      <h1 className='text-5xl text-light text-white my-20'>¿Por qué elegirnos?</h1>
      <div className=" text-white items-center justify-center h-auto w-5/6 mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="my-5 px-5 w-100 h-full flex flex-col items-center justify-center border border-slate-800 rounded-lg shadow-md shadow-slate-600">
          <CurrencyDollarIcon className='h-auto w-2/6 text-green-500' />
          <h2 className='text-3xl font-semibold text-white'>Economía</h2>
          <p className='text-center mt-5 text-zinc-400'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto distinctio quo eos tenetur. Repudiandae unde quas obcaecati similique quidem molestias quia officiis? Exercitationem esse aliquam et accusantium recusandae ratione eum?</p>
        </div>
        <div className="my-5 px-5 w-100 h-full flex flex-col items-center justify-center border border-slate-800 rounded-lg shadow-md shadow-slate-600">
          <GlobeEuropeAfricaIcon className='h-auto w-2/6 text-blue-500' />
          <h2 className='text-3xl font-semibold text-white'>Ambiente</h2>
          <p className='text-center mt-5 text-zinc-400'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto distinctio quo eos tenetur. Repudiandae unde quas obcaecati similique quidem molestias quia officiis? Exercitationem esse aliquam et accusantium recusandae ratione eum?</p>
        </div>
        <div className="my-5 px-5 w-100 h-full flex flex-col items-center justify-center border border-slate-800 rounded-lg shadow-md shadow-slate-600">
          <FireIcon className='h-auto w-2/6 text-orange-500' />
          <h2 className='text-3xl font-semibold text-white'>Calidez</h2>
          <p className='text-center mt-5 text-zinc-400'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto distinctio quo eos tenetur. Repudiandae unde quas obcaecati similique quidem molestias quia officiis? Exercitationem esse aliquam et accusantium recusandae ratione eum?</p>
        </div>
      </div>
    </div>
  );
}

export default SectionThree