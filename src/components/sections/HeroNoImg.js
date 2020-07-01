import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';

const propTypes = {
  ...SectionProps.types
};

const defaultProps = {
  ...SectionProps.defaults
};

const HeroNoImg = ({
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
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner flex-row-start ml-32 mb-0 pb-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section {...props} className={outerClasses}>
      <div className={innerClasses}>
        <div className='ml-32 pl-32'>
          <h1
            className='mt-0 reveal-from-left fs-80 cta-col p-32 mb-0'
            data-reveal-delay='200'
          >
            ABOUT
            {/* <span className='text-color-primary fs-80'>XBanc</span> */}
          </h1>
        </div>
      </div>
      <div className='w-100 border-t-b ml-32'>
        <h4 className='fs-14'>OUR STORY IS EPIC</h4>
      </div>
    </section>
  );
};

HeroNoImg.propTypes = propTypes;
HeroNoImg.defaultProps = defaultProps;

export default HeroNoImg;
