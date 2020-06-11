import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
import HeroNoImg from '../components/sections/HeroNoImg';
import AppDemo from '../components/sections/AppDemo';
import XpayIsComing from '../components/sections/XpayIsComing';
import NorthRollOut from '../components/sections/NorthRollOut';
import HeroScrollButtons from '../components/sections/home/HeroScrollButtons';
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
      {/* <ComparisonChart /> */}
      <ComparisonChart />
      <LargeImage />
      <br />
      <Cta split />
    </>
  );
};

export default Home;
