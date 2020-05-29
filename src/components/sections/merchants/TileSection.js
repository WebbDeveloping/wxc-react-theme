import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../../utils/SectionProps';
import SectionHeader from '../partials/SectionHeader';
import Image from '../../elements/Image';
// import '../../assets/css/icons.css';

const propTypes = {
  ...SectionTilesProps.types
};

const defaultProps = {
  ...SectionTilesProps.defaults
};
const TileSection = ({
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
    title: 'Show You Care',
    paragraph: 'Providing your customers with a private way to pay.'
  };
  const {
    tileOneHead,
    tileTwoHead,
    tileThreeHead,
    tileOneText,
    tileTwoText,
    tileThreeText
  } = props;

  return (
    <section {...props}>
      <div className='container'>
        <div className={innerClasses}>
          {/* <SectionHeader data={sectionHeader} className='center-content' /> */}
          <div className='flex-row col-sm'>
            <div className='tiles-item reveal-from-bottom'>
              <div className='tiles-item-inner'>
                <div className='features-tiles-item-header'>
                  <div className='features-tiles-item-image-merchant mb-16'>
                    <Image
                      src={require('../../../assets/Svg/display.svg')}
                      alt='Features tile icon 01'
                      width={96}
                      height={96}
                    />
                  </div>
                </div>

                <div className='features-tiles-item-content  flex-col-center center-content'>
                  <h4 className='mt-0 mb-8'>{tileOneHead}</h4>
                  <p className='m-0 text-sm'>{tileOneText}</p>
                </div>
              </div>
            </div>

            <div
              className='tiles-item reveal-from-bottom'
              data-reveal-delay='200'
            >
              <div className='tiles-item-inner'>
                <div className='features-tiles-item-header'>
                  <div className='features-tiles-item-image-merchant mb-16'>
                    <Image
                      src={require('../../../assets/Svg/office.svg')}
                      alt='Features tile icon 02'
                      width={96}
                      height={96}
                    />
                  </div>
                </div>
                <div className='features-tiles-item-content flex-col-center center-content'>
                  <h4 className='mt-0 mb-8'>{tileTwoHead}</h4>
                  <p className='m-0 text-sm'>{tileTwoText}</p>
                </div>
              </div>
            </div>

            <div
              className='tiles-item reveal-from-bottom'
              data-reveal-delay='400'
            >
              <div className='tiles-item-inner'>
                <div className='features-tiles-item-header'>
                  <div className='features-tiles-item-image-merchant mb-16'>
                    <Image
                      src={require('../../../assets/Svg/headphones.svg')}
                      alt='Features tile icon 03'
                      width={96}
                      height={96}
                    />
                  </div>
                </div>
                <div className='features-tiles-item-content flex-col-center center-content'>
                  <h4 className='mt-0 mb-8'>{tileThreeHead}</h4>
                  <p className='m-0 text-sm'>{tileThreeText}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

TileSection.propTypes = propTypes;
TileSection.defaultProps = defaultProps;

export default TileSection;
