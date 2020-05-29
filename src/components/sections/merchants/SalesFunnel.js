import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../../utils/SectionProps';
import ButtonGroup from '../../elements/ButtonGroup';
import Button from '../../elements/Button';
import Image from '../../elements/Image';
import Modal from '../../elements/Modal';
import ImageGrid from './ImageGrid';
const compImg = '../../../assets/images/wxc/icons/icon_computer.png';
const carrot = require('../../../assets/images/wxc/icons/icon_carrot_stick.png');

const propTypes = {
  ...SectionProps.types
};

const defaultProps = {
  ...SectionProps.defaults
};

const SalesFunnel = ({
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
              SALES FUNNELS ARE NOW OFFICIALLY OLD SCHOOL!
            </h1>
            <div className='container-xs'>
              <p
                className='m-0 mb-32 reveal-from-bottom'
                data-reveal-delay='400'
              >
                Turn all your marketing pieces into a point of sale!
              </p>
            </div>

            <div className='tiles-item-row reveal-from-bottom'>
              <div className='tiles-item-inner-row col-sm-center'>
                <div className='features-tiles-item-header pr-8'>
                  <div className='features-tiles-item-image-merchant mb-16'>
                    <Image
                      src={require('../../../assets/Svg/filter.svg')}
                      alt='Features tile icon 01'
                      width={96}
                      height={96}
                    />
                  </div>
                </div>
                <div className='features-tiles-item-content text-left justify-content-col ml-24'>
                  <h4 className='mt-0 mb-8 ta-c-mobile text-color-primary'>
                    Sales Funnel
                  </h4>
                  <p className='m-0 text-sm ta-c-mobile'>
                    That complicated marketing science of winning customers
                    through the strategic use of touch-points, education,
                    investigation, evaluation, follow-up, etc. to drip on and
                    lead potential buyers to the promised land known as
                    "checkout". Today, sales funnel experts are in high demand
                    and charge the industry's highest rates. All this to simply
                    get someone to buy your product.
                  </p>
                </div>
              </div>
            </div>

            <div className='tiles-item-row reveal-from-bottom'>
              <div className='tiles-item-inner-row col-sm'>
                <div className='features-tiles-item-content text-right justify-content-col mr-24'>
                  {/* <h4 className='mt-0 mb-8 ta-c-mobile'>Something else</h4> */}
                  <p className='m-0 text-sm ta-c-mobile'>
                    All funnels assume you must prod your prospects carefully
                    along the path that leads to your store, or website since
                    this is where your products are displayed and where the
                    checkout is. With XPay, your checkout is in the palm of
                    everyone's hand and
                    <span className='text-color-primary'>
                      your product can be everywhere!
                    </span>
                  </p>
                </div>
                <br />
                <div className='features-tiles-item-header pl-8'>
                  <div className='features-tiles-item-image-merchant mb-16 spacer-8-mobile'>
                    <Image
                      src={require('../../../assets/Svg/qrcode.svg')}
                      alt='Features tile icon 01'
                      width={77}
                      height={77}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ImageGrid />
    </section>
  );
};

SalesFunnel.propTypes = propTypes;
SalesFunnel.defaultProps = defaultProps;

export default SalesFunnel;
