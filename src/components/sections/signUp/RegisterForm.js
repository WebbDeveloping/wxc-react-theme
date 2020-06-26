import React, { useState } from 'react';
import Button from '../../elements/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function RegisterForm({ nextStep, data, setData, setUserId }) {
  const [error, setError] = useState('');
  const handleSubmit = e => {
    const url = 'http://localhost:8080/xbanc/api/register.php';
    axios
      .post(url, {
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        password: data.password
      })
      .then(res => {
        if (res.data.user_id) {
          setUserId(res.data.user_id);
        }
        if (res.data.msg === false) {
          setError('* This Email Already Has An Account.');
        } else {
          setTimeout(() => nextStep(6), 1500);
          nextStep(8);
        }
      })
      .catch(err => console.log('err', err));
  };
  return (
    <div className='login-box sm-m-0 sm-br-none'>
      <h2>Apply for an XBanc Account Today.</h2>
      <div className='pt-32'>
        <div className='user-box'>
          <input
            type='text'
            name=''
            id='fisrtName'
            required=''
            value={data.firstName}
            onChange={e => setData({ ...data, firstName: e.target.value })}
          />
          <label>First Name</label>
        </div>
        <div className='user-box'>
          <input
            type='text'
            name=''
            id='lastName'
            required=''
            value={data.lastName}
            onChange={e => setData({ ...data, lastName: e.target.value })}
          />
          <label>Last Name</label>
        </div>
        <div className='user-box'>
          <input
            type='text'
            name=''
            required=''
            id='email'
            value={data.email}
            onChange={e => setData({ ...data, email: e.target.value })}
          />
          <label className={error ? 'd-none' : ''}>Email</label>
          <label className='text-color-error'>{error}</label>
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
        <div className='user-box'>
          <input
            type='password'
            name=''
            required=''
            value={data.confirmPassword}
            onChange={e =>
              setData({ ...data, confirmPassword: e.target.value })
            }
          />
          <label>Confirm Password</label>
        </div>
        <div className='flex-row m-8 fs-16 '>
          <p className=''>Already an XPay Customer?</p>
          <div>
            {' '}
            <Link
              to={{
                pathname: '/sign-up',
                state: {
                  loginStepNum: 5
                }
              }}
              className='button-link mt-0 p-0 ml-16'
            >
              <u>Login Here</u>
            </Link>
          </div>
        </div>
        <div className=''>
          <Button
            disabled={
              data.password === data.confirmPassword && data.password !== ''
                ? false
                : true
            }
            color='secondary'
            value={data}
            onClick={e => handleSubmit(e.target.value)}
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
}
