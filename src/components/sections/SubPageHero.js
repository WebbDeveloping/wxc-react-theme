import React from 'react';
import Image from '../elements/Image';
import Button from '../elements/Button';
import { Link } from 'react-router-dom';

export default function SubPageHero({ title, subtitle, button1, button2 }) {
  return (
    <div className='flex-row-around col-sm center-content-mobile'>
      <div className='w-50 sm-w-100 flex-col-start headline center-content-mobile'>
        <h1 className='headline-title reveal-from-left'>{title}</h1>
        <p className='reveal-from-left w-80 headline-paragraph'>{subtitle}</p>
        <div className='reveal-from-left mt-16'>
          <Link to='/sign-up'>
            <Button tag='button' color='secondary'>
              {button1}
            </Button>
          </Link>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className='flex-col-center mb-16 reveal-from-right'>
        <Image
          src={require('./../../assets/Svg/purchase.svg')}
          alt='Features tile icon 01'
          width={364}
          height={364}
        />
      </div>
    </div>
  );
}
