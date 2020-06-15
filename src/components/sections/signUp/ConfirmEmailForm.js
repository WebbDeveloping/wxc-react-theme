import React from 'react'
import Button from '../../elements/Button';

export default function ConfirmEmailForm() {
    return (
        <div className='center-content p-8'>
            <h1>Please check your email</h1>
            <Button
          value='value 2 bruh'
          type='submit'
          tag='a'
          color='secondary'
          wideMobile
          href='/'
        >
          Return Home
        </Button>
        </div>
    )
}