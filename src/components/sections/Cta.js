import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Input from '../elements/Input';

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool
};

const defaultProps = {
  ...SectionProps.defaults,
  split: false
};

const Cta = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  ...props
}) => {
  const outerClasses = classNames(
    'cta section center-content-mobile reveal-from-bottom',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    // 'cta-inner section-inner ',
    'flex-col col-sm',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
    split && 'cta-split'
  );

  return (
    <section {...props} className={outerClasses}>
      <div className='container'>
        <div className={innerClasses}>
          <div className='cta-slogan flex-row-center lg-ml-32'>
            <h1 className='sm-hide lg-ml-32 mb-32 pb-32 fs-80'>The Modern World's Best Pilots.</h1>
            <h1 className='lg-hide fs-80'>Get <div className='pt-16' /> Started</h1>
          </div>
          <div className='flex-row-between w-100 mt-4 center-content col-sm-center'>
            <div className='flex-col-center cta-col'>
              <h5>
                <span className='cta-stat fs-50'>40.7 trillion</span>
                <br /> Miles Flown
              </h5>
            </div>
            <div className='flex-col-center cta-col'>
              <h5>
                <span className='cta-stat fs-50'>21 million</span>
                <br /> Safe Landings each MONTH
              </h5>
            </div>
            <div className='flex-col-center cta-col'>
              <h5>
                <span className='cta-stat fs-50'>100,000</span>
                <br /> Pilots In Training
              </h5>
            </div>
            <div className='flex-col-center'>
              <h5>
                <span className='cta-stat fs-50'>8 million</span>
                <br /> Dollar Bonus for Joe?
              </h5>
            </div>
          </div>
          {/* INPUNT BOX--HERE */}
          <div className='flex-row-around w-100 cta-input mt-32 mb-32 col-sm-center'>
            <div>
              <h1 className='fs-50'>Get Started, & Fly High</h1>
            </div>

            <div>
              <Input
                className='text-color-primary'
                id='newsletter'
                type='email'
                label='Subscribe'
                labelHidden
                hasIcon='right'
                placeholder='Your best email'
              >
                <svg width='16' height='12' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z'
                    fill='#376DF9'
                  />
                </svg>
              </Input>
            </div>
          </div>
          <div className='flex-row-center mt-16'>
            <p className='center-content fs-14 w-80 '>
              This is a current mock of up my caall to action, each
              day I am feeling grateful<br /> for the opportunity to create something from nothing
              {' '}<u>I Love My Job</u>, there is nothing I would rather be doing.<br /> - Joe
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;
