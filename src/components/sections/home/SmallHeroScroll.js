import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../../utils/SectionProps';
import Button from '../../elements/Button';
import Image from '../../elements/Image';

export default function SmallHeroScroll({ click, data }) {
  let hideRarr = '';
  let hideLarr = '';
  if (data['index'] == 0) {
    hideRarr = 'sm-hide';
  }
  if (data['index'] == 3) {
    hideRarr = 'sm-hide';
  }
  // console.log(data);
  return (
    <div className='container  w-100 lg-hide box-container'>
      <div className=' flex-row-around box'>
        <h4 onClick={() => click(data['id'] - 1)}>&larr;</h4>
        <div onClick={() => click(data['id'])}>
          <h4>{data['color-heading']}</h4>
        </div>
        <h4 className='bg-color-dark' onClick={() => click(data['id'] + 1)}>
          &rarr;
        </h4>
      </div>
      <div className='container-xs mt-0 relative '>
        {/* text-bg */}
        <div className='m-4 fw-500 sm-header'>
          <h1 className=' mt-0 text-shadow'>{data['smHeading']}</h1>
        </div>
        <div className='sm-img-absolute h-100 w-100 bg-color-light-2'>
          <Image
            // className={`sm-w-100 sm-h-100 lg-mr-32`}
            // src={require(`../../../assets/Svg/${data['img-path']}`)}
            src={require(`../../../assets/images/networking.jpg`)}
            height={'100%'}
            width={'100%'}
          />
        </div>
      </div>
    </div>
  );
}
