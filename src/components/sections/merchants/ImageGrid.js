import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../../utils/SectionProps';
import SectionHeader from '.././partials/SectionHeader';
import Image from '../../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
};

const defaultProps = {
  ...SectionTilesProps.defaults
};

const ImageGrid = ({
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
          {/* <SectionHeader data={sectionHeader} className='center-content' /> */}
          <div className={tilesClasses}>
            <div
              className='tiles-item-merchant reveal-from-right p-12 center-content'
              data-reveal-delay='200'
            >
              <div className='tiles-item-inner'>
                <Image
                  src={require('../../../assets/images/wxc/merch/merch_1.png')}
                  alt='Features tile icon 01'
                  width={'auto'}
                  height={'100%'}
                />
                <br />
                <p>Meet your new chekcout</p>
              </div>
            </div>

            <div className='tiles-item-merchant reveal-from-bottom p-12 center-content'>
              <div className='tiles-item-inner'>
                <Image
                  src={require('../../../assets/images/wxc/merch/merch_2.png')}
                  alt='Features tile icon 01'
                  width={'auto'}
                  height={'100%'}
                />
                <br />
                <p>Meet your new product Purchase Codes.</p>
              </div>
            </div>

            <div
              className='tiles-item-merchant reveal-from-left p-12 center-content'
              data-reveal-delay='200'
            >
              <div className='tiles-item-inner'>
                <Image
                  src={require('../../../assets/images/wxc/merch/merch_3.png')}
                  alt='Features tile icon 01'
                  width={'auto'}
                  height={'100%'}
                />
                <br />
                <p>Your POS can now be anywhere!</p>
              </div>
            </div>

            <div
              className='tiles-item-merchant reveal-from-left p-12 center-content'
              data-reveal-delay='200'
            >
              <div className='tiles-item-inner'>
                <Image
                  src={require('../../../assets/images/wxc/merch/merch_4.png')}
                  alt='Features tile icon 01'
                  width={'auto'}
                  height={'100%'}
                />
                <br />
                <p>
                  Process a purchase right in an email. No more click-throughs.
                </p>
              </div>
            </div>

            <div
              className='tiles-item-merchant reveal-from-left p-12 center-content'
              data-reveal-delay='200'
            >
              <div className='tiles-item-inner'>
                <Image
                  src={require('../../../assets/images/wxc/merch/merch_5.png')}
                  alt='Features tile icon 01'
                  width={'auto'}
                  height={'100%'}
                />
                <br />
                <p>Your social media posts can now be a POS.</p>
              </div>
            </div>

            <div
              className='tiles-item-merchant reveal-from-left p-12 center-content'
              data-reveal-delay='200'
            >
              <div className='tiles-item-inner'>
                <Image
                  src={require('../../../assets/images/wxc/merch/merch_6.png')}
                  alt='Features tile icon 01'
                  width={'auto'}
                  height={'100%'}
                />
                <br />
                <p>Don't just hand out your business card, hand out a POS.</p>
              </div>
            </div>

            <div
              className='tiles-item-merchant reveal-from-left p-12 center-content'
              data-reveal-delay='200'
            >
              <div className='tiles-item-inner'>
                <Image
                  src={require('../../../assets/images/wxc/merch/merch_7.png')}
                  alt='Features tile icon 01'
                  width={'auto'}
                  height={'100%'}
                />
                <br />
                <p>Put a POS call-to-action on all your advertising.</p>
              </div>
            </div>

            <div
              className='tiles-item-merchant reveal-from-left p-12 center-content'
              data-reveal-delay='200'
            >
              <div className='tiles-item-inner'>
                <Image
                  src={require('../../../assets/images/wxc/merch/merch_8.png')}
                  alt='Features tile icon 01'
                  width={'auto'}
                  height={'100%'}
                />
                <br />
                <p>You can even turn the TV into your POS.</p>
              </div>
            </div>

            <div
              className='tiles-item-merchant reveal-from-left p-12 center-content'
              data-reveal-delay='200'
            >
              <div className='tiles-item-inner'>
                <Image
                  src={require('../../../assets/images/wxc/merch/merch_9.png')}
                  alt='Features tile icon 01'
                  width={'auto'}
                  height={'100%'}
                />
                <br />
                <p>Let your customers purchase right from your catalog.</p>
              </div>
            </div>

            <div
              className='tiles-item-merchant reveal-from-left p-12 center-content'
              data-reveal-delay='200'
            >
              <div className='tiles-item-inner'>
                <Image
                  src={require('../../../assets/images/wxc/merch/merch_10.png')}
                  alt='Features tile icon 01'
                  width={'auto'}
                  height={'100%'}
                />
                <br />
                <p>Make that sales letter even more powerful with a POS.</p>
              </div>
            </div>

            <div
              className='tiles-item-merchant reveal-from-left p-12 center-content'
              data-reveal-delay='200'
            >
              <div className='tiles-item-inner'>
                <Image
                  src={require('../../../assets/images/wxc/merch/merch_11.png')}
                  alt='Features tile icon 01'
                  width={'auto'}
                  height={'100%'}
                />
                <br />
                <p>It's now official, size doesn't matter.</p>
              </div>
            </div>

            <div
              className='tiles-item-merchant reveal-from-left p-12 center-content'
              data-reveal-delay='200'
            >
              <div className='tiles-item-inner'>
                <Image
                  src={require('../../../assets/images/wxc/merch/merch_12.png')}
                  alt='Features tile icon 01'
                  width={'100%'}
                  height={'auto'}
                />
                <br />
                <p>Your POS anywhere, limited only by your imagination!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

ImageGrid.propTypes = propTypes;
ImageGrid.defaultProps = defaultProps;

export default ImageGrid;
