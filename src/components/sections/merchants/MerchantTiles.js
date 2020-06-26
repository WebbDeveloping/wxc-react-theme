import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../../utils/SectionProps';
import ComparisonChart from '../charts/ComparisonChart';
import SubPageHero from '../SubPageHero';
import PhonePic from '../PhonePic';

const propTypes = {
  ...SectionProps.types
};

const defaultProps = {
  ...SectionProps.defaults
};

const MerchantTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
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

  const innerClasses = classNames('container');

  return (
    <section {...props} className={outerClasses}>
    <br/>
    <br/>
      <div className={innerClasses}>
        <div className='p-32 has-bg-color ml-8'>
          <SubPageHero
            title={`No Overdraft up to $50`}
            subtitle={`Avoid overdraft fees with a secure online checking account`}
            button1='Get Started'
            button2='Read More'
          />
        </div>{' '}
        <br/>
        <br/>
        <PhonePic />
        <br/>
        <br/>
        <ComparisonChart />
      </div>
    </section>
  );
};

MerchantTiles.propTypes = propTypes;
MerchantTiles.defaultProps = defaultProps;

export default MerchantTiles;
