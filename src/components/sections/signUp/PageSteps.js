import React from 'react';

export default function PageSteps({ step }) {
  return (
    <div className=''>
      {/* <ul className='progress-bar flex-row-around'>
        <li className='active'>Create your account</li>
        <li className={step !== 1 ? 'active' : ''}>Tell us about yourself</li>
        <li className={step ===  3 ? 'active' : ''}>Connect Your Bank</li>
      </ul> */}
      <ul id='progressbar'>
        <li className='active'>
          <span className='page-step'>Account Setup</span>
        </li>
        <li className={step !== 1 ? 'active' : ''}>
          {' '}
          <span className='page-step'>Personal Detail</span>
        </li>
        <li className={step === 3 ? 'active' : ''}>
          {' '}
          <span className='page-step'>Bank Details</span>
        </li>
      </ul>
    </div>
  );
}
