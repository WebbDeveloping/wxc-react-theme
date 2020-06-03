import React, {useState} from 'react';
import Input from '../../elements/Input';
import Button from '../../elements/Button';

export default function StepTwo({ nextStep, data, setData }) {


  return (
    <form className='tiles-item-inner center-content w-100'>
      <h3>SELL US YOUR SOUL</h3>
      <br />
      <div className='flex-col text-left '>
        <div className='flex-col'>
          <Input value={data.born} onChange={e => setData({...data, born: e.target.value})} type='text' placeholder='First Born' />
        </div>
        <br />
        <div className='flex-col'>
          <Input value={data.type} onChange={e => setData({...data, type: e.target.value})} type='text' placeholder='Blood Type' />
        </div>
        <br />
        <div className='flex-col'>
          <Input value={data.number} onChange={e => setData({...data, number: e.target.value})} type='text' placeholder='Human Id Number' />
        </div>
        <br />
        <div className='flex-col'>
          <Input value={data.secret} onChange={e => setData({...data, secret: e.target.value})} type='text' placeholder='Deepest Secret' />
        </div>
        <br />
        <br />
        <div className='flex-row-around'>
          <div className='pr-8'>
            <Button
              value='value 2 bruh'
              type='submit'
              tag='a'
              color='primary'
              wideMobile
              onClick={() => nextStep(1)}
            >
              Back
            </Button>
          </div>
          <br />
          <div className='pl-8'>
            <Button
              value='value 2 bruh'
              type='submit'
              tag='a'
              color='secondary'
              wideMobile
              onClick={() => nextStep(3)}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
