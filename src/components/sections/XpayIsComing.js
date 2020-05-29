import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionTilesProps.types
};

const defaultProps = {
  ...SectionTilesProps.defaults
};

const XpayIsComing = ({
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
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  // TODO: MAKE THIS NO WRAP on large, COLUMN SMALL
  const tilesClasses = classNames('tiles-wrap', pushLeft && 'push-left');

  const sectionHeader = {
    title: 'XPAY IS COMING',
    paragraph: 'Get Ready, Act Now!'
  };

  return (
    <section {...props} className={outerClasses}>
      <div className='container'>
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className='center-content' />
          <div className='flex-row-center col-sm'>
            <div
              className='tiles-item reveal-from-right'
              data-reveal-delay='200'
            >
              <div className='tiles-item-inner'>
                <div className=''>
                  <h4>Consumers</h4>
                  <p className='text-sm mb-0 text-dark'>
                    <span className='testimonial-item-link'>
                      <a href='#0'>Learn</a>
                    </span>{' '}
                    how you can get ready to use XPay where you shop.
                  </p>
                </div>
              </div>
            </div>

            <div className='tiles-item reveal-from-bottom'>
              <div className='tiles-item-inner'>
                <div className=''>
                  <h4>MERCHANTS</h4>
                  <p className='text-sm mb-0 text-dark'>
                    <span className='testimonial-item-link'>
                      <a href='#0'>Learn</a>
                    </span>{' '}
                    how to start accepting XPay and protecting your customers.
                  </p>
                </div>
              </div>
            </div>

            <div
              className='tiles-item reveal-from-left'
              data-reveal-delay='200'
            >
              <div className='tiles-item-inner'>
                <div className=''>
                  <h4>ACQUIRERS</h4>
                  <p className='text-sm mb-0 text-dark'>
                    <span className='testimonial-item-link'>
                      <a href='#0'>Learn</a>
                    </span>{' '}
                    how to make XPay available to all your merchants.
                  </p>
                </div>
              </div>
            </div>

            <div
              className='tiles-item reveal-from-left'
              data-reveal-delay='200'
            >
              <div className='tiles-item-inner'>
                <div className=''>
                  <h4>BANKERS</h4>
                  <p className='text-sm mb-0 text-dark'>
                    <span className='testimonial-item-link'>
                      <a href='#0'>Learn</a>
                    </span>{' '}
                    how to issue your own branded XPay virtual cards.
                  </p>
                </div>
                {/* <div className='testimonial-item-footer text-xs mt-32 mb-0 has-top-divider'>
                  <span className='testimonial-item-name text-color-high'>
                    Ben Stafford
                  </span>
                  <span className='text-color-low'> / </span>
                  <span className='testimonial-item-link'>
                    <a href='#0'>AppName</a>
                  </span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

XpayIsComing.propTypes = propTypes;
XpayIsComing.defaultProps = defaultProps;

export default XpayIsComing;
