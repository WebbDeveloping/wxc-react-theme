import React from 'react';
import Cta from '../components/sections/Cta';
import ConsumerTiles from '../components/sections/ConsumerTiles';
import PhoneAppSection from '../components/sections/PhoneAppSection';
import PhonePic from '../components/sections/PhonePic';

const Consumer = () => {
  return (
    <>
      <ConsumerTiles className='illustration-section-01' />
      <section className='container'>
        <hr />
        <hr />
        <div className='reveal-from-left'>
          <PhoneAppSection />
          <div className="has-bg-color">
          <PhonePic  />
          </div>
        </div>
      </section>
      <Cta split />
    </>
  );
};

export default Consumer;
