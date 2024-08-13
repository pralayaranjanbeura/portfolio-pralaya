import React from 'react';
import { Vortex } from './ui/vortex';
import { FaLocationArrow } from 'react-icons/fa';
import MagicButton from './ui/MagicButton';

const Profile = () => {
  return (
    <section
      className=" overflow-hidden"
      id="about"
    >
      <Vortex >

      <div className=" flex flex-col items-center justify-center ">
        <h1 className="text-center font-bold text-[40px] mb-1 mt-1">Skills</h1> {/* Made the text larger and centered */}
      </div>
      </Vortex>
    </section>
  );
};

export default Profile;
