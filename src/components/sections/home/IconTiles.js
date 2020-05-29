import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../../utils/SectionProps';
// import SectionHeader from './partials/SectionHeader';
import Image from '../../elements/Image';
import Button from '../../elements/Button';
// import '../../assets/css/icons.css';

const propTypes = {
  ...SectionTilesProps.types
};

const defaultProps = {
  ...SectionTilesProps.defaults
};
const IconTiles = ({
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
    title: 'TIME FOR A BETTER WAY TO PAY!',
    paragraph: 'Fraud-proof credit and debit cards are finally here.'
  };

  return (
    <section {...props} className={outerClasses}>
      <br />
      <br />
      <br />
      <div className='container'>
        <div className={innerClasses}>
          <div className='flex-row-around col-sm w-100'>
            <div className='tiles-item reveal-from-bottom card-bg   m-16 align-item'>
              <div className='tiles-item-inner align-item flex-col-between'>
                <div className=' flex-col'>
                  <div className='max-height mb-16'>
                    <img
                      className='max-height'
                      src={require('../../../assets/Svg/remotely.svg')}
                      alt='Features tile icon 01'
                      width={350}
                      height={264}
                    />
                  </div>
                </div>
                <div className='features-tiles-item-content text-left'>
                  <h4 className='mt-0 mb-8 has-underline text-color-secondary'>Personal Banking</h4>
                  <p className='m-0 text-sm'>
                    Advance your personal savings and achieve your goals with
                    competitive deposit products that help you make the most of
                    your money.
                  </p>
                  <br />
                  <Button
                    tag='a'
                    color='secondary'
                    wideMobile
                    // href='https://world-xchange.com/index.php'
                  >
                    Get started
                  </Button>
                </div>
              </div>
            </div>

            <div className='tiles-item reveal-from-bottom card-bg   m-16 align-item'>
              <div className='tiles-item-inner align-item flex-col-between'>
                <div className='flex-col'>
                  <div className=' mb-16 max-height w-100'>
                    <img
                      className='max-height'
                      src={require('../../../assets/Svg/factors.svg')}
                      alt='Features tile icon 01'
                      width={350}
                      height={264}
                    />
                  </div>
                </div>
                <div className='features-tiles-item-content text-left'>
                  <h4 className='mt-0 mb-8 has-underline text-color-secondary'>Business Banking</h4>
                  <p className='m-0 text-sm'>
                    Our digital technology and industry expertise enables vendor
                    financing programs for business equipment financing.
                  </p>
                  <br />
                  <Button
                    tag='a'
                    color='secondary'
                    wideMobile
                    // href='https://world-xchange.com/index.php'
                  >
                    Get started
                  </Button>
                </div>
              </div>
            </div>

            <div className='tiles-item reveal-from-bottom card-bg   m-16 align-item'>
              <div className='tiles-item-inner align-item flex-col-between'>
                <div className=' flex-col'>
                  <div className=' mb-16 max-height'>
                    <img
                      className='max-height'
                      // src={require('../../../assets/Svg/remotely.svg')}
                      src={require('../../../assets/Svg/metrics.svg')}
                      alt='Features tile icon 01'
                      width={350}
                      height={264}
                    />
                  </div>
                </div>
                <div className='features-tiles-item-content text-left'>
                  <h4 className='mt-0 mb-8 has-underline text-color-secondary'>
                    Commercial Banking
                  </h4>
                  <p className='m-0 text-sm'>
                    Businesses rely on us for expertise, agility and banking
                    solutions that bring their ideas into outcomes. extra text
                    here to fix button
                  </p>
                  <br />
                  <Button
                    tag='a'
                    color='secondary'
                    wideMobile
                    // href='https://world-xchange.com/index.php'
                  >
                    Get started
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

IconTiles.propTypes = propTypes;
IconTiles.defaultProps = defaultProps;

export default IconTiles;
