import React from 'react';
import Input from '../../elements/Input';
import Button from '../../elements/Button';

export default function StepThree({nextStep}) {
  return (
    <form className='tiles-item-inner center-content w-100'>
      <h3>The Bridge</h3>
      <br />
      <div className='flex-col text-left '>
        <div className='flex-col'>
          <Input type='text' placeholder='What is your name?' />
        </div>
        <br />
        <div className='flex-col'>
          <Input type='text' placeholder='What is your quest?' />
        </div>
        <br />
        <div className='flex-col'>
          <Input type='text' placeholder='what is your favorite color?' />
        </div>
        <br />
        <div className='flex-col'>
          <Input
            type='text'
            placeholder='What is the air speed velocity of a swollow?'
          />
        </div>
        <br />
        <br />
        <Button
          value='value 3 bruh'
          type='submit'
          tag='a'
          color='primary'
          wideMobile
          onClick={() => nextStep(4)}
        >
          Get Started
        </Button>
      </div>
    </form>
  );
}
