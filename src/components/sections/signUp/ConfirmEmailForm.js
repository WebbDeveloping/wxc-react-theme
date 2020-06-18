import React from 'react'
import Button from '../../elements/Button';

export default function ConfirmEmailForm({nextStep}) {
    return (
        <div className='center-content p-8'>
            <h1>Please check your email</h1>
            <Button
          value='value 2 bruh'
          type='submit'
          tag='a'
          color='secondary'
          wideMobile

          onClick={()=>nextStep(2)}
        >
          Continue
        </Button>
        </div>
    )
}