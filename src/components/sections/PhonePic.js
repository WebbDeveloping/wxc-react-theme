import React from 'react';

export default function PhonePic() {
  return (
    <div className='flex-row-center h-100 col-sm-center'>
      <div className='h-100 lg-w-50 lg-p-32 phone-img reveal-from-left mt-32'>
        <img
          src={require('./../../assets/images/wxc/varophone.png')}
          alt='Features split 01'
        />
      </div>
      <div className='lg-w-50 reveal-from-right lg-p-32 h-100 sm-p-4'>
        <div className='h-100 p-16 center-content-mobile'>
          <h2 className='center-content'>
            How banking with no <br /> overdraft fees works.
          </h2>
          <p>
            No Fee Overdraft gives you the flexibility to overdraw your account
            up to $50 on any transaction made with your XBanc Visa® Debit Card
            once you qualify. There are absolutely no fees or interest charges.
          </p>
          <p>Meet both of these requirements to qualify:</p>
          <ul>
            <li>
              Make at least five qualifying XBanc Visa® Debit Card purchases in
              each calendar month AND
            </li>
            <li>
              Receive total payroll or government direct deposits of $1,000 or
              more in the same calendar month.
            </li>
          </ul>
          <p>
            Once you qualify, enroll by turning on No Fee Overdraft in the app.
            See full terms and conditions here.
          </p>
          <h2>Easy overdraft payback</h2>
          <p>
            Get the coverage you need, then repay the overdraft within 30 days
            from when your balance first goes negative. Repayment is
            automatically deducted from your next deposit.
          </p>
        </div>
      </div>
    </div>
  );
}
