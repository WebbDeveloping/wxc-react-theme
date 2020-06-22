import React, { useState, useEffect } from 'react';
import Button from '../../elements/Button';
import Input from '../../elements/Input';
import LoadingBars from './LoadingBars';

export default function ConfirmEmailForm({ nextStep }) {
  const [count, setCount] = useState('');
  const [bars, setBars] = useState(true);
  const handleClick = e =>{
    setBars(!bars)
    setTimeout(() => nextStep(2), 3500)
  }

  return (
    <div className='center-content p-8 flex-col-center'>
      <h1>Please check your email</h1>
      <div className='pl-32 pr-32 pb-32'>
        <p className='text-xxs'>Please enter your confermation code below.</p>
        <Input
          className='email-code-input'
          type='text'
          placeholder='confermation code'
        ></Input>
      </div>
      <div>
{     bars ? <Button
        value='value 2 bruh'
        type='submit'
        tag='a'
        color='secondary'
        wideMobile
        onClick={() => handleClick(2)}
        // onClick={() => nextStep(2)}
      >
        Continue
      </Button> :
      <span onClick={() => handleClick(2)} ><LoadingBars text='checking...' loadingClass='sm-loading' /></span>}
      </div>
    </div>
  );
}

// function ConfirmPage({nextStep}) {
//   return (
//     <div className='center-content p-8 confirm-email-wrapper'>
//       <h1>Please check your email</h1>
//       <Button
//         value='value 2 bruh'
//         type='submit'
//         tag='a'
//         color='secondary'
//         wideMobile
//         onClick={() => nextStep(2)}
//       >
//         Continue
//       </Button>
//     </div>
//   );
// }
