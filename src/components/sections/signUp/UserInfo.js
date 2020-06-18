import React from 'react';
import Button from '../../elements/Button';
import axios from 'axios';

export default function StepTwo({ nextStep, data, setData, userId }) {
  // const [error, setError] = useState('')
  const handleSubmit = e =>{
    const url = 'http://localhost:8080/xbanc/api/userInfo.php'
    axios.post(url, {'user_id': userId, 'address_one': data.addressOne, 'address_two': data.addressTwo, 'zip_code': data.zipCode, 'country': data.country, "state": data.state, "city": data.city, "phone_number": data.phone_number}).then(res =>{
      console.log(res.data)
      if(res.data.msg === false){
        console.log('failure');
      } else {
        nextStep(3)
      }
    }).catch(err =>console.log('err', err));
  }
  return (
    <div className='login-box'>
    <h2>Tell US ABOUT YOURSELF</h2>
    <div>
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
            setData({ ...data, phone_number: e.target.value })
          }
        />
        <label>Phone Number</label>
      </div>
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
              value='b'
              type='submit'
              tag='button'
              color='secondary'
              wideMobile
              onClick={(e) => handleSubmit(e.target.value)}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
