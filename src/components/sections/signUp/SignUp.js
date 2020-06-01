import React from 'react';
import classNames from 'classnames';
import Button from '../../elements/Button';
import Image from '../../elements/Image';
import Radio from '../../elements/Radio';
import FormLabel from '../../elements/FormLabel';
import Input from '../../elements/Input';
import { Link } from 'react-router-dom';
import PageSteps from './PageSteps';

// let step1 = 'active'
let step1 = ''
let step2 = 'lg-hide'
let step3 = 'lg-hide'

export default function SignUp({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) {
  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
    'bg-color-dark',
    'reveal-from-top'
  );

  const tilesClasses = classNames('tiles-wrap', pushLeft && 'push-left');
  return (
    <section {...props} className={outerClasses}>
      <div className=''>
      <br className='sm-hide'/>
      <div className='sm-hide'>
        <PageSteps />
      </div>
      <br className='sm-hide'/>
        <div className={innerClasses}>
          <div className='flex-row-around col-sm'>
          {/* FIRST BOX */}
            <div
              className={`tiles-item w-100 reveal-from-right bg-color-primary ${step1}`}
              data-reveal-delay='200'
            >
              <div className='tiles-item-inner center-content w-100'>
                <h3>Apply for an XBanc Account today.</h3>
                <br />
                <div className='flex-col text-left '>
                  <div className='flex-col'>
                    <Input placeholder='First Name' />
                  </div>
                  <br />
                  <div className='flex-col'>
                    <Input placeholder='Last Name' />
                  </div>
                  <br />
                  <div className='flex-col'>
                    <Input placeholder='Email' />
                  </div>
                  <br />
                  <div className='flex-col'>
                    <Input placeholder='Password' />
                  </div>
                  <br />
                  <br />
                  <Button
                    tag='a'
                    color='primary'
                    wideMobile
                    href='https://github.com/cruip/open-react-template/'
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
            {/* SECOND-BOX */}
            <div
              className={`tiles-item w-100 reveal-from-right bg-color-primary ${step2}`}
              data-reveal-delay='200'
            >
              <div className='tiles-item-inner center-content w-100'>
                <h3>SELL US YOUR SOUL</h3>
                <br />
                <div className='flex-col text-left '>
                  <div className='flex-col'>
                    <Input placeholder='First Born' />
                  </div>
                  <br />
                  <div className='flex-col'>
                    <Input placeholder='Blood Type' />
                  </div>
                  <br />
                  <div className='flex-col'>
                    <Input placeholder='Human Id Number' />
                  </div>
                  <br />
                  <div className='flex-col'>
                    <Input placeholder='Deepest Secret' />
                  </div>
                  <br />
                  <br />
                  <Button
                    tag='a'
                    color='primary'
                    wideMobile
                    href='https://github.com/cruip/open-react-template/'
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
            {/* THIRD-BOX */}
            <div
              className={`tiles-item w-100 reveal-from-right bg-color-primary ${step3}`}
              data-reveal-delay='200'
            >
              <div className='tiles-item-inner center-content w-100'>
                <h3>SELL US YOUR SOUL</h3>
                <br />
                <div className='flex-col text-left '>
                  <div className='flex-col'>
                    <Input placeholder='First Born' />
                  </div>
                  <br />
                  <div className='flex-col'>
                    <Input placeholder='Blood Type' />
                  </div>
                  <br />
                  <div className='flex-col'>
                    <Input placeholder='Human Id Number' />
                  </div>
                  <br />
                  <div className='flex-col'>
                    <Input placeholder='Deepest Secret' />
                  </div>
                  <br />
                  <br />
                  <Button
                    tag='a'
                    color='primary'
                    wideMobile
                    href='https://github.com/cruip/open-react-template/'
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
            {/* image container */}
            <div
              className={`hero-content flex-col-center sm-w-100 w-50 lg-mr-32`}
            >
              <Image
                src={require(`../../../assets/Svg/security.svg`)}
                alt='Features tile icon 03'
                width={450}
                height={450}
              />
            </div>
          </div>
        </div>
        <hr />
        <div className='container fs-16'>
          <p>
            All rights Reserved by XBanc, LLC 2020. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Libero, ab. Officia labore in
            molestiae qui quaerat id magni minus cum quisquam excepturi adipisci
            doloribus neque, odio iusto corrupti? Optio, nisi?
          </p>
          <br />
          <p>
            See the xBanc Account Agreement on the web. or in our iOSopens in
            new window and Androidopens in new window apps for details on
            deposits, bills, transfers, and withdrawals including dollar limits,
            frequency and funds availability policy, i.e. how much money you can
            move per transaction, how many times, and how long it takes for
            funds to be available.
          </p>
          <br />
          <p>
            ^No Fee Overdraft requirements: No Fee Overdraft gives you
            flexibility to overdraw your account up to $50 on any transaction
            made with your Varo Visa Debit Card. To qualify: Make at least five
            qualifying debit card purchases in each calendar month, AND Receive
            total payroll or government direct deposits of $1,000 or more in the
            same calendar month. Enroll by turning on No Fee Overdraft in the
            app.
          </p>
          <p>
            ^No Fee Overdraft requirements: No Fee Overdraft gives you
            flexibility to overdraw your account up to $50 on any transaction
            made with your Varo Visa Debit Card. To qualify: Make at least five
            qualifying debit card purchases in each calendar month, AND Receive
            total payroll or government direct deposits of $1,000 or more in the
            same calendar month. Enroll by turning on No Fee Overdraft in the
            app.
          </p>
          <p>
            ^No Fee Overdraft requirements: No Fee Overdraft gives you
            flexibility to overdraw your account up to $50 on any transaction
            made with your Varo Visa Debit Card. To qualify: Make at least five
            qualifying debit card purchases in each calendar month, AND Receive
            total payroll or government direct deposits of $1,000 or more in the
            same calendar month. Enroll by turning on No Fee Overdraft in the
            app.
          </p>
        </div>
      </div>
    </section>
  );
}
