import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../../utils/SectionProps';
import SectionHeader from '.././partials/SectionHeader';
import Button from '../../elements/Button';

const propTypes = {
  ...SectionTilesProps.types
};

const defaultProps = {
  ...SectionTilesProps.defaults
};

const SimpleIntegration = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
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
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames('tiles-wrap', pushLeft && 'push-left');

  const sectionHeader = {
    title: 'Integration is Easy',
    paragraph: ''
  };

  return (
    <section {...props} className={outerClasses}>
      <div className='container'>
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className='center-content' />
          <div className='flex-row col-sm'>
            <div
              className='tiles-item reveal-from-right'
              data-reveal-delay='200'
            >
              <div className='tiles-item-inner center-content'>
                <h3>Online</h3>
                <div className=''>
                  <p className='text-sm mb-0'>
                    Adding XPay to your checkout is very simple and consists of
                    several lines of code that we prepare for you. Since XPay
                    customers no longer need to complete checkout forms, the
                    code is placed before the form. The customer experience is
                    equally simple.{' '}
                  </p>
                </div>
                <br />
                <div className='flex-col text-left'>
                  <div className='flex-row-center'>
                    <h4 className='pr-12 text-color-primary'>1</h4>
                    <p>They simply choose to pay with XPay.</p>
                  </div>
                  <br />
                  <div className='flex-row-center'>
                    <h4 className='pr-12 text-color-primary'>2</h4>
                    <p>
                      A small popover then appears containing the XPay Purchase
                      Code.
                    </p>
                  </div>
                  <br />
                  <div className='flex-row-center'>
                    <h4 className='pr-12 text-color-primary'>3</h4>
                    <p>
                      Once the code is scanned and the customer approves the
                      purchase, the result is sent back to your web page.
                    </p>
                  </div>
                  <br />
                  <Button
                    tag='a'
                    color='primary'
                    wideMobile
                    href='https://github.com/cruip/open-react-template/'
                  >
                    Learn More &#8594;
                  </Button>
                </div>
              </div>
            </div>

            <div
              className='tiles-item reveal-from-right'
              data-reveal-delay='200'
            >
              <div className='tiles-item-inner center-content'>
                <h3>On-Site</h3>
                <div className=''>
                  <p className='text-sm mb-0'>
                    You can offer XPay at your establishment in one of two ways.
                  </p>
                </div>
                <br />
                <div className='flex-col text-left'>
                  <div className='flex-row-center'>
                    <h4 className='pr-12 text-color-primary'>1</h4>
                    <p>
                      {' '}
                      The quickest and easiest method is with an XPay kiosk. The
                      sale total is simply keyed into the kiosk, which then
                      displays the Purchase Code for the customer to scan. Full
                      reporting is available for export into your favorite
                      accounting software.
                    </p>
                  </div>
                  <br />
                  <div className='flex-row-center'>
                    <h4 className='pr-12 text-color-primary'>2</h4>
                    <p>
                      Deeper integration with your POS is also available with
                      most modern systems. Please contact us for details and
                      integration requirements for your specific system.
                    </p>
                  </div>
                  <br />
                  <Button
                    tag='a'
                    color='primary'
                    wideMobile
                    href='https://github.com/cruip/open-react-template/'
                  >
                    Learn More &#8594;
                  </Button>
                  <br />
                </div>
              </div>
            </div>

            <div
              className='tiles-item reveal-from-right'
              data-reveal-delay='200'
            >
              <div className='tiles-item-inner center-content'>
                <h3>On the phone</h3>
                <div className=''>
                  <p className='text-sm mb-0'>
                    Rather than take a credit card over the phone, your call
                    center can now simply push a sale code to the customer's
                    phone. This is done through your XPay Business Portal, which
                    is accessible via desktop, tablet or phone.
                  </p>
                </div>
                <br />
                <div className='flex-col text-left'>
                  <div className='flex-row-center'>
                    <h4 className='pr-12 text-color-primary'>1</h4>
                    <p>
                      {' '}
                      Using your XPay business portal, simply enter a customer's
                      phone number along with the sale amount and hit "Send".
                    </p>
                  </div>
                  <br />
                  <div className='flex-row-center'>
                    <h4 className='pr-12 text-color-primary'>2</h4>
                    <p>
                      If the customer does not already have the XPay app, they
                      can install it immediately. If they do, they will receive
                      a notification with the details of the sale and all they
                      have to do next is touch, "Purchase."
                    </p>
                  </div>
                  <br />
                  <Button
                    tag='a'
                    color='primary'
                    wideMobile
                    href='https://github.com/cruip/open-react-template/'
                  >
                    Learn More &#8594;
                  </Button>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

SimpleIntegration.propTypes = propTypes;
SimpleIntegration.defaultProps = defaultProps;

export default SimpleIntegration;
