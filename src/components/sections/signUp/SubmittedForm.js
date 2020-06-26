import React from 'react';
import Button from '../../elements/Button';
import { Link } from 'react-router-dom';

export default function SubmittedForm() {
  return (
    <div className='center-content p-8'>
      <h1>THANK YOU FOR YOUR ORDER!</h1>
      <Link to='/'>
        <Button
          value='value 2 bruh'
          type='submit'
          tag='button'
          color='secondary'
          wideMobile
        >
          Return Home
        </Button>
      </Link>
    </div>
  );
}
