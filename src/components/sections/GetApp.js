import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Image from '../elements/Image';

const propTypes = {
  ...SectionProps.types
};

const defaultProps = {
  ...SectionProps.defaults
};

const GetApp = ({
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
              Download our <span className='text-color-primary'>APP!</span>
            </h1>
            <div className='container-xs'>
              <p
                className='m-0 mb-32 reveal-from-bottom'
                data-reveal-delay='400'
              >
                and use wherever you see this sign.
              </p>
              <div className='reveal-from-bottom' data-reveal-delay='200'>
                <Image
                  src={require('./../../assets/images/wxc/xpay_decal.png')}
                  alt='Features split 01'
                  width={176}
                  height={132}
                />
                <br />
                <br />
                <br />
                <ButtonGroup>
                  <Image
                    //No idea why this image stops working.. had to use google play as placeholder
                    // src={require('./../../assets/images/wxc/bt_apphere.png')}
                    src={require('./../../assets/images/wxc/bt_googleplay.png')}
                    alt='Features split 02'
                    width={176}
                    height={132}
                  />
                  <Image
                    src={require('./../../assets/images/wxc/bt_googleplay.png')}
                    alt='Features split 02'
                    width={176}
                    height={132}
                  />
                </ButtonGroup>
                <br />
                <br />
                <Image
                  src={require('./../../assets/images/wxc/apple_coming_soon.png')}
                  alt='Features split 02'
                  width={176}
                  height={132}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

GetApp.propTypes = propTypes;
GetApp.defaultProps = defaultProps;

export default GetApp;
