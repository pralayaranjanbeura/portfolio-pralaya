import React from 'react';
import { HeroHighlight } from './ui/CanvasRevealEffect2';
import { socialMedia } from '@/data';
import { BackgroundGradient } from './ui/BackGroundGradient';

const About = () => {
  return (
    <section className="relative  w-full border-white-200 rounded-lg py-10" id="about">
      {/* Technical Skills Section */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 mx-4 mb-12">
        {/* Languages */}
        <BackgroundGradient className="w-full rounded-lg p-4 sm:p-6 shadow-sm ">
          <div className="rounded-lg shadow-sm p-4 sm:p-6">
            <h2 className="text-white text-lg sm:text-xl font-bold mb-4">Languages</h2>
            <ul className="list-disc list-inside space-y-2 font-semibold text-white-100">
              <li>C++</li>
              <li>Java</li>
              <li>C</li>
              <li>JavaScript</li>
            </ul>
          </div>
        </BackgroundGradient>

        {/* Tech Stacks */}
        <BackgroundGradient className="w-full rounded-lg p-4 sm:p-6 shadow-sm ">
          <div className="rounded-lg shadow-sm p-4 sm:p-6">
            <h2 className="text-white text-lg sm:text-xl font-bold mb-4">Technologies/Frameworks</h2>
            <ul className="list-disc list-inside space-y-2 font-semibold text-white-100">
              <li>ReactJs</li>
              <li>MongoDB</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>Next.js</li>
              <li>Tailwind CSS</li>
              <li>SQL</li>
              <li>HTML5</li>
              <li>Redux</li>
            </ul>
          </div>
        </BackgroundGradient>

        {/* Developer Tools */}
        <BackgroundGradient className="w-full rounded-lg p-4 sm:p-6 shadow-sm ">
          <div className="rounded-lg shadow-sm p-4 sm:p-6">
            <h2 className="text-white text-lg sm:text-xl font-bold mb-4">Developer Tools</h2>
            <ul className="list-disc list-inside space-y-2 font-semibold text-white-100">
              <li>VSCode</li>
              <li>IntelliJ IDEA</li>
              <li>Git</li>
              <li>GitHub</li>
            </ul>
          </div>
        </BackgroundGradient>
      </div>

      {/* Social Media Links */}
      <div className="text-center mt-6 sm:mt-10">
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {socialMedia.map((profile) => (
            <a href={profile.url} target="_blank" rel="noopener noreferrer" key={profile.id}>
              <div className='w-8 h-8 sm:w-10 sm:h-10 mt-2 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-100 rounded-lg border border-yellow-300'>
                <img
                  src={profile.img}
                  alt={profile.img}
                  width={20}
                  height={20}
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
