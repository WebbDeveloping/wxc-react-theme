import React, { useState } from 'react';
import Input from '../../elements/Input';
import Button from '../../elements/Button';
import Select from '../../elements/Select';

export default function StepTwo({ nextStep, data, setData }) {
  return (
    <div className='login-box'>
    <h2>Tell US ABOUT YOURSELF</h2>
    <form>
      <div className='user-box'>
        <input
          type='text'
          name=''
          required=''
          value={data.AddressOne}
          onChange={e => setData({ ...data, addressOne: e.target.value })}
        />
        <label>Address One</label>
      </div>
      <div className='user-box'>
        <input
          type='text'
          name=''
          required=''
          value={data.AddressTwo}
          onChange={e => setData({ ...data, addressTwo: e.target.value })}
        />
        <label>Address Two</label>
      </div>
      <div className='user-box'>
        <input
          type='text'
          name=''
          required=''
          value={data.zipCode}
          onChange={e => setData({ ...data, zipCode: e.target.value })}
        />
        <label>Zip Code</label>
      </div>
      <div className='user-box'>
        <input
          type='text'
          name=''
          required=''
          value={data.country}
          onChange={e => setData({ ...data, country: e.target.value })}
        />
        {/* <select className='country-option'>
          <option >1</option>
          <option>1</option>
          <option>1</option>
          <option>1</option>
        </select> */}
        <label>Country</label>
      </div>
      <div className='user-box'>
        <input
          type='text'
          name=''
          required=''
          value={data.state}
          onChange={e =>
            setData({ ...data, state: e.target.value })
          }
        />
        <label>State</label>
      </div>
      <div className='user-box'>
        <input
          type='text'
          name=''
          required=''
          value={data.city}
          onChange={e =>
            setData({ ...data, city: e.target.value })
          }
        />
        <label>City</label>
      </div>
      <div className='user-box'>
        <input
          type='text'
          name=''
          required=''
          value={data.number}
          onChange={e =>
            setData({ ...data, number: e.target.value })
          }
        />
        <label>Phone Number</label>
      </div>
      {/* <a href='#'>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Submit
      </a> */}
      <div className='login-button'>
        <div className='flex-row-around'>
          <div className='pr-8'>
            <Button
              value='value 2 bruh'
              type='submit'
              tag='button'
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
              tag='button'
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
  </div>
  );
}
