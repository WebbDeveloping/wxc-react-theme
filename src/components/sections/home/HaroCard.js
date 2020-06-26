import React from 'react';
import Button from '../../elements/Button';
import Image from '../../elements/Image';
import { Link } from 'react-router-dom';

export default function HaroCard({ data, animateRight }) {
  return (
    <div className='flex-row hero-bg-img sm-hide'>
      <div className='col-sm w-50 sm-hide relative'>
        <div className='hero-content p-32 lg-mr-32 img-absolute bold p-8 flex-col-center w-100  reveal-from-left'>
          <h1 className='mb-0 fs-80'>
            <span className='text-color-secondary fs-80'>
              {data['color-heading']}
            </span>
            {data['heading']}
          </h1>
          <h1 className='mb-4 mt-4 fs-80'>{data['heading-2']}</h1>
          <div className='container-xs'>
            <p className=' m-4'>{data['subheading']}</p>
            <br />
            <div className=''>
              <Link to='/sign-up'>
                <Button tag='button' color='secondary' wideMobile>
                  {data['button-text']}
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className='hero__mask h-100 w-100 sm-hide'>
          <svg
            className='hero-svg h-100 w-100'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 308.24 228.66'
          >
            <g data-name='Layer 2' fill='#00376D'>
              <g id='OBJECTS'>
                <g className='homeHero-1-1'>
                  <path d='M0,0V228.66c30.42-5.57,58.38-17.85,78.08-41.44,17-20.35,25.31-46.42,36.17-70.67s26.17-48.66,50.51-59c34.37-14.56,76.73,3.09,110-13.78,17.23-8.73,28.1-25,33.44-43.8Z'></path>
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
      <div
        className={`hero-content flex-col-center w-50 lg-mr-32 ${animateRight}`}
      >
        <Image
          src={require(`../../../assets/Svg/${data['img-path']}`)}
          alt='Features tile icon 03'
          width={450}
          height={450}
        />
      </div>
    </div>
  );
}
