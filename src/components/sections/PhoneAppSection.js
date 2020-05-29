import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

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
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames('tiles-wrap', pushLeft && 'push-left');

  const sectionHeader = {
    title: '',
    paragraph:
      "This is the world's safest, easiest and most private way to pay."
  };

  return (
    <section {...props} className={outerClasses}>
      <div className='container'>
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className='center-content' />
          <div className={tilesClasses}>
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
                {' '}
                {/* tiles-item-inner */}
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
          </div>
        </div>
      </div>
    </section>
  );
};

PhoneAppSection.propTypes = propTypes;
PhoneAppSection.defaultProps = defaultProps;

export default PhoneAppSection;
