import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
// import '../../assets/css/icons.css';

const propTypes = {
  ...SectionTilesProps.types
};

const defaultProps = {
  ...SectionTilesProps.defaults
};
const ConsumerTiles = ({
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
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Life is better,',
    paragraph: 'when you know your purchase was safe, secure and private.'
  };

  return (
    <section {...props} className={outerClasses}>
      <br />
      <br />
      <div className='container'>
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className='center-content' />

          <div className={tilesClasses}>
            <div className='tiles-item reveal-from-bottom'>
              <div className='tiles-item-inner'>
                <div className='features-tiles-item-header'>
                  <div className=' mb-16'>
                    {/* features-tiles-item-image */}
                    <Image
                      src={require('./../../assets/Svg/unlocked.svg')}
                      alt='Features tile icon 01'
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className='features-tiles-item-content'>
                  <h4 className='mt-0 mb-8'>THEFT HAPPENS</h4>
                  <p className='m-0 text-sm'>
                    The overwhelming majority of all payment card theft happens
                    at the local level, that brief amount of time when you hand
                    your card to a cashier.
                  </p>
                </div>
              </div>
            </div>

            <div
              className='tiles-item reveal-from-bottom'
              data-reveal-delay='200'
            >
              <div className='tiles-item-inner'>
                <div className='features-tiles-item-header'>
                  <div className='mb-16'>
                    <Image
                      src={require('./../../assets/Svg/exit.svg')}
                      alt='Features tile icon 02'
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className='features-tiles-item-content'>
                  <h4 className='mt-0 mb-8'>THEFT OPT-OUT</h4>
                  <p className='m-0 text-sm'>
                    Say "No more!" to the theft gamble. Sometimes the only way
                    to win is not to play. XPay takes you and your cards out of
                    the game completely.
                  </p>
                </div>
              </div>
            </div>

            <div
              className='tiles-item reveal-from-bottom'
              data-reveal-delay='400'
            >
              <div className='tiles-item-inner'>
                <div className='features-tiles-item-header'>
                  <div className='mb-16'>
                    <Image
                      src={require('./../../assets/Svg/checkmark.svg')}
                      alt='Features tile icon 03'
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className='features-tiles-item-content'>
                  <h4 className='mt-0 mb-8'>GUARANTEED</h4>
                  <p className='m-0 text-sm'>
                    Technology so powerful, it's guaranteed to keep you safe
                    during the most dangerous part of the credit and debit card
                    payment process, checkout.
                  </p>
                </div>
              </div>
            </div>

            <div className='tiles-item reveal-from-bottom'>
              <div className='tiles-item-inner'>
                <div className='features-tiles-item-header'>
                  <div className='mb-16'>
                    <Image
                      src={require('./../../assets/Svg/heart.svg')}
                      alt='Features tile icon 04'
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className='features-tiles-item-content'>
                  <h4 className='mt-0 mb-8'>EASY</h4>
                  <p className='m-0 text-sm'>
                    No more worn-out cards, unreadable chips, or so-called
                    smart-cards that aren't. Make purchases online or at the
                    register with only point-and-click.
                  </p>
                </div>
              </div>
            </div>

            <div
              className='tiles-item reveal-from-bottom'
              data-reveal-delay='200'
            >
              <div className='tiles-item-inner'>
                <div className='features-tiles-item-header'>
                  <div className='mb-16'>
                    <Image
                      src={require('./../../assets/Svg/credit-card.svg')}
                      alt='Features tile icon 05'
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className='features-tiles-item-content'>
                  <h4 className='mt-0 mb-8'>BETTER & SMARTER</h4>
                  <p className='m-0 text-sm'>
                    How many cards are in your wallet? When do they expire? How
                    long would it take you to notice one was missing? Now you
                    can leave your cards at home.
                  </p>
                </div>
              </div>
            </div>

            <div
              className='tiles-item reveal-from-bottom'
              data-reveal-delay='400'
            >
              <div className='tiles-item-inner'>
                <div className='features-tiles-item-header'>
                  <div className=' mb-16'>
                    <Image
                      src={require('./../../assets/Svg/sphere.svg')}
                      alt='Features tile icon 06'
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className='features-tiles-item-content'>
                  <h4 className='mt-0 mb-8'>NEVER MISS A THING</h4>
                  <p className='m-0 text-sm'>
                    XPay only changes the way your cards work. You'll continue
                    to earn and receive all the cashback bonuses, points, miles
                    and other benefits you love.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

ConsumerTiles.propTypes = propTypes;
ConsumerTiles.defaultProps = defaultProps;

export default ConsumerTiles;
