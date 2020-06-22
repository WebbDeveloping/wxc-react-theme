import React, { useState } from 'react';
import Button from '../../elements/Button';
import LegalAgreement from './LegalAgreement';
import axios from 'axios';

export default function StepThree({ nextStep, submit, data, setData, userId }) {
  // const [error, setError] = useState('')
  const handleSubmit = e =>{
    const url = 'http://localhost:8080/xbanc/api/bankInfo.php'
    axios.post(url, {'user_id': userId, 'bank_name': data.bank_name, 'cc_num': data.cc_num, 'account_num': data.account_num, 'routing_num': data.routing_num, "terms_accepted": data.termsAccepted}).then(res =>{
      console.log(res.data)
      if(res.data.msg === false){
        // setError('* This Email Already Has An Account.')
      } else {
        nextStep(4)
      }
    }).catch(err =>console.log('err', err));
  }
  const [hideForm, setHideForm] = useState('');
  const [hideContract, setHideContract] = useState('lg-hide');

  const submitTerms = () => {
    if (data.termsAccepted) {
      setHideContract('d-none');
      setHideForm('');
    }
  };
  const handleChange = e => {
    setData({ ...data, termsAccepted: e.target.checked });
  };
  const showContract = () => {
    setHideForm('d-none');
    setHideContract('');
  };
  return (
    <div className='login-box  sm-br-none sm-m-0'>
      <div className={`center-content  ${hideForm}`}>
        <h3>Connect Your Bank</h3>
        <br />
        {/* <div className='flex-col text-left user-box'> */}
          <div className='user-box text-color-secondary'>
            <input
              value={data.bank_name}
              onChange={e => setData({ ...data, bank_name: e.target.value })}
              type='text'
              // placeholder='What is your name?'
            />
            <label>Bank Name</label>
          </div>
          <br />
          <div className='user-box'>
            <input
              value={data.cc_num}
              onChange={e => setData({ ...data, cc_num: e.target.value })}
              type='text'
              // placeholder='What is your quest?'
            />
            <label>Credit Card #</label>
          </div>
          <br />
          <div className='user-box'>
            <input
              value={data.account_num}
              onChange={e => setData({ ...data, account_num: e.target.value })}
              type='text'
              // placeholder='what is your favorite color?'
            />
            <label>Account #</label>
          </div>
          <br />
          <div className='user-box'>
            <input
              value={data.routing_num}
              onChange={e => setData({ ...data, routing_num: e.target.value })}
              type='text'
              // placeholder='What is the air speed velocity of an unladen swollow?'
            />
            <label>Routing #</label>
            <div className='flex-row-start'>
              <img
                className={`terms-checkmark ${
                  data.termsAccepted ? '' : 'd-none'
                }`}
                src={require('../../../assets/Svg/checkmark.svg')}
                alt='Features split 01'
              />
              <img
                className={`terms-checkmark ${
                  data.termsAccepted ? 'd-none' : ''
                }`}
                src={require('../../../assets/Svg/cross.svg')}
                alt='Features split 01'
              />

              <div className='terms-text'>
                <u>
                  <div onClick={() => showContract()}>
                    <h6>Read XBanc's Terms & Conditions</h6>
                  </div>
                </u>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className='flex-row-around'>
            <div className='pr-8'>
              <Button
                value='value 2 bruh'
                type='submit'
                tag='button'
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
                disabled={!data.termsAccepted}
                value='value 2 bruh'
                type='submit'
                tag='button'
                color='secondary'
                wideMobile
                onClick={(e) => handleSubmit(e.target.value)}
              >
                Submit
              </Button>
            </div>
          </div>
        {/* </div> */}
      </div>
      <div className={`scroll-box container-sm ${hideContract}`}>
        <LegalAgreement />
      </div>
      <div className={`flex-col ${hideContract}`}>
        <div className='terms-condition flex-col-center'>
          <label className='terms-label'>
            <input
              className='terms-input'
              type='checkbox'
              checked={data.termsAccepted}
              onChange={handleChange}
            />
            {'      '}I Agree to XBanc's Terms & Service Agreements
          </label>
          <u className='text-color-primary'>
            {/* <Link to='/sign-up'> */}
            <button
              disabled={!data.termsAccepted}
              className='mt-32 text-color-primary'
              onClick={() => submitTerms()}
            >
              Agree
            </button>
            {/* </Link> */}
          </u>
        </div>
      </div>
    </div>
  );
}
