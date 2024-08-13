import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'
import { Vortex } from './ui/vortex'

const Footer = () => {
  return (
    <footer className='w-full pt-20 p-10 ' id='contact'>
        <div className='flex flex-col items-center '>
            <h1 className='heading  lg:max-w-[45vw] '>Ready to take <span className='text-red-500'>your</span> digital presence to the next level ?</h1>
            <p className='text-white md:mt-10 my-5 text-center'>Reach out to me today and let&apos;s discuss how can I help you achieve your goals.</p>
            <a href='mailto:pralayaranjanbeura435@gmail.com'>
                <MagicButton 
                title="Let's get in touch"
                icon={<FaLocationArrow/>}
                position='right'
                />
            </a>
        </div>
        <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
            <p className='md:text-bas text-sm md:font-normal font-light'>Copyright © 2024 Pralaya Ranjan Beura</p>
            <div className='flex items-center md:gap-3 gap-6 '>
                {socialMedia.map((profile) => (
                    <a href={profile.url} target="_blank" rel="noopener noreferrer" key={profile.id}>
                        <div className='w-10 h-10 mt-2 cursor-pointer  flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-red-300'>
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
    </footer>
  )
}

export default Footer
