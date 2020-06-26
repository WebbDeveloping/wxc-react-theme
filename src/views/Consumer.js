import React from 'react';
import Cta from '../components/sections/Cta';
import ConsumerTiles from '../components/sections/ConsumerTiles';

const Consumer = () => {
  return (
    <>
      <ConsumerTiles className='illustration-section-01' />
      <Cta split />
    </>
  );
};

export default Consumer;
