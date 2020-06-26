import React from 'react';
import Cta from '../components/sections/Cta';
import ProcessingFees from '../components/sections/merchants/ProcessingFees';
import CompetitiveAdvantage from '../components/sections/isos/CompetitiveAdvantage';
import SubPageHero from '../components/sections/SubPageHero';

const Acquirer = () => {
  return (
    <>
    <section className='features-tiles section'>
      <div className='container'>
        <div className='col-sm pt-0'>
        <div className=' has-bg-color ml-8'>
        <br />
            <SubPageHero
              title='Early direct
              deposit'
              subtitle='Access your paycheck before it’s available at traditional banks.*'
              button1='Get started'
              button2='Read More'
            />
            <hr />
            <hr />
          </div>
        </div>
      </div>
    </section>
      <CompetitiveAdvantage />
      <ProcessingFees />
      <Cta split />
    </>
  );
};

export default Acquirer;
