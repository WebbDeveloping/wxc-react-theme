import React, { useState } from 'react';
import Button from '../../elements/Button';
import axios from 'axios';

export default function LoginForm({ nextStep, data, setData }) {
    const [authError, setAuthError] = useState(false);

  const handleSubmit = e =>{
    const url = `http://localhost:8080/xbanc/api/login.php`;
    axios.post(url, {"email": data.email, "password": data.password}).then(res =>{
      if(!res.data.msg){
          setAuthError(true)
      } else {
          nextStep(7)
      }
    }).catch(err =>console.log(err));

  }

  return (
    <div className='login-box'>
      <h2>Login to XBanc</h2>
      <div className='pt-32 pb-32'>
        <div className='user-box'>
          <input
            type='text'
            name=''
            required=''
            id='email'
            value={data.email}
            onChange={e => setData({ ...data, email: e.target.value })}
          />
          <label>Email</label>
        </div>
        <div className='user-box'>
          <input
            type='password'
            name=''
            required=''
            id='password'
            value={data.password}
            onChange={e => setData({ ...data, password: e.target.value })}
          />
          <label>Password</label>
        </div>
        <div className={`flex-row m-8 fs-16 ${authError ? '' : 'd-none'}`}>
          <p className='text-color-error'>* Email or Pasword is incorrect</p>
        </div>
        <div className='flex-row m-8 fs-16 '>
          <p className=''>Need an account?</p>
          <div className=' button-link mt-0 p-0 ml-16' onClick={()=>nextStep(1)}><u >Get Started!</u></div>
        </div>
        <div className=''>
          <Button
          color='secondary'
            value={data}
            onClick={(e) => handleSubmit(e.target.value)}
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}
