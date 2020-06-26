import React from 'react';
import Button from '../../elements/Button';
import ButtonGroup from '../../elements/ButtonGroup';
import { Link } from 'react-router-dom';

export default function ComparisonChart() {
  return (
    <div className='container'>
      <div className='p-32 w-75 comparison-chart-wrap mb-32'>
        <h1>Why People Choose XBanc</h1>
        <div className='comparison-chart-row header-row'>
          <div className='comparison-chart-cell colspan-2 text-xs text-color-secondary'>
            <b>Features</b>
          </div>
          <div className='comparison-chart-cell text-color-secondary text-xs'>
            <b>Other Banks</b>
          </div>
          <div className='comparison-chart-cell text-color-secondary text-xs'>
            <b>XBanc</b>
          </div>
        </div>
        <div className='comparison-chart-row'>
          {' '}
          <div className='comparison-chart-cell colspan-2 text-xs'>
            Earn rewards for human solves
          </div>
          <div className='comparison-chart-cell'>Limited</div>
          <div className='comparison-chart-cell'>Total</div>
        </div>
        <div className='comparison-chart-row'>
          {' '}
          <div className='comparison-chart-cell colspan-2 text-xs'>
            World-class anti-bot protection
          </div>
          <div className='comparison-chart-cell'>
            {' '}
            <img
              src={require('../../../assets/Svg/checkmark.svg')}
              alt='Features split 01'
            />
          </div>
          <div className='comparison-chart-cell'>
            {' '}
            <img
              src={require('../../../assets/Svg/checkmark.svg')}
              alt='Features split 01'
            />
          </div>
        </div>
        <div className='comparison-chart-row'>
          {' '}
          <div className='comparison-chart-cell colspan-2 text-xs'>
            GDPR and CCPA-friendly privacy policy
          </div>
          <div className='comparison-chart-cell'>
            {' '}
            <img
              src={require('../../../assets/Svg/checkmark.svg')}
              alt='Features split 01'
            />
          </div>
          <div className='comparison-chart-cell'>
            {' '}
            <img
              src={require('../../../assets/Svg/checkmark.svg')}
              alt='Features split 01'
            />
          </div>
        </div>
        <div className='comparison-chart-row'>
          {' '}
          <div className='comparison-chart-cell colspan-2 text-xs'>
            Launch your own challenge content
          </div>
          <div className='comparison-chart-cell'>
            {' '}
            <img
              src={require('../../../assets/Svg/cross.svg')}
              alt='Features split 01'
            />
          </div>
          <div className='comparison-chart-cell'>
            {' '}
            <img
              src={require('../../../assets/Svg/checkmark.svg')}
              alt='Features split 01'
            />
          </div>
        </div>
        <div className='comparison-chart-row'>
          {' '}
          <div className='comparison-chart-cell colspan-2 text-xs'>
            Multi-user dashboards
          </div>
          <div className='comparison-chart-cell'>
            {' '}
            <img
              src={require('../../../assets/Svg/cross.svg')}
              alt='Features split 01'
            />
          </div>
          <div className='comparison-chart-cell'>
            {' '}
            <img
              src={require('../../../assets/Svg/checkmark.svg')}
              alt='Features split 01'
            />
          </div>
        </div>
        <div className='comparison-chart-row'>
          {' '}
          <div className='comparison-chart-cell colspan-2 text-xs'>
            Advanced reporting features
          </div>
          <div className='comparison-chart-cell'>
            {' '}
            <img
              src={require('../../../assets/Svg/cross.svg')}
              alt='Features split 01'
            />
          </div>
          <div className='comparison-chart-cell'>
            {' '}
            <img
              src={require('../../../assets/Svg/checkmark.svg')}
              alt='Features split 01'
            />
          </div>
        </div>
        <div className='comparison-chart-row'>
          {' '}
          <div className='comparison-chart-cell colspan-2 text-xs'>
            Fine-grained difficulty levels
          </div>
          <div className='comparison-chart-cell'>
            {' '}
            <img
              src={require('../../../assets/Svg/cross.svg')}
              alt='Features split 01'
            />
          </div>
          <div className='comparison-chart-cell'>
            {' '}
            <img
              src={require('../../../assets/Svg/checkmark.svg')}
              alt='Features split 01'
            />
          </div>
        </div>
        <div className='reveal-from-bottom mt-16' data-reveal-delay='600'>
          <ButtonGroup>
            <Link to='/sign-up'>
              <Button tag='button' color='primary'>
                Get Started
              </Button>
            </Link>
            <Link to='/sign-up'>
              <Button tag='button' color='secondary'>
                Read More
              </Button>
            </Link>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
}
