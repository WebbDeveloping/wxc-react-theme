import React from 'react';
import Input from '../../elements/Input';
import Button from '../../elements/Button';

export default function StepOne({nextStep}) {
    console.log('nextStep', nextStep)
  return (
    <form className='tiles-item-inner center-content w-100'>
      <h1>Apply for an XBanc Account today.</h1>
      <br />
      <div className='flex-col text-left '>
        <div className='flex-col'>
          <Input type='text' placeholder='First Name' />
        </div>
        <br />
        <div className='flex-col'>
          <Input type='text' placeholder='Last Name' />
        </div>
        <br />
        <div className='flex-col'>
          <Input type='text' placeholder='Email' />
        </div>
        <br />
        <div className='flex-col'>
          <Input placeholder='Password' />
        </div>
        <br />
        <br />
        <Button
          value={'hello'}
          type='submit'
          tag='a'
          color='primary'
          wideMobile
          onClick={() => nextStep(2)}
        >
          Get Started
        </Button>
      </div>
    </form>
  );
}
