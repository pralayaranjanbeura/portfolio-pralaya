import { Spotlight } from '@/components/ui/Spotlight';
import React from 'react';
import { TextGenerateEffect } from '../components/ui/TextGenerateEffect';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';
import Grid from './Grid';
import { BoxesCore } from './ui/BackgroundBoxes'; // Importing BoxesCore
import { Vortex } from './ui/vortex';

const Hero = () => {
  return (
    <div className="relative pb-20 pt-16"> {/* Reduced from pt-24 to pt-16 */}
    {/* BoxesCore for Background Effect */}
    <BoxesCore className="absolute inset-0 z-0" />
  
    {/* Container for Spotlights */}
    <div className="relative z-20">
      <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
      <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
      <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
    </div>
  
    {/* Background container */}
    <div className="absolute inset-0 z-10 h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.3] flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
    </div>
  
    {/* Content container */}
    
    <div className="relative flex justify-center my-16 z-30"> {/* Adjusted my-20 to my-16 */}
      <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
        <h2 className="uppercase tracking-widest text-blue-100 text-lg text-center max-w-80">
          <img
            src='./pralayaranjanbeura.png'
            className='bg-amber-400 rounded-full h-70 w-70 object-cover mx-auto'
            alt="Pralaya Ranjan Beura"
          />
        </h2>
        <TextGenerateEffect
          className="text-center text-[40px] md:text-5xl lg:text-6xl"
          words="Transforming Concepts into Seamless User Experiences"
        />
        
        <p className="text-center md:tracking-wider mb-4 text-5m md:text-lg lg:text-2xl">
          Hi, I&apos;m <span className='text-yellow-400 font-bold'>Pralaya Ranjan Beura
          </span> , a MERN stack Developer & Aspiring Software Engineer based in Cuttack, Odisha
        </p>
        <a href="#about">
          <MagicButton
            title="Show My Work"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
        
      </div>
    </div>
    
  </div>
  
  );
};

export default Hero;
 