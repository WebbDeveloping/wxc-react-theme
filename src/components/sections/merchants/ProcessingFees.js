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

const ProcessingFees = ({
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
              <span className='text-color-primary'>Save</span> on processing
              fees,
            </h1>
            <div className='container-xss '>
              <p
                className='m-0 mb-32 reveal-from-bottom'
                data-reveal-delay='400'
              >
                fraud costs and charge backs.
              </p>
              <div className='reveal-from-bottom' data-reveal-delay='600'>
                <div className='flex-row col-sm  m-0'>
                  <h5 className=' m-24'>
                    Use XPay with your existing processing <br /> <br />
                    <span className='fs-50 text-color-primary'>.05%</span>
                    <span className='fs-16 pb-4 text-color-primary'>
                      {' '}
                      + $0.05
                    </span>{' '}
                    <br /> In addition to your current fees, plus $0.00 fraud
                    costs and $0.00 charge back fee*.
                  </h5>
                  <h5 className=' m-24'>
                    Use XPay for all your processing
                    <br />
                    <br />
                    <span className='fs-50 text-color-primary'>2.9%</span>
                    <span className='fs-16 pb-4 text-color-primary'> + $0.30</span>
                    <br />
                    Per transaction, plus $0.00 fraud costs and $0.00 charge
                    back fee*.
                  </h5>
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
            <p>
              <span className='text-color-primary'>*Learn More</span>
            </p>
            <p>Processing fees subject to change.</p>
          </div>
        </div>
      </div>
      {/* <FunnelTiles /> */}
    </section>
  );
};

ProcessingFees.propTypes = propTypes;
ProcessingFees.defaultProps = defaultProps;

export default ProcessingFees;
