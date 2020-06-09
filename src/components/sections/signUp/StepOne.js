import React, { useState } from 'react';
import Input from '../../elements/Input';
import Button from '../../elements/Button';
import {Link} from 'react-router-dom';
import axios from 'axios';

// export default function StepOne({ nextStep, submit, handleForm, setFirstName, setLastName, setEmail, setPassword }) {
export default function StepOne({ nextStep, data, setData }) {
  const checkPassword = () => {
    if (data.password === data.confirmPassword) {
      handleClick(data);
      nextStep(2);
    } else {
      return 'Sorry Passwords do not match.';
    }
  };

  const handleClick = async data => {
    // const emailValidator = email.match(
    //   /^(?:(?:[\w`~!#$%^&*\-=+;:{}'|,?\/]+(?:(?:\.(?:"(?:\\?[\w`~!#$%^&*\-=+;:{}'|,?\/\.()<>\[\] @]|\\"|\\\\)*"|[\w`~!#$%^&*\-=+;:{}'|,?\/]+))*\.[\w`~!#$%^&*\-=+;:{}'|,?\/]+)?)|(?:"(?:\\?[\w`~!#$%^&*\-=+;:{}'|,?\/\.()<>\[\] @]|\\"|\\\\)+"))@(?:[a-zA-Z\d\-]+(?:\.[a-zA-Z\d\-]+)*|\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])$/gm
    // );
    try {
      // console.log('send', data);
      const regRes = await axios.post(`/auth/register`, data);
      console.log(regRes);
      // const updateUser = await this.props.updateUser(regRes.data);
      // this.props.setRegister(false);
      // this.props.history.push("/dashboard");
    } catch (err) {
      console.log(err);
      // this.setState({ errMessage: err.response.data });
    }
  };

  return (
    // <form className='p-32 center-content '>
    //   <h1>Apply for an XBanc Account today.</h1>
    //   <br />
    //   <div className='flex-col text-left '>
    //     <div className='flex-col'>
    //       <Input
    //         value={data.firstName}
    //         onChange={e => setData({ ...data, firstName: e.target.value })}
    //         type='text'
    //         placeholder='First Name'
    //       />
    //     </div>
    //     <br />
    //     <div className='flex-col'>
    //       <Input
    // value={data.lastName}
    // onChange={e => setData({ ...data, lastName: e.target.value })}
    //         type='text'
    //         placeholder='Last Name'
    //       />
    //     </div>
    //     <br />
    //     <div className='flex-col'>
    //       <Input
    // value={data.email}
    // onChange={e => setData({ ...data, email: e.target.value })}
    //         type='text'
    //         placeholder='Email'
    //       />
    //     </div>
    //     <br />
    //     <div className='flex-col'>
    //       <Input
    // value={data.password}
    // onChange={e => setData({ ...data, password: e.target.value })}
    //         placeholder='Password'
    //       />
    //     </div>
    //     <br />
    //     <div className='flex-col'>
    //       <Input
    // value={data.confirmPassword}
    // onChange={e =>
    //   setData({ ...data, confirmPassword: e.target.value })
    // }
    //         placeholder='Confirm Password'
    //       />
    //     </div>
    //     <br />
    //     <br />
    //     <div className='flex-row-center'>
    //       <Button
    //         disabled={data.password === data.confirmPassword && data.password != '' ? false : true }
    //         value={'hello'}
    //         type='submit'
    //         tag='button'
    //         color='primary'
    //         wideMobile
    //         onClick={() => checkPassword()}
    //       >
    //         Get Started
    //       </Button>
    //     </div>
    //   </div>
    // </form>
    <div className='login-box'>
      <h2>Apply for an XBanc Account today.</h2>
      <form>
        <div className='user-box'>
          <input
            type='text'
            name=''
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
          <p className=''>Already an XPay customer?</p>
          <Link className=' button-link mt-0 p-0 ml-16' to='/'><u >Click Here!</u></Link>
        </div>
        {/* <a href='#'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </a> */}
        <div classNamae='login-button'>
          <Button
            disabled={
              data.password === data.confirmPassword && data.password != ''
                ? false
                : true
            }
            // value={'hello'}
            type='submit'
            tag='button'
            color='secondary'
            wideMobile
            onClick={() => checkPassword()}
          >
            Get Started
          </Button>
        </div>
      </form>
    </div>
  );
}
