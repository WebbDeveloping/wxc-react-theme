import React, { useState } from 'react';

export default function HeroScrollButtons({ click, data }) {
  const [activeTab1, setActive1] = useState('active-btn');
  const [activeTab2, setActive2] = useState('');
  const [activeTab3, setActive3] = useState('');
  const [activeTab4, setActive4] = useState('');
  const setTab = e => {
    if (e === 1) {
      setActive1('active-btn');
      setActive2('');
      setActive3('');
      setActive4('');
      click('1');
    }
    if (e === 2) {
      setActive1('');
      setActive2('active-btn');
      setActive3('');
      setActive4('');
      click('2');
    }
    if (e === 3) {
      setActive1('');
      setActive2('');
      setActive3('active-btn');
      setActive4('');
      click('3');
    }
    if (e === 4) {
      setActive1('');
      setActive2('');
      setActive3('');
      setActive4('active-btn');
      click('4');
    }
  };
  // console.log(activeTab1);
  // const activeTab1 = 'active-btn';
  return (
    <div className='container  w-100 sm-hide'>
      <div className='box-container flex-row-around center-content col-sm-between '>
        <div
          onClick={() => setTab('1')}
          className={`${activeTab1} box button-square`}
        >
          <h4>X-WORLD</h4>
        </div>
        <div
          onClick={() => setTab('2')}
          className={`${activeTab2} box button-square`}
        >
          <h4>BUSINESS</h4>
        </div>
        <div
          onClick={() => setTab('3')}
          className={`${activeTab3} box button-square`}
        >
          <h4>INSTITUTIONAL</h4>
        </div>
        <div
          onClick={() => setTab('4')}
          className={`${activeTab4} box button-square`}
        >
          <h4>PERSONAL</h4>
        </div>
      </div>
    </div>
  );
}
