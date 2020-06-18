import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import Cta from '../components/sections/Cta';
import TextImage from '../components/sections/home/TextImage';
import LargeImage from '../components/sections/home/LargeImage';
import ComparisonChart from '../components/sections/charts/ComparisonChart';

const Home = () => {
  return (
    <>
      <Hero topDivider className='illustration-section-01' hasBgColor />
      <br />
      <div className='lg-pl-32 lg-pr-32'>
        <TextImage />
      </div>
      <FeaturesTiles />
      <ComparisonChart />
      <LargeImage />
      <br />
      <Cta split />
    </>
  );
};

export default Home;
