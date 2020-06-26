import React from 'react';
import Image from '../elements/Image';
import Button from '../elements/Button';
import ButtonGroup from '../elements/ButtonGroup';

export default function SubPageHero({ title, subtitle, button1, button2 }) {
  return (
    <div className='flex-row-around col-sm center-content'>
      <div className='w-50 sm-w-100 flex-col-start headline'>
        <h1 className='headline-title reveal-from-left'>
          {title}
        </h1>
        <p className='reveal-from-left w-80 headline-paragraph'>
          {subtitle}
        </p>
        <div className='reveal-from-left mt-16'>
          <ButtonGroup>
            <Button tag='a' color='primary' wideMobile href='/sign-up'>
              {button1}
            </Button>
            <Button tag='a' color='secondary' wideMobile href='/sign-up'>
              {button2}
            </Button>
          </ButtonGroup>
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
