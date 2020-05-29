import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import LearnMore from '../components/sections/LearnMore';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
import HeroNoImg from '../components/sections/HeroNoImg';
import AppDemo from '../components/sections/AppDemo';
import XpayIsComing from '../components/sections/XpayIsComing';
import NorthRollOut from '../components/sections/NorthRollOut';

const AboutUs = () => {
  return (
    <>
      <HeroNoImg className='illustration-section-01' />
      {/* <Hero className='illustration-section-01' /> */}
      {/* <FeaturesTiles /> */}
      <LearnMore
        invertMobile
        topDivider
        imageFill
        // className='illustration-section-02'
      />
      {/* <AppDemo
        invertMobile
        topDivider
        imageFill
        // className='illustration-section-02'
      /> */}
      {/* <NorthRollOut /> */}
      {/* <XpayIsComing topDivider /> */}
      {/* <Testimonial topDivider /> */}
      <Cta split />
    </>
  );
};

export default AboutUs;
