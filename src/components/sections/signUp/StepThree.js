import React, { useState } from 'react';
import Input from '../../elements/Input';
import Button from '../../elements/Button';
import { Link } from 'react-router-dom';
import LegalAgreement from './LegalAgreement';

export default function StepThree({ nextStep, submit, data, setData }) {
  const SubmitFinalForm = () => {
    submit();
    nextStep(4);
  };
  const [hideForm, setHideForm] = useState('')
  const [hideContract, setHideContract] = useState('lg-hide')

  const submitTerms = () =>{
    if(data.termsAccepted){
      setHideContract('d-none');
      setHideForm('');
    }
  }
  const handleChange = (e)=>{
    setData({ ...data, termsAccepted: e.target.checked})
  }
  const showContract = () =>{
    setHideForm('d-none');
    setHideContract('')
  }
  return (
    <div>
      <form className={`tiles-item-inner center-content w-100 ${hideForm}`}>
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
                <div onClick={()=>showContract()}>
                  <h6>Read XBanc's Terms & Conditions</h6>
                </div>
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
                disabled={!data.termsAccepted}
                value='value 2 bruh'
                type='submit'
                tag='button'
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
      <div className={`scroll-box container-sm ${hideContract}`}>
        <LegalAgreement />
      </div>
        <div className={`container flex-col-center ${hideContract}`}>
        <div className='terms-condition flex-col-center'>
          <label className='terms-label'>
            <input className='terms-input' type='checkbox' checked={data.termsAccepted}  onChange={handleChange}  />
            {'      '}I Agree to XBanc's Terms & Service Agreements
          </label>
          <u className='text-color-primary'>
          {/* <Link to='/sign-up'> */}
            <button disabled={!data.termsAccepted} className='mt-32 text-color-primary' onClick={()=>submitTerms()}>Agree</button>
          {/* </Link> */}
          </u>
        </div>
      </div>
    </div>
  );
}
