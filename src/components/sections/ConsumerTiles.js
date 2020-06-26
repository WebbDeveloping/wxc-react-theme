import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import PhoneAppSection from './PhoneAppSection';
import PhonePic from './PhonePic';
import SubPageHero from './SubPageHero';

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
    'features-tiles section pt-0',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames('flex-row-between col-sm pt-0');

  return (
    <section {...props} className={outerClasses}>
      <br />
      <br />
      <div className='container pt-0'>
        <div className={innerClasses}>
          <div className='p-32 has-bg-color ml-8'>
            <SubPageHero
              title='Ditch monthly bank fees for good.'
              subtitle='Get an XBanc Account with no monthly fees or minimum balance.'
              button1='Get started'
              button2='Read More'
            />
            <hr />
            <hr />
            <div className='reveal-from-left'>
              <PhoneAppSection />
              <PhonePic />
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
