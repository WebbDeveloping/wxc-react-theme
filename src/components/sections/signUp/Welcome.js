import React from 'react'
import Button from '../../elements/Button';

export default function SubmittedForm({nextStep}) {
    return (
        <div className='center-content p-8'>
            <h1>Your Email and Password are correct</h1>
            <Button
          value='value 2 bruh'
          type='submit'
          tag='a'
          color='secondary'
          wideMobile
          onClick={()=>nextStep(2)}
        >
          Next Step
        </Button>
        </div>
    )
}