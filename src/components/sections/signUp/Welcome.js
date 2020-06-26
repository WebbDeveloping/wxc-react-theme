import React from 'react';
import Button from '../../elements/Button';
import { Link } from 'react-router-dom';

export default function SubmittedForm({ nextStep }) {
  return (
    <div className='center-content p-8'>
      <h1>Your Email and Password are correct</h1>
      <Link to='/'>
        <Button
          value='value 2 bruh'
          type='submit'
          tag='button'
          color='secondary'
          wideMobile
          onClick={() => nextStep(2)}
        >
          Next Step
        </Button>
      </Link>
    </div>
  );
}
