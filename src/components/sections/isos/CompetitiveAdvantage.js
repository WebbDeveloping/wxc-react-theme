import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../../utils/SectionProps';
import { Link } from 'react-router-dom';

const propTypes = {
  ...SectionProps.types
};

const defaultProps = {
  ...SectionProps.defaults
};

const CompetitiveAdvantage = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = e => {
    e.preventDefault();
    setVideomodalactive(true);
  };

  const closeModal = e => {
    e.preventDefault();
    setVideomodalactive(false);
  };

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section {...props} className={outerClasses}>
      <div className='container-sm'>
        <div className={innerClasses}>
          <div className='hero-content'>
            <h1
              className='mt-0 mb-16 reveal-from-bottom'
              data-reveal-delay='200'
            >
              THE SEARCH FOR COMPETITIVE ADVANTAGES,
            </h1>
            <div className='container-xs'>
              <p
                className='m-0 mb-32 reveal-from-bottom'
                data-reveal-delay='400'
              >
                in the merchant processing industry.
              </p>
            </div>
          </div>
          <div className='reveal-from-bottom' data-reveal-delay='600'>
            <div className='flex-row col-sm  m-0'>
              <h5 className=' m-24'>
                <span className='text-color-primary'>PROCESSING RATES</span> -
                Competing on processing rates alone does not provide a
                sufficient competitive advantage since industry rates are nearly
                identical.
              </h5>
              <h5 className=' m-24'>
                <span className='text-color-primary'>SERVICE</span> - Claims of
                superior service, even when true, isn't generally enough to
                attract new clients since your compeitors all claim the same
                thing.
              </h5>
            </div>
            <div className='flex-row col-sm  m-0'>
              <h5 className=' m-24'>
                <span className='text-color-primary'>SETUP AND FEES</span> -
                Similar to processing rates, while there is slight variation in
                the industry, this also isn't substantial enough to create a
                competitive advantage.
              </h5>
              <h5 className=' m-24'>
                <span className='text-color-primary'>APPROVALS</span> - Unless
                you do your own underwriting, you're subject to the rules of
                your acquirer/bank and since all banks operate under the same
                regulations, this too is a non-advantage.
              </h5>
            </div>
          </div>
          <br />
          <div className='hero-content'>
            <h1
              className='mt-0 mb-16 reveal-from-bottom'
              data-reveal-delay='200'
            >
              REAL ADVANTAGES MERCHANTS NEED
            </h1>
            {/* <div className='container-xs'>
              <p
                className='m-0 mb-32 reveal-from-bottom'
                data-reveal-delay='400'
              >
                in the merchant processing industry.
              </p>
            </div> */}
          </div>
          <div className='reveal-from-bottom' data-reveal-delay='600'>
            <div className='flex-row col-sm  m-0'>
              <h5 className=' m-24'>
                <span className='text-color-primary'>FRAUD-PROOF</span> - A
                guarantee no other competitor can claim and is important enough
                for merchants to seek after and change their processing to
                obtain.
              </h5>
              <h5 className=' m-24'>
                <span className='text-color-primary'>NO PCI REQUIREMENTS</span>{' '}
                - A technology so robust, merchant PCI requirements consists of
                answering only two questions. Certainly an advantage worth
                changing merchant processors.
              </h5>
            </div>
            <div className='flex-row col-sm  m-0'>
              <h5 className=' m-24'>
                <span className='text-color-primary'>CHARGEBACK REDUCTION</span>
                - For merchants who are plagued with high chargebacks, the
                ability to reduce that burden is paramount. Any merchant
                processor with this ability will certainly attract clients.
              </h5>
              <h5 className=' m-24'>
                <span className='text-color-primary'>MARKETING TOOLS</span> -
                Nearly every merchant is looking for ways to grow their
                business. How many new clients could you win if you offered a
                platform that could revolutionize a merchant's marketing?
              </h5>
            </div>
          </div>
          <br />
          <h1 className='mt-0 mb-16 reveal-from-bottom' data-reveal-delay='200'>
            ...AND MANY OTHER FEATURES THAT WILL PROVIDE YOU WITH REAL
            COMPETITIVE ADVANTAGES.
          </h1>
        </div>
      </div>
    </section>
  );
};

CompetitiveAdvantage.propTypes = propTypes;
CompetitiveAdvantage.defaultProps = defaultProps;

export default CompetitiveAdvantage;
