import React, { useState } from 'react';
import classNames from 'classnames';
import Button from '../../elements/Button';
import Image from '../../elements/Image';
import Radio from '../../elements/Radio';
import FormLabel from '../../elements/FormLabel';
import Input from '../../elements/Input';
import { Link } from 'react-router-dom';
import PageSteps from './PageSteps';
import StepOne from './StepOne';
import StepThree from './StepThree';
import StepTwo from './StepTwo';
import SubmittedForm from './SubmittedForm';

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
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    addressOne: '',
    addressTwo: '',
    zipCode: '',
    country: '',
    state: '',
    city: '',
    number: '',
    name: '',
    quest: '',
    color: '',
    swollow: '',
    termsAccepted: false
  });
  // FORM ONE
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //FORM TWO
  const [addressOne, setaddressOne] = useState('');
  const [addressTwo, setaddressTwo] = useState('');
  const [zipCode, setzipCode] = useState('');
  const [country, setcountry] = useState('');
  const [state, setstate] = useState('');
  const [city, setcity] = useState('');
  const [number, setNumber] = useState('');
  //FORM THREE
  const [name, setName] = useState('');
  const [quest, setQuest] = useState('');
  const [color, setColor] = useState('');
  const [swollow, setSwollow] = useState('');
  const [termsAccepted, setTermsAccepted] = useState('');

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
    'bg-color-dark'
  );
  const nextStep = e => {
    if (e == 2) {
      setStep(2);
    } else if (e == 3) {
      setStep(3);
    } else if (e == 4) {
      setStep(4);
    } else if (e == 1) {
      setStep(1);
    }
  };

  const submit = userData => {
    console.log('ud', userData);
    setData({
      firstName,
      lastName,
      email,
      password,
      addressOne,
      addressTwo,
      zipCode,
      country,
      state,
      city,
      number,
      name,
      quest,
      color,
      swollow
    });
    console.log('data', data);
  };

  const checkStep = e => {
    if (step <= 3) {
      return step == 2 ? (
        <StepTwo nextStep={nextStep} setData={setData} data={data} />
      ) : (
        <StepThree
          nextStep={nextStep}
          setData={setData}
          data={data}
          submit={submit}
        />
      );
    } else if (step == 4) {
      //Thank You Page
      return <SubmittedForm nextStep={nextStep} />;
    }
  };

  return (
    <section {...props} className={outerClasses}>
      <div className=''>
        <br className='sm-hide' />
        <div className='sm-hide'>
          <PageSteps step={step} />
        </div>
        <br className='sm-hide' />
        <div className={innerClasses}>
          <div className='flex-row-around col-sm-center'>
            {/* Form BOX */}
            <div className=' lg-w-100  bg-color-primary'>
              {step == 1 ? (
                <StepOne nextStep={nextStep} setData={setData} data={data} />
              ) : (
                checkStep()
              )}
            </div>
            <br className='lg-hide' />
            <br className='lg-hide' />
            <br className='lg-hide' />
            <br className='lg-hide' />
            {/* image container */}
            <div
              className={`hero-content flex-col-center sm-w-100 w-50 lg-mr-32`}
            >
              {/* <Image
                src={require(`../../../assets/Svg/security.svg`)}
                alt='Features tile icon 03'
                width={450}
                height={450}
              /> */}
              <div className='login-box flex-col card-bg'>
                <div className='text-color-primary '>
                  <div className='m-0 p-0 bg-color-light-2'>
                    <h6 className='text-color-secondary m-0 p-0'>
                      “A hard-to-beat combo: free checking and high-yield
                      savings”
                    </h6>
                  </div>
                  <p className='text-color-light mt-32'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint recusandae, natus rerum deleniti nihil doloremque
                    minima consequuntur assumenda at et optio illo, quibusdam ab
                    in molestias porro aperiam quasi aut.
                  </p>
                  <p className='text-color-secondary'>- Joe Dirt</p>
                </div>
                {/* <div className='bg-white text-color-primary m-16 p-16'>
                  <h4 className='text-color-primary'>
                    “A hard-to-beat combo: free checking and high-yield savings”
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint recusandae, natus rerum deleniti nihil doloremque
                    minima consequuntur assumenda at et optio illo, quibusdam ab
                    in molestias porro aperiam quasi aut.
                  </p>
                </div> */}
              </div>
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
