import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const Hero_animation = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Raj Lucky',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'An Engineer',
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1em', display: 'inline-block' }}
      className='text-blue-400'
      repeat={Infinity}
    />
  );
};
export default Hero_animation