import React, { useState } from 'react';
import Input from '../../elements/Input';
import Button from '../../elements/Button';
import {Link} from 'react-router-dom';
import axios from 'axios';

// export default function StepOne({ nextStep, submit, handleForm, setFirstName, setLastName, setEmail, setPassword }) {
export default function StepOne({ nextStep, data, setData, register }) {
  // const checkPassword = (wtf) => {
  //   if (data.password === data.confirmPassword) {
  //     // handleClick(data);
  //     handleSubmit(data);
  //     // nextStep(2);
  //   } else {
  //     return 'Sorry Passwords do not match.';
  //   }
  // };
  const handleSubmit = e =>{
    // console.log(data.firstName);
    // // e.preventDefault();
    // let formData = new FormData();
    // formData.append('first_name', data.firstName)
    // formData.append('last_name', data.lasttName)
    // formData.append('email', data.email)
    // formData.append('password', data.password)
    const url = 'http://localhost:8080/xbanc/api/create.php'
    // console.log(formData)
    axios.post(url, {'first_name': data.firstName, 'last_name': data.lastName, 'email': data.email, 'password': data.password}).then(res =>{
      console.log(res.data)
      nextStep(2)
    }).catch(err =>console.log(err));
    // axios.post({
    //   method: 'POST',
    //   url: `${url}`,
    //   headers: { 'Content-Type': 'application/json' },
    //   data: formData
    // }).then(res =>{
    //   console.log(res.data).catch(err =>console.log(err));
    // })

  }

  // const handleClick = async data => {

  //   // const emailValidator = email.match(
  //   //   /^(?:(?:[\w`~!#$%^&*\-=+;:{}'|,?\/]+(?:(?:\.(?:"(?:\\?[\w`~!#$%^&*\-=+;:{}'|,?\/\.()<>\[\] @]|\\"|\\\\)*"|[\w`~!#$%^&*\-=+;:{}'|,?\/]+))*\.[\w`~!#$%^&*\-=+;:{}'|,?\/]+)?)|(?:"(?:\\?[\w`~!#$%^&*\-=+;:{}'|,?\/\.()<>\[\] @]|\\"|\\\\)+"))@(?:[a-zA-Z\d\-]+(?:\.[a-zA-Z\d\-]+)*|\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])$/gm
  //   // );
  //   try {
  //     // console.log('send', data);
  //     // const regRes = await axios.post(`localhost:8080/xbanc/index.php`, data);
  //     // console.log(regRes);
  //     // const updateUser = await this.props.updateUser(regRes.data);
  //     // this.props.setRegister(false);
  //     // this.props.history.push("/dashboard");
  //   } catch (err) {
  //     console.log(err);
  //     // this.setState({ errMessage: err.response.data });
  //   }
  // };
  // console.log(data)
  return (
    <div className='login-box'>
      <h2>Apply for an XBanc Account today.</h2>
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
          <div className=' button-div mt-0 p-0 ml-16' onClick={()=>nextStep(5)}><u>Click Here!</u></div>
        </div>
        {/* <a href='#'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </a> */}
        <div className=''>
          <Button
            disabled={
              data.password === data.confirmPassword && data.password != ''
                ? false
                : true
            }
            // value={'hello'}
            // type='submit'
            // tag='button'
            color='secondary'
            // value='registerUser'
            // wideMobile
            // onClick={() => checkPassword()}
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
