import React from 'react';
import Cta from '../components/sections/Cta';
import MerchantTiles from '../components/sections/merchants/MerchantTiles';
import SalesFunnel from '../components/sections/merchants/SalesFunnel';
import IntroPushSale from '../components/sections/merchants/IntroPushSale';
import GuaranteedFraudProof from '../components/sections/merchants/GuaranteedFraudProof';
import ProcessingFees from '../components/sections/merchants/ProcessingFees';
import SimpleIntegration from '../components/sections/merchants/SimpleIntegration';
import AcquirerTiles from '../components/sections/isos/AcquirerTiles';
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
        tileOneHead={'ONLINE MERCHANTS'}
        tileOneText={
          'Offer XPay to your online merchants and eliminate transaction fraud.'
        }
        tileTwoHead={'OFFLINE MERCHANTS'}
        tileTwoText={
          'Offer a fraud-free solution to all your retail merchants with minimal setup expense.'
        }
        tileThreeHead={'XPAY ON-PHONE'}
        tileThreeText={
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
