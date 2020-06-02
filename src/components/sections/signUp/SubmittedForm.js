import React from 'react'
import Button from '../../elements/Button';

export default function SubmittedForm() {
    return (
        <div className='center-content'>
            <h1>THANK YOU FOR YOUR ORDER!</h1>
            <Button
          value='value 2 bruh'
          type='submit'
          tag='a'
          color='primary'
          wideMobile
          href='/'
        >
          Return Home
        </Button>
        </div>
    )
}
