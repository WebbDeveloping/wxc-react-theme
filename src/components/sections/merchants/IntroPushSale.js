import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../../utils/SectionProps';
import ButtonGroup from '../../elements/ButtonGroup';
import Button from '../../elements/Button';
import { Link } from 'react-router-dom';
import MerchantTiles from './MerchantTiles';
import FunnelTiles from './FunnelTiles';

const propTypes = {
  ...SectionProps.types
};

const defaultProps = {
  ...SectionProps.defaults
};

const IntroPushSale = ({
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
              Introducing <span className='text-color-primary'>PUSH-SALE</span>
            </h1>
            <div className='container-xss'>
              <p
                className='m-0 mb-32 reveal-from-bottom'
                data-reveal-delay='400'
              >
                XPay makes the marketing pipe dream a reality!
              </p>
              <div className='reveal-from-bottom' data-reveal-delay='600'>
                <div className='flex-row col-sm  m-0'>
                  <h5 className=' m-24'>
                    Way back in the 90's, marketers dreamed of facilitating
                    transactions in an email so the customer didn't have to
                    click to a website. Those dreams were quickly doused because
                    of all the security issues with sending forms and scripts in
                    an email. That's when the click-through statistic was born—
                    a measurement of how well the marketing got the customer to
                    a place where they could actually make a purchase.
                  </h5>
                  <h5 className=' m-24'>
                    Marketers quickly learned that every time a user had to
                    click, they lost large percentages of customers. Today,
                    email marketing is nearly the same as old direct mail
                    conversion rates, between 1 and 3%. With a Push Sale, there
                    is only one action, one click and that click is{' '}
                    <span className='text-color-primary'>PURCHASE</span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FunnelTiles />
    </section>
  );
};

IntroPushSale.propTypes = propTypes;
IntroPushSale.defaultProps = defaultProps;

export default IntroPushSale;
