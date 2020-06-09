import React from 'react';

export default function PageSteps({step}) {
  // const checkStep = e => {
  //   console.log('step', step);
  //   if (step <= 3) {
  //     return step == 2 ? (
  //       <StepTwo nextStep={nextStep} />
  //     ) : (
  //       <StepThree nextStep={nextStep} />
  //     );
  //   } else if (step == 4) {
  //     return <SubmittedForm nextStep={nextStep} />;
  //   }
  // };
  return (
    <div className='w-100'>
      <ul className='progress-bar flex-row-around'>
        <li className='active'>Create your account</li>
        <li className={step != 1 ? 'active' : ''}>Tell us about yourself</li>
        <li className={step ==  3 ? 'active' : ''}>Connect Your Bank</li>
        {/* <li className={step == 4 ? 'active' : ''}>Success</li> */}
      </ul>
    </div>
  );
}
