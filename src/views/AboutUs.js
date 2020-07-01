import React from 'react';
import LearnMore from '../components/sections/LearnMore';
import Cta from '../components/sections/Cta';
import HeroNoImg from '../components/sections/HeroNoImg';
import VideoSection from '../components/sections/VideoSection';

const AboutUs = () => {
  return (
    <>
      <HeroNoImg className='illustration-section-01' />
      <div className='container has-bg-color'>
        <br />
        <br />
        <br />
        <br />
        <div className='flex-row-start reveal-from-left'>
          <div className='bg-color-light-2 p-16 m-16 pt-4 pb-4 about flex-row-center'>
            <div class='dot'></div>
            <h6>FOUNDERS</h6>
            <div class='dot'></div>
          </div>
        </div>
        <div className='flex-row-center col-sm'>
          <div className='bg-color-light-2 w-100 p-16 m-16 reveal-from-left'>
            <div className='inner-card'>
              <div className='img-container'>
                <img
                  className=''
                  src={require('../assets/images/wxc/avatar_greg.png')}
                  alt='Features split 03'
                />
              </div>
              <hr />
              <div className='name-container'>
                <h6>Captin Jack Sparrow</h6>
              </div>
              <div className='flex-col-start has-shadow p-16'>
                <p>Los Ocho</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
                  optio et voluptas ut quos cupiditate ad.
                </p>
                <h6>Skills</h6>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
                  totam ducimus nemo officiis aspernatur tempora autem ratione
                  soluta provident, molestias vero numquam officia dolor,
                  veritatis asperiores amet quibusdam, neque reiciendis.
                </p>
              </div>
            </div>
          </div>
          <div className='bg-color-light-2 w-100 p-16 m-16 reveal-from-bottom'>
            <div className='inner-card'>
              <div className='img-container'>
                <img src={require('../assets/images/wxc/avatar_sandy.png')} alt='sandy avatar' />
              </div>
              <hr />
              <div className='name-container'>
                <h6>Captin Jack Sparrow</h6>
              </div>
              <div className='flex-col-start has-shadow p-16'>
                <p>Los Ocho</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
                  optio et voluptas ut quos cupiditate ad.
                </p>
                <h6>Skills</h6>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
                  totam ducimus nemo officiis aspernatur tempora autem ratione
                  soluta provident, molestias vero numquam officia dolor,
                  veritatis asperiores amet quibusdam, neque reiciendis.
                </p>
              </div>
            </div>
          </div>
          <div className='bg-color-light-2 w-100 p-16 m-16 reveal-from-right'>
            <div className='inner-card'>
              <div className='img-container'>
                <img src={require('../assets/images/wxc/avatar_ben.png')} alt='ben avatar' />
              </div>
              <hr />
              <div className='name-container'>
                <h6>Captin Jack Sparrow</h6>
              </div>
              <div className='flex-col-start has-shadow p-16'>
                <p>Los Ocho</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
                  optio et voluptas ut quos cupiditate ad.
                </p>
                <h6>Skills</h6>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
                  totam ducimus nemo officiis aspernatur tempora autem ratione
                  soluta provident, molestias vero numquam officia dolor,
                  veritatis asperiores amet quibusdam, neque reiciendis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container has-bg-color'>
        <br />
        <br />
        <br />
        <br />
        <div className='flex-row-start reveal-from-left'>
          <div className='bg-color-light-2 p-16 m-16 pt-4 pb-4 about flex-row-center'>
            <div class='dot'></div>
            <h6>ABOUT XBANC</h6>
            <div class='dot'></div>
          </div>
        </div>
        <VideoSection />
      </div>
      <div className='container has-bg-color'>
        <br />
        <br />
        <br />
        <br />
        <div className='flex-row-start reveal-from-left'>
          <div className='bg-color-light-2 p-16 m-16 pt-4 pb-4 about flex-row-center'>
            <div class='dot'></div>
            <h6>ABOUT XBANC</h6>
            <div class='dot'></div>
          </div>
        </div>
        <div className='container p-16 m-16 flex-row-start'>
          <div className='slc-map flex-row'>
            <img
              src={require('../assets/images/wxc/test/slc-map.png')}
              alt='Features tile icon 01'
              width={96}
              height={96}
            />
            <div className='address-box'>
              <p className='m-0'>PO Box 7492 Loveland, Colorado 80537 USA </p>
              <p className='m-0'> hello@world-xchange.com</p>
              <p className='m-0'> 833-473-XPAY (9729)</p>
            </div>
          </div>
          <div className='address-box'>
            {/* <p className='m-0'>PO Box 7492 Loveland, Colorado 80537 USA </p>
            <p className='m-0'> hello@world-xchange.com</p>
            <p className='m-0'> 833-473-XPAY (9729)</p> */}
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
      <LearnMore invertMobile imageFill />
      <Cta split />
    </>
  );
};

export default AboutUs;
