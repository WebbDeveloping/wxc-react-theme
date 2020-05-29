import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../../utils/SectionProps';
import Button from '../../elements/Button';
import ButtonGroup from '../../elements/ButtonGroup';
import Image from '../../elements/Image';

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

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider flex-row'
  );
  return (
    <section {...props} className={outerClasses}>
    {/* TODO: MAYBE ADD CONTAINER CLASS LINE BELOW */}
      <div className='lg-pl-32 lg-pr-32 bg-color-light-2 flex-row-around col-sm'>
        <div className='hero-content flex-col-center lg-p-32 lg-mr-32 reveal-from-left'>
          <Image
            src={require('../../../assets/Svg/lightbulb_moment.svg')}
            height={450}
            width={450}
          />
        </div>
        <div className='img-text flex-col-center lg-mr-32 reveal-from-right '>
          <h1 className='mb-0 '>
            <span className='text-color-secondary'>X-WORLD</span> is the new
          </h1>
          <h1 className='mb-4 mt-4 '>secure way to pay</h1>
          <div className='container-xs'>
            <p className=' m-4'>We take your security seriously</p>
            <div className='pt-8'>
              <ButtonGroup>
                <Button
                  tag='a'
                  color='secondary'
                  wideMobile
                  //   href='https://world-xchange.com/index.php'
                >
                  Get started
                </Button>
              </ButtonGroup>
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
