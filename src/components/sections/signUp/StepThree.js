import React, { useState } from 'react';
import Input from '../../elements/Input';
import Button from '../../elements/Button';
import {Link} from 'react-router-dom';

export default function StepThree({ nextStep, submit, data, setData }) {
  const SubmitFinalForm = () => {
    submit();
    nextStep(4);
  };
  return (
    <form className='tiles-item-inner center-content w-100'>
      <h3>The Bridge</h3>
      <br />
      <div className='flex-col text-left '>
        <div className='flex-col'>
          <Input
            value={data.name}
            onChange={e => setData({ ...data, name: e.target.value })}
            type='text'
            placeholder='What is your name?'
          />
        </div>
        <br />
        <div className='flex-col'>
          <Input
            value={data.quest}
            onChange={e => setData({ ...data, quest: e.target.value })}
            type='text'
            placeholder='What is your quest?'
          />
        </div>
        <br />
        <div className='flex-col'>
          <Input
            value={data.color}
            onChange={e => setData({ ...data, color: e.target.value })}
            type='text'
            placeholder='what is your favorite color?'
          />
        </div>
        <br />
        <div className='flex-col'>
          <Input
            value={data.swollow}
            onChange={e => setData({ ...data, swollow: e.target.value })}
            type='text'
            placeholder='What is the air speed velocity of a swollow?'
          />
          <div className='terms-text'>
            <u>
              <Link to='/legal-agreement'>
                <h6>Read XBanc's Terms & Conditions</h6>
              </Link>
            </u>
          </div>
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
              onClick={() => nextStep(2)}
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
              onClick={() => SubmitFinalForm()}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
