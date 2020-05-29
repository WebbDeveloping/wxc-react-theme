import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../../utils/SectionProps';
import ButtonGroup from '../../elements/ButtonGroup';
import Button from '../../elements/Button';
import Image from '../../elements/Image';
import Modal from '../../elements/Modal';
import ImageGrid from './ImageGrid';
const compImg = '../../../assets/images/wxc/icons/icon_computer.png';

const propTypes = {
  ...SectionProps.types
};

const defaultProps = {
  ...SectionProps.defaults
};

const GuaranteedFraudProof = ({
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
    //   how do i remove the padding-top from this section
    <section {...props} className={outerClasses}>
      <div className='container-sm'>
        <div className={innerClasses}>
          <div className='hero-content'>
            <h1
              className='mt-0 mb-16 reveal-from-bottom'
              data-reveal-delay='200'
            >
              GUARANTEED FRAUD-PROOF TRANSACTIONS AND MORE!
            </h1>
            <br />
            <br />
            <br />
            <div className='flex-row col-sm'>
              {/* CARD ONE */}
              <div className='tiles-item-row reveal-from-bottom flex-col-center'>
                <div className='flex-row col-sm-center'>
                  <div className='mb-16'>
                    <Image
                      //   src={require('../../../assets/images/wxc/icons/icon_checkshield.png')}
                      src={require('../../../assets/Svg/shield.svg')}
                      alt='Features tile icon 01'
                      width={48}
                      height={48}
                    />
                  </div>
                  <div className='features-tiles-item-content text-left justify-content-col ml-24'>
                    <h6 className='mt-0 mb-4 ta-c-mobile'>
                      {' '}
                      Faster in-person check-outs, no card swiping, chip
                      inserting and failed cards or equipment.
                    </h6>
                  </div>
                </div>
                <br />
                <div className='flex-row col-sm-center'>
                  <div className='mb-16'>
                    <Image
                      //   src={require('../../../assets/images/wxc/icons/icon_checkshield.png')}
                      src={require('../../../assets/Svg/shield.svg')}
                      alt='Features tile icon 01'
                      width={48}
                      height={48}
                    />
                  </div>
                  <div className='features-tiles-item-content text-left justify-content-col ml-24'>
                    <h6 className='mt-0 mb-4 ta-c-mobile'>
                      No PCI compliance liability when XPay is used exclusively
                      for your transactions.
                    </h6>
                  </div>
                </div>
                <br />
                <div className='flex-row col-sm-center'>
                  <div className='mb-16'>
                    <Image
                      //   src={require('../../../assets/images/wxc/icons/icon_checkshield.png')}
                      src={require('../../../assets/Svg/shield.svg')}
                      alt='Features tile icon 01'
                      width={48}
                      height={48}
                    />
                  </div>
                  <div className='features-tiles-item-content text-left justify-content-col ml-24'>
                    <h6 className='mt-0 mb-4 ta-c-mobile'>
                      Easy to use and train employees. Your staff can be trained
                      in 5 minutes.
                    </h6>
                  </div>
                </div>
                <br />
                <div className='flex-row col-sm-center'>
                  <div className='mb-16'>
                    <Image
                      //   src={require('../../../assets/images/wxc/icons/icon_checkshield.png')}
                      src={require('../../../assets/Svg/shield.svg')}
                      alt='Features tile icon 01'
                      width={48}
                      height={48}
                    />
                  </div>
                  <div className='features-tiles-item-content text-left justify-content-col ml-24'>
                    <h6 className='mt-0 mb-4 ta-c-mobile'>
                      Use with your current processing provider or take
                      advantage of World XPay's discounted rates.
                    </h6>
                  </div>
                </div>
                <br />
              </div>
              {/* CARD TWO */}
              <div className='tiles-item-row flex-col-center reveal-from-bottom'>
                <div className='flex-row col-sm-center'>
                  <div className='mb-16'>
                    <Image
                      //   src={require('../../../assets/images/wxc/icons/icon_checkshield.png')}
                      src={require('../../../assets/Svg/shield.svg')}
                      alt='Features tile icon 01'
                      width={48}
                      height={48}
                    />
                  </div>
                  <div className='features-tiles-item-content text-left justify-content-col ml-24'>
                    <h6 className='mt-0 mb-4 ta-c-mobile'>
                      Faster online check-outs, no more forms, invalid entries
                      and frustrated customers.
                    </h6>
                  </div>
                </div>
                <br />
                <div className='flex-row col-sm-center'>
                  <div className='mb-16'>
                    <Image
                      //   src={require('../../../assets/images/wxc/icons/icon_checkshield.png')}
                      src={require('../../../assets/Svg/shield.svg')}
                      alt='Features tile icon 01'
                      width={48}
                      height={48}
                    />
                  </div>
                  <div className='features-tiles-item-content text-left justify-content-col ml-24'>
                    <h6 className='mt-0 mb-4 ta-c-mobile'>
                      Provide your customers with increased financial privacy.
                      Provide your customers with increased financial privacy.
                    </h6>
                  </div>
                </div>
                <br />
                <div className='flex-row col-sm-center'>
                  <div className='mb-16'>
                    <Image
                      //   src={require('../../../assets/images/wxc/icons/icon_checkshield.png')}
                      src={require('../../../assets/Svg/shield.svg')}
                      alt='Features tile icon 01'
                      width={48}
                      height={48}
                    />
                  </div>
                  <div className='features-tiles-item-content text-left justify-content-col ml-24'>
                    <h6 className='mt-0 mb-4 ta-c-mobile'>
                      Eliminate employee fraud and theft of customer's cards,
                      thereby reducing your liability. thereby reducing your
                      liability.
                    </h6>
                  </div>
                </div>
                <br />
                <div className='flex-row col-sm-center'>
                  <div className='mb-16'>
                    <Image
                      //   src={require('../../../assets/images/wxc/icons/icon_checkshield.png')}
                      src={require('../../../assets/Svg/shield.svg')}
                      alt='Features tile icon 01'
                      width={48}
                      height={48}
                    />
                  </div>
                  <div className='features-tiles-item-content text-left justify-content-col ml-24'>
                    <h6 className='mt-0 mb-4 ta-c-mobile'>
                      Super-charge your marketing materials by inserting
                      Purchase Codes, which will allow purchases to be completed
                      right from the flyer, ad or email.
                    </h6>
                  </div>
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

GuaranteedFraudProof.propTypes = propTypes;
GuaranteedFraudProof.defaultProps = defaultProps;

export default GuaranteedFraudProof;
