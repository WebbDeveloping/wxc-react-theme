import React from 'react';

export default function LoadingBars({ text, loadingClass }) {

  return (
    <React.Fragment>
      <h4 className='flex-col-center'>{text}</h4>
      <br />
      <div className={loadingClass}>
        <div className='loading-bar'></div>
        <div className='loading-bar'></div>
        <div className='loading-bar'></div>
        <div className='loading-bar'></div>
      </div>
    </React.Fragment>
  );
}
