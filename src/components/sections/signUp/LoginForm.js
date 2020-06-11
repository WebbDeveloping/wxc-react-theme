import React, { useState } from 'react';
import Input from '../../elements/Input';
import Button from '../../elements/Button';
import {Link} from 'react-router-dom';
import axios from 'axios';

// export default function LoginForm({ nextStep, submit, handleForm, setFirstName, setLastName, setEmail, setPassword }) {
export default function LoginForm({ nextStep, data, setData, register }) {
  const checkPassword = (wtf) => {
    if (data.password === data.confirmPassword) {
      // handleClick(data);
      handleSubmit(data);
      nextStep(2);
    } else {
      return 'Sorry Passwords do not match.';
    }
  };
  const handleSubmit = e =>{
    // const url = 'http://localhost:8080/xbanc/api/create.php'
    // // console.log(formData)
    // axios.post(url, {'first_name': data.firstName, 'last_name': data.lastName, 'email': data.email, 'password': data.password}).then(res =>{
    //   console.log(res.data)
    // }).catch(err =>console.log(err));
    nextStep(2);

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
        <div className='flex-row m-8 fs-16 '>
          <p className=''>Need an account?</p>
          <div className=' button-link mt-0 p-0 ml-16' onClick={()=>nextStep(1)}><u >Get Started!</u></div>
        </div>
        <div className=''>
          <Button
          color='secondary'
            // disabled={
            //   data.password === data.confirmPassword && data.password != ''
            //     ? false
            //     : true
            // }
            value={data}
            onClick={(e) => handleSubmit(e.target.value)}
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
}
