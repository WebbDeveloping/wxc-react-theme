import React from 'react';
import classNames from 'classnames';
import Button from '../../elements/Button';
import { Link } from 'react-router-dom';
import Image from '../../elements/Image';
import { ScrollToTopControlller } from '../../../utils/ScrollToTop';

export default function TextImage({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) {
  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );
  return (
    <section {...props} className={outerClasses}>
      <div className='lg-pl-32 lg-pr-32 bg-color-light-2 flex-row-around col-sm'>
        <div className='hero-content flex-col-center p-32 lg-mr-32 reveal-from-left sm-p-16'>
          <Image
            src={require('../../../assets/Svg/lightbulb_moment.svg')}
            height={450}
            width={450}
          />
        </div>
        <div className='img-text flex-col-center lg-mr-32 reveal-from-right '>
          <h1 className='mb-0 '>
            <span className='text-color-secondary'>XWORLD</span> is the new
          </h1>
          <h1 className='mb-4 mt-4 '>secure way to pay</h1>
          <div className='container-xs'>
            <p className=' m-4'>We take your security seriously</p>
            <div className='pt-8'>
              {/* <ScrollToTopControlller > */}
              <Link to='/sign-up'>
                <Button tag='button' color='secondary'>
                  Get Started
                </Button>
              </Link>
              {/* </ScrollToTopControlller > */}
              {/* <ScrollToTopControlller /> */}
              
            </div>
            <br className='lg-hide' />
            <br className='lg-hide' />
            <br className='lg-hide' />
          </div>
        </div>
      </div>
    </section>
  );
}
