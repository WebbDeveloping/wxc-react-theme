import React from 'react';
import Button from '../../elements/Button';
import ButtonGroup from '../../elements/ButtonGroup';

export default function ComparisonChart() {
  return (
    <div className='container-sm comparison-chart-wrap mb-32'>
      <h1>Why People Choose XBanc</h1>
      <div className='comparison-chart-row header-row'>
        <div className='comparison-chart-cell colspan-2 text-color-secondary'>
          <b>Features</b>
        </div>
        <div className='comparison-chart-cell text-color-secondary'>
          <b>Other Banks</b>
        </div>
        <div className='comparison-chart-cell text-color-secondary'>
          <b>XBanc</b>
        </div>
      </div>
      <div className='comparison-chart-row'>
        {' '}
        <div className='comparison-chart-cell colspan-2'>
          Control challenge types shown
        </div>
        <div className='comparison-chart-cell'>Limited</div>
        <div className='comparison-chart-cell'>Total</div>
      </div>
      <div className='comparison-chart-row'>
        {' '}
        <div className='comparison-chart-cell colspan-2'>
          Earn rewards for human solves
        </div>
        <div className='comparison-chart-cell'>Limited</div>
        <div className='comparison-chart-cell'>Total</div>
      </div>
      <div className='comparison-chart-row'>
        {' '}
        <div className='comparison-chart-cell colspan-2'>
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
        <div className='comparison-chart-cell colspan-2'>
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
        <div className='comparison-chart-cell colspan-2'>
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
        <div className='comparison-chart-cell colspan-2'>
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
        <div className='comparison-chart-cell colspan-2'>
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
        <div className='comparison-chart-cell colspan-2'>
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
          <Button tag='a' color='primary' wideMobile href='/sign-up'>
            Get started
          </Button>
          <Button
            tag='a'
            color='secondary'
            wideMobile
            href='sign-up'
          >
            Read More
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
}
