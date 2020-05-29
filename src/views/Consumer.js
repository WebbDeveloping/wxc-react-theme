import React from 'react';
// import sections
import LearnMore from '../components/sections/LearnMore';
import Cta from '../components/sections/Cta';
import HeroNoImg from '../components/sections/HeroNoImg';
import ConsumerTiles from '../components/sections/ConsumerTiles';
import PhoneAppSection from '../components/sections/PhoneAppSection';
import GetApp from '../components/sections/GetApp';

const Consumer = () => {
  return (
    <>
      {/* <LearnMore invertMobile topDivider imageFill /> */}
      <ConsumerTiles className='illustration-section-01' />
      <PhoneAppSection topDivider className='illustration-section-02' />
      <GetApp className='illustration-section-01' />
      <Cta split />
    </>
  );
};

export default Consumer;
