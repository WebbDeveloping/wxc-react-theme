import React from 'react';
import Cta from '../components/sections/Cta';
import MerchantTiles from '../components/sections/merchants/MerchantTiles';
import ProcessingFees from '../components/sections/merchants/ProcessingFees';
import CompetitiveAdvantage from '../components/sections/isos/CompetitiveAdvantage';

const Acquirer = () => {
  return (
    <>
      <MerchantTiles
        className='illustration-section-01'
        title={'Add XPay to your product and service offerings,'}
        paragraph={
          'strengthen current relationships and exponentially grow your client base.'
        }
        tileonehead={'ONLINE MERCHANTS'}
        tileonetext={
          'Offer XPay to your online merchants and eliminate transaction fraud.'
        }
        tiletwohead={'OFFLINE MERCHANTS'}
        tiletwotext={
          'Offer a fraud-free solution to all your retail merchants with minimal setup expense.'
        }
        tilethreehead={'XPAY ON-PHONE'}
        tilethreetext={
          'XPay is also extremely effective in eliminating transaction fraud over the phone.'
        }
      />
      <CompetitiveAdvantage />
      <ProcessingFees />
      <Cta split />
    </>
  );
};

export default Acquirer;
