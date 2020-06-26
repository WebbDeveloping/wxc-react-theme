import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';

const propTypes = {
  ...SectionProps.types
};

const defaultProps = {
  ...SectionProps.defaults
};

const NorthRollOut = ({
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
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section {...props} className={outerClasses}>
      <div className='container-sm'>
        <div className={innerClasses}>
          <div className='hero-content'>
            <h1
              className='mt-0 mb-16 reveal-from-bottom'
              data-reveal-delay='200'
            >
              NORTH AMERICAN ROLLOUT
            </h1>
            <div className='container-xs'>
              <p
                className='m-0 mb-32 reveal-from-bottom'
                data-reveal-delay='400'
              >
                World XPay began rolling out in North America in 2019. Early
                adopters may be entitled to free apps, processing discounts and
                more. Consumers can download the app from the app stores or
                here. If you are a merchant, acquirer or banker with a question,
                you may contact us using the link below.
              </p>
              <div className='reveal-from-bottom' data-reveal-delay='600'>
                <ButtonGroup>
                  <Button
                    tag='button'
                    color='primary'
                    wideMobile
                  >
                    PROFESSIONAL CONTACT
                  </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

NorthRollOut.propTypes = propTypes;
NorthRollOut.defaultProps = defaultProps;

export default NorthRollOut;
