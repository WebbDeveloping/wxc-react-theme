import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import { Link } from 'react-router-dom';
import Image from '../elements/Image';
import Button from '../elements/Button';
// import '../../assets/css/icons.css';

const propTypes = {
  ...SectionTilesProps.types
};

const defaultProps = {
  ...SectionTilesProps.defaults
};
const FeaturesTiles = ({
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

  return (
    <section {...props} className={outerClasses}>
      <br />
      <br />
      <br />
      <div className='container'>
        <div className={innerClasses}>
          {/* <SectionHeader data={sectionHeader} className='center-content' /> */}
          {/* <div className={tilesClasses}> */}
          <div className='flex-row-center col-sm'>
            <div className='tiles-item reveal-from-bottom card-bg '>
              <div className='tiles-item-inner flex-col h-100'>
                <div className=' mb-16'>
                  <Image
                    src={require('./../../assets/Svg/online_banking.svg')}
                    alt='Features tile icon 01'
                    width={350}
                    height={264}
                  />
                </div>

                <div className='features-tiles-item-content text-left'>
                  <h4 className='mt-0 mb-8 has-underline text-color-secondary'>
                    Personal
                  </h4>
                  <p className='m-0 text-sm'>
                    Advance your personal savings and achieve your goals with
                    competitive deposit products that help you make the most of
                    your money.
                  </p>
                  <br />
                  <Link to='/sign-up'>
                    <Button tag='button' color='secondary' wideMobile>
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div
              className='tiles-item reveal-from-bottom card-bg '
              data-reveal-delay='200'
            >
              <div className='tiles-item-inner flex-col h-100'>
                <div className='mb-16'>
                  <Image
                    src={require('./../../assets/Svg/shop.svg')}
                    alt='Features tile icon 02'
                    width={350}
                    height={264}
                  />
                </div>
                <div className='features-tiles-item-content text-left'>
                  <h4 className='mt-0 mb-8 has-underline text-color-secondary'>
                    Business Banking
                  </h4>
                  <p className='m-0 text-sm'>
                    Our digital technology and industry expertise enables vendor
                    financing programs for business equipment financing.
                  </p>
                  <br />
                  <Link to='/sign-up'>
                    <Button tag='button' color='secondary' wideMobile>
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div
              className='tiles-item reveal-from-bottom card-bg '
              data-reveal-delay='400'
            >
              <div className='tiles-item-inner flex-col h-100'>
                <div className='mb-16'>
                  <Image
                    src={require('./../../assets/Svg/factory.svg')}
                    alt='Features tile icon 03'
                    width={350}
                    height={264}
                  />
                </div>
                <br />
                <br />
                <div className='features-tiles-item-content  text-left '>
                  <h4 className='mt-0 mb-8 has-underline text-color-secondary'>
                    Commercial Banking
                  </h4>
                  <p className='m-0 text-sm'>
                    Businesses rely on us for expertise, agility and banking
                    solutions that bring their ideas into outcomes. extra text
                    here to fix button
                  </p>
                  <br />
                  <Link to='/sign-up'>
                    <Button tag='button' color='secondary' wideMobile>
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
