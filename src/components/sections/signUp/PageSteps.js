import React from 'react';

export default function PageSteps({step}) {
  return (
    <div className='w-100'>
      <ul className='progress-bar flex-row-around'>
        <li className='active'>Create your account</li>
        <li className={step !== 1 ? 'active' : ''}>Tell us about yourself</li>
        <li className={step ===  3 ? 'active' : ''}>Connect Your Bank</li>
        {/* <li className={step == 4 ? 'active' : ''}>Success</li> */}
      </ul>
    </div>
  );
}
