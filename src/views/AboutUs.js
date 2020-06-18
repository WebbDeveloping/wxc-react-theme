import React from 'react';
import LearnMore from '../components/sections/LearnMore';
import Cta from '../components/sections/Cta';
import HeroNoImg from '../components/sections/HeroNoImg';

const AboutUs = () => {
  return (
    <>
      <HeroNoImg className='illustration-section-01' />
      <LearnMore
        invertMobile
        topDivider
        imageFill />
      <Cta split />
    </>
  );
};

export default AboutUs;
