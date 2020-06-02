import React from 'react';
import Input from '../../elements/Input';
import Button from '../../elements/Button';

export default function StepTwo({nextStep}) {
  return (
    <form className='tiles-item-inner center-content w-100'>
      <h3>SELL US YOUR SOUL</h3>
      <br />
      <div className='flex-col text-left '>
        <div className='flex-col'>
          <Input type='text' placeholder='First Born' />
        </div>
        <br />
        <div className='flex-col'>
          <Input type='text' placeholder='Blood Type' />
        </div>
        <br />
        <div className='flex-col'>
          <Input type='text' placeholder='Human Id Number' />
        </div>
        <br />
        <div className='flex-col'>
          <Input type='text' placeholder='Deepest Secret' />
        </div>
        <br />
        <br />
        <Button
          value='value 2 bruh'
          type='submit'
          tag='a'
          color='primary'
          wideMobile
          onClick={() => nextStep(3)}
        >
          Get Started
        </Button>
      </div>
    </form>
  );
}
