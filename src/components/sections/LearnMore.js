import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
};

const defaultProps = {
  ...SectionSplitProps.defaults
};

const LearnMore = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Workflow that just works',
    paragraph:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.'
  };

  return (
    <section {...props} className={outerClasses}>
      <div className='container'>
        <div className={innerClasses}>
          {/* <SectionHeader data={sectionHeader} className='center-content' /> */}
          <div className={splitClasses}>
            <div className='split-item'>
              <div
                className='split-item-content center-content-mobile reveal-from-left'
                data-reveal-container='.split-item'
              >
                <div className='text-xxs text-color-primary fw-600 tt-u mb-8'>
                  {/* Lightning fast workflow */}
                </div>
                <h3 className='mt-0 mb-12'>Credit card theft rising</h3>
                <p className='m-0'>
                  Despite anti-theft innovations, card fraud continues. The
                  majority of all theft happens at the local or merchant level.
                  Improper handling and storage of your card information is the
                  biggest reason. These days it is all too easy for an employee
                  to take a picture of your card or even swipe it on their phone
                  before returning it to you.
                </p>
              </div>
              <div
                className={classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container='.split-item'
              >
                <Image
                  src={require('./../../assets/images/wxc/slides/slide_1.png')}
                  alt='Features split 01'
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className='split-item'>
              <div
                className='split-item-content center-content-mobile reveal-from-right'
                data-reveal-container='.split-item'
              >
                {/* <div className='text-xxs text-color-primary fw-600 tt-u mb-8'>
                  Lightning fast workflow
                </div> */}
                <h3 className='mt-0 mb-12'>Hackers will always find a way</h3>
                <p className='m-0'>
                  Companies spend billions on network security, yet breaches
                  continue. In a typical card transaction, there are dozens of
                  opportunities where your card data can be intercepted by
                  outsiders. Yet sadly, a large percentage of data breaches
                  originate from within the organization itself, which is nearly
                  impossible to guard against completely. In the end, the only
                  way to completely ensure your card data is not compromised is
                  to not send it flying across the internet in the first place.
                </p>
              </div>
              <div
                className={classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container='.split-item'
              >
                <Image
                  src={require('./../../assets/images/wxc/slides/slide_2.png')}
                  alt='Features split 02'
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className='split-item'>
              <div
                className='split-item-content center-content-mobile reveal-from-left'
                data-reveal-container='.split-item'
              >
                <h3 className='mt-0 mb-12'>The invisible breach</h3>
                <p className='m-0'>
                  Have you ever wondered what that little black stripe or square
                  chip on your card says about you? What about all those long
                  online forms you've filled out? Is all of that necessary for
                  the purchase? Have you ever found yourself on a dozen mailing
                  lists after making a purchase? In today's world, your personal
                  information is sometimes more valuable than the product you
                  purchased, yet your information is often harvested without
                  your knowledge and sold. You're being robbed and didn't know
                  it!
                </p>
              </div>
              <div
                className={classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container='.split-item'
              >
                <Image
                  src={require('./../../assets/images/wxc/slides/slide_3.png')}
                  alt='Features split 03'
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className='split-item'>
              <div
                className='split-item-content center-content-mobile reveal-from-left'
                data-reveal-container='.split-item'
              >
                <h3 className='mt-0 mb-12'>It's none of their business</h3>
                <p className='m-0'>
                  Since when did your personal finances become the business of a
                  retailer (and everyone within earshot)? If there is any issue
                  with your accounts, you should be able to know about it
                  privately, especially if you are standing at the checkout,
                  surrounded by impatient consumers. Don't you think?
                </p>
              </div>
              <div
                className={classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container='.split-item'
              >
                <Image
                  src={require('./../../assets/images/wxc/slides/slide_4.png')}
                  alt='Features split 03'
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className='split-item'>
              <div
                className='split-item-content center-content-mobile reveal-from-left'
                data-reveal-container='.split-item'
              >
                <h3 className='mt-0 mb-12'>The invisible breach</h3>
                <p className='m-0'>
                  Have you ever wondered what that little black stripe or square
                  chip on your card says about you? What about all those long
                  online forms you've filled out? Is all of that necessary for
                  the purchase? Have you ever found yourself on a dozen mailing
                  lists after making a purchase? In today's world, your personal
                  information is sometimes more valuable than the product you
                  purchased, yet your information is often harvested without
                  your knowledge and sold. You're being robbed and didn't know
                  it!
                </p>
              </div>
              <div
                className={classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container='.split-item'
              >
                <Image
                  src={require('./../../assets/images/wxc/slides/slide_5.png')}
                  alt='Features split 03'
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className='split-item'>
              <div
                className='split-item-content center-content-mobile reveal-from-left'
                data-reveal-container='.split-item'
              >
                <h3 className='mt-0 mb-12'>The invisible breach</h3>
                <p className='m-0'>
                  Have you ever wondered what that little black stripe or square
                  chip on your card says about you? What about all those long
                  online forms you've filled out? Is all of that necessary for
                  the purchase? Have you ever found yourself on a dozen mailing
                  lists after making a purchase? In today's world, your personal
                  information is sometimes more valuable than the product you
                  purchased, yet your information is often harvested without
                  your knowledge and sold. You're being robbed and didn't know
                  it!
                </p>
              </div>
              <div
                className={classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container='.split-item'
              >
                <Image
                  src={require('./../../assets/images/wxc/slides/slide_6.png')}
                  alt='Features split 03'
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className='split-item'>
              <div
                className='split-item-content center-content-mobile reveal-from-left'
                data-reveal-container='.split-item'
              >
                <h3 className='mt-0 mb-12'>The invisible breach</h3>
                <p className='m-0'>
                  Have you ever wondered what that little black stripe or square
                  chip on your card says about you? What about all those long
                  online forms you've filled out? Is all of that necessary for
                  the purchase? Have you ever found yourself on a dozen mailing
                  lists after making a purchase? In today's world, your personal
                  information is sometimes more valuable than the product you
                  purchased, yet your information is often harvested without
                  your knowledge and sold. You're being robbed and didn't know
                  it!
                </p>
              </div>
              <div
                className={classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container='.split-item'
              >
                <Image
                  src={require('./../../assets/images/wxc/slides/slide_7.png')}
                  alt='Features split 03'
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className='split-item'>
              <div
                className='split-item-content center-content-mobile reveal-from-left'
                data-reveal-container='.split-item'
              >
                <h3 className='mt-0 mb-12'>The invisible breach</h3>
                <p className='m-0'>
                  Have you ever wondered what that little black stripe or square
                  chip on your card says about you? What about all those long
                  online forms you've filled out? Is all of that necessary for
                  the purchase? Have you ever found yourself on a dozen mailing
                  lists after making a purchase? In today's world, your personal
                  information is sometimes more valuable than the product you
                  purchased, yet your information is often harvested without
                  your knowledge and sold. You're being robbed and didn't know
                  it!
                </p>
              </div>
              <div
                className={classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container='.split-item'
              >
                <Image
                  src={require('./../../assets/images/wxc/slides/slide_8.png')}
                  alt='Features split 03'
                  width={528}
                  height={396}
                />
              </div>
            </div>

            <div className='split-item'>
              <div
                className='split-item-content center-content-mobile reveal-from-left'
                data-reveal-container='.split-item'
              >
                <h3 className='mt-0 mb-12'>The invisible breach</h3>
                <p className='m-0'>
                  Have you ever wondered what that little black stripe or square
                  chip on your card says about you? What about all those long
                  online forms you've filled out? Is all of that necessary for
                  the purchase? Have you ever found yourself on a dozen mailing
                  lists after making a purchase? In today's world, your personal
                  information is sometimes more valuable than the product you
                  purchased, yet your information is often harvested without
                  your knowledge and sold. You're being robbed and didn't know
                  it!
                </p>
              </div>
              <div
                className={classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container='.split-item'
              >
                <Image
                  src={require('./../../assets/images/wxc/slides/slide_9.png')}
                  alt='Features split 03'
                  width={528}
                  height={396}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

LearnMore.propTypes = propTypes;
LearnMore.defaultProps = defaultProps;

export default LearnMore;
