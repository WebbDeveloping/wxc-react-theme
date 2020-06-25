import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import ProcessingFees from './merchants/ProcessingFees';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import Button from '../elements/Button';

const propTypes = {
  ...SectionTilesProps.types
};

const defaultProps = {
  ...SectionTilesProps.defaults
};

const PhoneAppSection = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames('tiles-wrap', pushLeft && 'push-left');

  const sectionHeader = {
    title: '40+ Website Elements',
    paragraph: ''
  };

  return (
    <section {...props} className={outerClasses}>
      <div className='container'>
        <div className={innerClasses}>
          <div className='flex-row-center'>
            <div className='p-32 mr-16'>
              <Image
                src={require('./../../assets/Svg/deliveries.svg')}
                alt='Features split 01'
                width={528}
                height={396}
              />
            </div>
            <div className='p-32'>
              <h2 className=''>
                It’s time for a bank account <br /> that treats you better.
              </h2>
              <br />
              <ul>
                <li>
                  No monthly fees. No Fee Overdraft. No foreign transaction
                  fees. No debit card replacement fees.
                </li>
                <li>
                  No minimum balance requirement. We don’t charge fees based on
                  your balance.{' '}
                </li>
                <li>
                  No fees at 55,000+ Allpoint® ATMs in places you already shop
                </li>
                <li>
                  Helpful Customer Service. We’re available every day except
                  federal holidays.
                </li>
                <li>
                  Plus, you can save automatically with a high-yield XBanc
                  Savings Account.
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <div className='flex-row-center'>
            <div className='p-32'>
              <h2 className=''>
                Know when your account <br /> balance changes.
              </h2>
              <br />
              <p>
                Push notifications instantly alert you when there’s a <br />
                deposit to or a withdrawal from your XBanc <br /> 
                Account and when your debit card is used for a <br />
                purchase or cash withdrawal.
              </p>
            </div>
            <div className='p-32 mr-16'>
              <Image
                src={require('./../../assets/Svg/orderconfirmed.svg')}
                alt='Features split 01'
                width={528}
                height={396}
              />
            </div>
          </div>
          <hr />
          <ProcessingFees />
          {/* <div className={tilesClasses}>
            <div
              className='tiles-item-phone reveal-from-right center-content'
              data-reveal-delay='200'
            >
              <h2>Safe</h2>
              <div className=''>
                <div className='features-tiles-item-header'>
                  <div>
                    <Image
                      src={require('./../../assets/images/wxc/app_home.png')}
                      alt='Features split 01'
                      width={528}
                      height={396}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className='tiles-item-phone reveal-from-bottom center-content'>
              <h2>Easy</h2>
              <div className=''>
                <div className='features-tiles-item-header'>
                  <div>
                    <Image
                      src={require('./../../assets/images/wxc/app_timeline.png')}
                      alt='Features split 01'
                      width={528}
                      height={396}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div
              className='tiles-item-phone reveal-from-left center-content'
              data-reveal-delay='200'
            >
              <h2>Private</h2>
              <div className=''>
                <div className='features-tiles-item-header'>
                  <div>
                    <Image
                      src={require('./../../assets/images/wxc/app_wallet.png')}
                      alt='Features split 01'
                      width={528}
                      height={396}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

PhoneAppSection.propTypes = propTypes;
PhoneAppSection.defaultProps = defaultProps;

export default PhoneAppSection;
