import React, {useState} from 'react';
import Input from '../../elements/Input';
import Button from '../../elements/Button';

// export default function StepOne({ nextStep, submit, handleForm, setFirstName, setLastName, setEmail, setPassword }) {
export default function StepOne({ nextStep,  data, setData }) {




  return (
    <form className='tiles-item-inner center-content w-100'>
      <h1>Apply for an XBanc Account today.</h1>
      <br />
      <div className='flex-col text-left '>
        <div className='flex-col'>
          <Input value={data.firstName} onChange={e => setData({...data, firstName: e.target.value})} type='text' placeholder='First Name' />
        </div>
        <br />
        <div className='flex-col'>
          <Input value={data.lastName} onChange={e => setData({...data, lastName: e.target.value})} type='text' placeholder='Last Name' />
        </div>
        <br />
        <div className='flex-col'>
          <Input value={data.email} onChange={e => setData({...data, email: e.target.value})} type='text' placeholder='Email' />
        </div>
        <br />
        <div className='flex-col'>
          <Input value={data.password} onChange={e => setData({...data, password: e.target.value})} placeholder='Password' />
        </div>
        <br />
        <br />
        <div className='flex-row-center'>
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
      </div>
    </form>
  );
}
