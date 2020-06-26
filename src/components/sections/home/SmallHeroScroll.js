import React from 'react';
import Image from '../../elements/Image';
import Button from '../../elements/Button';

export default function SmallHeroScroll({ click, data }) {
  // TODO:
  // *
  // *
  // *
  //    I want to hide the arrows to prevent user from clicking
  //    forward or backward when ther are no more pages
  //    minor issue I will return to
  // *
  // *
  // *
  // let hideRarr = '';
  // let hideLarr = '';
  // if (data['index'] === 0) {
  //   hideRarr = 'sm-hide';
  // }
  // if (data['index'] === 3) {
  //   hideLarr = 'sm-hide';
  //   // hideRarr = 'sm-hide';
  // }
  // className={`${hideLarr}`}
  // className={`${hideRarr}`}
  // *
  // *
  // *
  return (
    <div className='container  w-100 lg-hide box-container pl-0 pr-0'>
    <div className='w-100 has-bg-color container pl-24 pr-24'>

      <div className=' flex-row-around box'>
        <h4 onClick={() => click(data['id'] - 1)}>&larr;</h4>
        <div onClick={() => click(data['id'])}>
          <h4>{data['color-heading']}</h4>
        </div>
        <h4 className='bg-color-dark' onClick={() => click(data['id'] + 1)}>
          &rarr;
        </h4>
      </div>
      <div className='m-4 fw-500 sm-header'>
        <h1 className=' mt-0 ml-16 mr-16'>{data['smHeading']}</h1>
        <p className=' mt-0 pl-16 pr-16'>{data['subheading']}</p>
      </div>
      <br />
      <div className='lg-hide'>
        <Button tag='a' color='secondary' href='/sign-up'>
          Get Started
        </Button>
      </div>
      <br />
      <br />
    </div>
      <div className='tiles-item reveal-from-bottom' data-reveal-delay='200'>
        <div className='tiles-item-inner'>
          <div className='features-tiles-item-header pr-8'>
            <div className='features-tiles-item-image-merchant mb-16'>
              <Image
                src={require('../../../assets/Svg/filter.svg')}
                alt='Features tile icon 01'
                width={96}
                height={96}
              />
            </div>
          </div>
          <div className='features-tiles-item-content'>
            <h4 className='mt-0 mb-8'>BETTER & SMARTER</h4>
            <p className='m-0 text-sm'>
              How many cards are in your wallet? When do they expire? How long
              would it take you to notice one was missing? Now you can leave
              your cards at home.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
