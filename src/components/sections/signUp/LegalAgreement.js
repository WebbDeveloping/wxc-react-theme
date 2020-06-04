import React, { useState } from 'react';
import {Link} from 'react-router-dom';

export default function LegalAgreement() {

  return (
    //we need padding 30 around the whole container
    <div>
      <div className='p-32 text-color-high'>
        <br />
        <br />
        <br />
        <br />
        <h4 className='text-color-high'>XPay - Terms of Service- Consumer (U.S.)</h4>
        <p>
          These Terms of Service are a legal agreement between you and World
          XPay Inc., (XPay), a wholly-owned business subsidiary of World
          XChange, Inc., that governs your access to and use of the Services (as
          defined below). Please review these terms of service before you decide
          whether to accept them and continue with the registration process.
          These Terms of Service are divided into the following parts:
        </p>

        <ol type='A'>
          <li>Definitions</li>
          <li>XPay and Processing Service Terms</li>
          <li>General Terms</li>
        </ol>
        <br />

        <p>By accepting this Agreement, You represent the following:</p>
        <ul>
          <li>
            <p>You are 18 years of age or older; and</p>
          </li>
          <li>
            <p>Capable of entering into a legally binding agreement.</p>
          </li>
        </ul>
        <p>If you are a business entity, you also represent that you are:</p>
        <ul>
          <li>
            <p>
              Duly authorized to do business in the country or countries where
              you operate; and
            </p>
          </li>
          <li>
            <p>
              Your employees, officers, representatives, and other agents
              accessing the Services are duly authorized to access the Services
              and to legally bind you to these Terms of Service and all
              transactions conducted under your user name and password.
            </p>
          </li>
        </ul>
        <p>
          By agreeing to these Terms of Service, you authorize XPay to charge
          your Payment Instrument, as defined/pre-defined by you, as applicable,
          when you incur transactions or fees using any of the services offered
          hereunder.
        </p>
        <p>
          <strong>A. Definitions</strong>
        </p>
        <ol>
          <li>
            <p>
              <strong>
                <u>Definitions appearing in these Terms of Service</u>
              </strong>
            </p>
          </li>
          <ol type='a'>
            <li>
              <p>
                "Applicable Law": Any and all federal, state, and local laws,
                rules, and regulations applicable to the Services.
              </p>
            </li>
            <li>
              <p>
                "Buyer": A customer using a Service to purchase goods and/or
                services from a seller.
              </p>
            </li>
            <li>
              <p>"Customer'': A person who registers for the Service(s).</p>
            </li>
            <li>
              <p>
                "Registered Seller": Any seller of goods and services that
                subscribes to XPay and is considered a legitimate business
                entity by their merchant processing bank, as evidenced by a
                merchant processing bank approval and identification number.
              </p>
            </li>
            <li>
              <p>
                "Payment Transaction Processing": The service by which XPay
                holds a Buyer's registered Payment Instrument information on its
                servers. At the time of Buyer's purchase from a Registered
                Seller, XPay (without transmitting Payment Instrument
                information to the Registered Seller) secures the payment
                authorization and communicates transaction approval to both the
                Buyer and Registered Seller.
              </p>
            </li>
            <li>
              <p>
                "Payment Instrument": A credit card, debit card, ACH enabled
                checking or saving account, merchant gift card, other prepaid
                payment methods, or legally accepted digital currency to include
                virtual cards and account numbers.
              </p>
            </li>
            <li>
              <p>
                "Payment Transaction": The processing of a payment that results
                in the debiting, charging, or other related transaction of the
                Purchase Amount to a Buyer's Payment Instrument.
              </p>
            </li>
            <li>
              <p>
                "Processing Service": The function of completing the customer
                purchase request and/or any form of recurring billing utilizing
                the Service.
              </p>
            </li>
            <li>
              <p>
                "Product": Any merchandise, goods, or service that a Buyer may
                purchase using XPay.
              </p>
            </li>
            <li>
              <p>
                "Purchase Amount": The dollar amount of a Payment Transaction to
                pay for a Product, and any related tips, fees, taxes, or
                shipping charges, as applicable.
              </p>
            </li>
            <li>
              <p>
                "Service(s)": The products and services provided by XPay
                described in these Terms of Service or as added from time to
                time to enhance and improve the customer experience.
              </p>
            </li>
            <li>
              <p>
                "Third Party Providers": To include but not limited to any
                non-XPay service provider associated with a Payment Transaction,
                i.e., merchant processing acquirer, Registered Seller's loyalty
                or gift card program, community loyalty or gift card program or
                such other program that XPay deems valuable to the customer
                experience.
              </p>
            </li>
            <li>
              <p>
                "Transaction Touch Points": The place where a traditional
                Payment Transaction (non-XPay) provides Payment Instrument
                details directly from the Customer to the Seller or directly
                from the seller to the Customer.
              </p>
            </li>
            <li>
              <p>"We," "Us": World XChange dba XPay</p>
            </li>
            <li>
              <p>
                "You," "you,": A person or business that applies to, or
                registers to use, or uses, the Services.
              </p>
            </li>
            <li>
              <p>
                "Zero Fraud Guarantee": The guarantee that no transaction fraud
                will occur through any Transaction TouchPoints between the
                consumer and merchant.
              </p>
            </li>
          </ol>
        </ol>
        <p>
          <strong>B. XPay and Processing Service terms</strong>
        </p>
        {/* //why breaking */}
        <ol>
          <li>
            <p>
              <strong>
                <u>Registration for XPay</u>
              </strong>
            </p>
          </li>
          <ol type='a'>
            <li>
              <p>Download the XPay app from your app store.</p>
            </li>
            <li>
              <p>Read and accept the Terms of Service Agreement.</p>
            </li>
            <li>
              <p>
                Register the following information based on how you wish to use
                XPay
              </p>
            </li>

            <ol type='i'>
              <li>
                <p>Full name (first and last name)</p>
              </li>
              <li>
                <p>
                  Physical address Street, unit, or apt if applicable, city,
                  state, and zip code.
                </p>
              </li>
              <li>
                <p>
                  Shipping address if different from physical address (for use
                  to auto-populate e­commerce and mail order delivery fields for
                  the Registered Seller).
                </p>
              </li>
              <li>
                <p>Telephone number.</p>
              </li>
              <li>
                <p>Email address.</p>
              </li>
              <li>
                <p>
                  The full card number of each card (credit or debit) being
                  registered to include the expiration date and CVV code.
                </p>
              </li>
              <li>
                <p>
                  Establish a card hierarchy (in the event one card is declined,
                  our system will roll to the next card in your hierarchy to
                  complete the transaction). An electronic receipt will populate
                  in your app when transactions are completed and will identify
                  which card in the hierarchy was used by the nickname you
                  established.
                </p>
              </li>
            </ol>
            <li>
              <p>
                Select nicknames for cards you've entered, which will be visible
                in your app. No card number specific information can be used,
                not even the last four numbers.
              </p>
            </li>
            <li>
              <p>Create a 4 to 10 digit passcode required to open the app.</p>
            </li>
            <li>
              <p>
                Log in and activate your app. This allows the app to capture and
                send device identification information to our servers that help
                identify you with each transaction.
              </p>
            </li>
            <li>
              <p>
                Resets permitted using bio verification or challenge questions
                based on your settings.
              </p>
            </li>
          </ol>
          <li>
            <p>
              <strong>
                <u>Accuracy of registration information</u>
              </strong>
            </p>
          </li>
          <ul>
            <li>
              <p>
                You are responsible for providing accurate registration
                information and for keeping your registration information up to
                date or notifying us in the event of changes. Any changes made
                will require the use of your passcode and can be done online or
                through your app. Account resets or migration to a new phone
                will require the same protocol as your reset settings. Changes
                of primary residence to another country may require a new Terms
                of Service agreement be executed, reflecting the laws of that
                country and the download of a new country/region-specific app.
              </p>
            </li>
          </ul>
          <li>
            <p>
              <strong>
                <u>Processing Services</u>
              </strong>
            </p>
          </li>
          <ul>
            <li>
              <p>
                You hereby and herein authorize XPay to confirm that your
                Payment Instrument is in good standing with the issuing
                financial institution, including, but not limited to, by
                submitting a request for an authorization or card token, in
                accordance with relevant card association rules. XPay, in its
                sole and absolute discretion, may refuse to approve or may
                terminate existing registrations with or without cause or
                notice, other than any notification required by any Applicable
                Law, and not waived herein.
              </p>
            </li>
            <li>
              <p>
                You acknowledge and agree that any purchases of Products are
                transactions between you and the Registered Seller, and not with
                XPay, World XChange or any of its affiliates. Neither XPay nor
                World XChange is a party to your Payment Transaction for the
                Purchase of Products or the payment of recurring billing items
                and XPay and World XChange or any of its affiliates, are not a
                Buyer or a Registered Seller in connection with any Payment
                Transaction.
              </p>
            </li>
            <li>
              <p>
                You also agree that XPay may update your Payment Instrument
                information, including expiration date and card number, due to
                information received under certain account updater programs
                created by payment networks. Under these programs, enrolled card
                issuers and merchants can provide and/or receive up to date
                payment-card related information from payment networks regarding
                your Payment Instruments registered with XPay.
              </p>
            </li>
          </ul>
          <li>
            <p>
              <strong>
                <u>Passing Payment Instrument Details to Third Parties</u>
              </strong>
            </p>
          </li>
          <ul>
            <li>
              <p>
                You hereby authorize XPay to pass Payment Instrument details to
                payment network acquirers, as needed, to obtain the processing
                tokens for each Payment Instrument as it relates to a specific
                payment network acquirer. This provision is restricted to only
                payment network acquirers who are currently and have been in
                compliance with PCI-DSS industry requirements as defined by the
                card brands and payment network rules and regulations.
              </p>
            </li>
          </ul>
          <li>
            <p>
              <strong>
                <u>Subscriptions and recurring transactions</u>
              </strong>
            </p>
          </li>
          <ol type='a'>
            <li>
              <p>
                In the event, the Purchase Transaction is a subscription service
                or related to the recurring bill, i.e., a utility bill, you will
                have the option to receive a transaction approval request with
                each cycle or to select automatic approval for a specific
                Registered Sellers monthly charges. If you select automatic
                approval for the payment of a particular Registered Sellers
                charges, they will be automatically paid without regard to
                changes in the amount (to allow for automatic payment of
                recurring bills such as utilities).
              </p>
            </li>
            <li>
              <p>
                All automatic payments will refer to the payment hierarchy
                established in the registration process, in the event the chosen
                Payment Instrument declines the transaction. Automatic payments
                will continue until you change the setting for that Registered
                Seller to Manual, after which you will again be prompted for
                approval of the transaction when it becomes due and payable.
              </p>
            </li>
          </ol>
          <li>
            <p>
              <strong>
                <u>Permissible Payment Transactions</u>
              </strong>
            </p>
          </li>
          <ul>
            <li>
              <p>
                You agree that you will not use the Processing Service to
                purchase any Products that violate these Terms of Service, other
                policies or rules applicable to the Processing Service, or
                Applicable Law. Failure to comply with this section may result
                in the suspension or termination of your use of the Processing
                Service.
              </p>
            </li>
          </ul>
          <li>
            <p>
              <strong>
                <u>Service Fees</u>
              </strong>
            </p>
          </li>
          <ul>
            <li>
              <p>
                XPay does not charge a fee to use the Processing Service as a
                Buyer. The financial· institution that issues your Payment
                Instrument may charge a fee in connection with the debiting or
                charging of a Payment Instrument resulting from the Payment
                Transaction. You should consult the terms and conditions
                governing your Payment Instrument for more information about any
                such fees.
              </p>
            </li>
          </ul>
          <li>
            <p>
              <strong>
                <u>Disputes</u>
              </strong>
            </p>
          </li>
          <ul>
            <li>
              <p>
                You agree to release XPay, World XChange, or any of its
                affiliates and their agents, contractors, officers, and
                employees, from all claims, demands, and damages (actual and
                consequential) arising out of or in any way connected with a
                dispute. You agree that you will not involve XPay in any
                litigation or other dispute arising out of or related to any
                transaction, agreement, or arrangement with any Registered
                Seller, other Buyer, or other third parties in connection with
                the Service. If you attempt to do so, A. you shall pay all costs
                and attorney's fees of XPay, World XChange or its affiliates and
                shall provide indemnification as set forth below, and b the
                jurisdiction for any such litigation or dispute shall be limited
                as set forth below. However, nothing in these Terms of Service
                shall constitute a waiver of any rights, claims or defenses that
                you may have with respect to a Payment Transaction under the
                Buyer's card issuer agreement, the card association rules, or
                applicable state and federal laws.
              </p>
            </li>
          </ul>
          <li>
            <p>
              <strong>
                <u>Refunds</u>
              </strong>
            </p>
          </li>
          <ul>
            <li>
              <p>
                Except as set forth in these Terms of Service, all Payment
                Transactions processed through the Processing Service are
                non-refundable to Buyer by XPay and are non-reversible by Buyer
                through the Processing Service. The Processing Service will
                facilitate any refund that is initiated by the Registered Seller
                and approved by the Buyer. This two-step process is a core
                requirement for all transactions. You may have additional refund
                or chargeback rights under your Payment Instrument issuer
                agreement or applicable state and federal laws.
              </p>
            </li>
          </ul>
        </ol>
        <p>
          <strong>C. General Terms</strong>
        </p>
        <ol>
          {' '}
          <li>
            <p>
              <strong>
                <u>Limitations</u>
              </strong>
            </p>
          </li>
          <ol type='a'>
            <li>
              <p>
                Notwithstanding any limitations described elsewhere in these
                Terms of Service, we may establish practices and limits
                concerning use of the Services, including without limitation
                individual or aggregate transaction limits on the dollar amount
                or the number of transactions during any specified time
                period(s). We reserve the right to change, suspend or
                discontinue any aspect of the Services at any time, including
                hours of operation or availability of the Services or any
                Service feature, without notice and without liability. We also
                reserve the right to impose limits on certain Service features
                or restrict access to some or all of the Services without notice
                and without liability. We may decline to process any transaction
                without prior notice to you.
              </p>
            </li>
            <li>
              <p>
                While XPay Payment Transaction Processing eliminates Transaction
                TouchPoints, it is still reliant on third party transaction
                approval as well as system integrity. Reasons a Payment
                Transaction Processing request is declined include but is not
                limited to the following:
              </p>
            </li>

            <ol type='i'>
              <li>
                <p>
                  Registered Seller's merchant account is not in good standing.
                </p>
              </li>
              <li>
                <p>
                  A payment network is down and unable to accept transaction
                  requests.
                </p>
              </li>
              <li>
                <p>Payment instrument has declined the transaction.</p>
              </li>
              <li>
                <p>Registered Seller's device has an anomaly.</p>
              </li>
              <li>
                <p>Buyer's payment app or device has an anomaly.</p>
              </li>
              <li>
                <p>
                  There is no cell or internet service available to complete the
                  transaction.
                </p>
              </li>
            </ol>
            <li>
              <p>
                We may limit or suspend your use of one or more Services at any
                time, in our sole and absolute discretion. If we suspend your
                use of service, we will attempt to notify you by electronic
                mail. Suspension will not affect your rights and obligations
                pursuant to these Terms of Service arising before or after such
                suspension or with respect to any non-terminated Services.
              </p>
            </li>
            <li>
              <p>
                Certain XPay features are intended for use on mobile devices, to
                include Android and lOS operating systems or such other devices
                or operating systems approved by XPay. You are strictly
                prohibited from using such features on a mobile device or any
                operating system that has been modified or customized in any
                way. You bear sole responsibility for such unauthorized use of
                any XPay features on a modified mobile device or operating
                system.
              </p>
            </li>
          </ol>
          <li>
            <p>
              <strong>
                <u>Fraud</u>
              </strong>
            </p>
          </li>
          <ul>
            <li>
              <p>
                If you believe your XPay app has been opened or used in an
                unauthorized manner, or the device the XPay app is registered
                with has been lost or stolen; please reach out to XPay via
                telephone or email to have the app suspended until the device is
                located or the issue is resolved.
              </p>
            </li>
            <li>
              <p>Fraud prevention hotline:</p>
            </li>
            <li>
              <p>Fraud prevention email:</p>
            </li>
          </ul>
          <li>
            <p>
              <strong>
                <u>XPay is not a Banking institution, Issuer or Processor</u>
              </strong>
            </p>
          </li>
          <ol type='a'>
            <li>
              <p>
                XPay is not a bank or other chartered depository institution.
                XPay is not an issuer of any Payment Instrument or other item
                stored as a valuable unless expressly stated otherwise. With
                respect to Payment Transactions using XPay, Xpay functions as an
                enhanced security gateway designed to eliminate Transaction
                TouchPoints and thereby prevent any form of Payment Transaction
                fraud. XPay is not affiliated with the Buyer's Payment
                instrument user, nor is it the Registered Seller's payment
                processor.
              </p>
            </li>
            <li>
              <p>
                These Terms of Service do not amend or otherwise modify your
                agreement with your Payment Instrument Issuer, and you are
                responsible for ensuring your use of Services complies with such
                agreements. You are also responsible for all charges and/or
                debits to your Payment Instrument resulting from purchases of
                Products per such agreements. In the event, any inconsistency
                between these Terms of Service and your agreement with the
                issuer of your Payment Instrument, these Terms of Service govern
                the relationship between you and XPay solely with respect to the
                Services and your agreement with the issuer of your Payment
                Instrument governs the relationship between you and the issuer
                of such item. You acknowledge and agree that you are solely
                responsible for Payment Instrument information and other
                information you enter at the time of registration or otherwise
                provide to XPay. XPay is not responsible for the accuracy or
                availability of any information you enter at the time of
                registration or otherwise provide to XPay, including, without
                limitation, whether such information is current and up-to-date.
              </p>
            </li>
          </ol>
          <li>
            <p>
              <strong>
                <u>Direct or indirect communication with Issuers.</u>
              </strong>
            </p>
          </li>
          <ul>
            <li>
              <p>
                By electing to use XPay, you authorize XPay, directly or through
                payments networks, to communicate with the issuer of your
                Payment Instrument, to provide or obtain any information
                required by that issuer. In providing that information, an
                issuer does not endorse and is not responsible for XPay.
              </p>
            </li>
          </ul>
          <li>
            <p>
              <strong>
                <u>Third-Party Providers</u>
              </strong>
            </p>
          </li>
          <ul>
            <li>
              <p>
                XPay may have arranged for third-party providers to provide
                products or services to you through the Services ("Third-Party
                Providers"). In order to use these products or services, you may
                be required to agree to additional terms and conditions from
                those Third-Party Providers. You may be subject to other
                requirements of the Third Party Provider. By agreeing to these
                Terms of Service or continuing to use the Services, you hereby
                agree to any Third Party Provider terms that apply to your use
                of such products and services through the Services, which may be
                updated from time to time. For avoidance of doubt, these
                Third-Party Provider terms are between you and the applicable
                Third Party Provider, not XPay.
              </p>
            </li>
          </ul>
          <li>
            <p>
              <strong>
                <u>Advertising</u>
              </strong>
            </p>
          </li>
          <ol type='a'>
            <li>
              <p>
                XPay will provide geofence and destination types of advertising
                in its app. These advertising initiatives will include but are
                not limited to providing a folder within XPay for each
                advertising category and are all based on your geo-location or a
                destination of your choice. All advertising and marketing
                programs will be provided exclusively by Registered Seller’s of
                XPay for the enrichment of the customer experience with XPay.
                Examples of planned advertising and marketing programs are:
              </p>
            </li>
            <ol type='i'>
              <li>
                <p>
                  Specials for any Registered Seller within a pre-specified
                  geo-distance from your current location, or for a destination
                  of your choice input by you.
                </p>
              </li>
              <li>
                <p>
                  Coupons for any Registered Seller within a pre-specified
                  geo-distance from your current location, or for a destination
                  of your choice input by you.
                </p>
              </li>
              <li>
                <p>
                  Instant prizes, awarded randomly upon entering and remaining
                  within a Registered Seller’s location for a pre-specified
                  period of time (a geo-location run program).
                </p>
              </li>
              <li>
                <p>
                  Sweepstakes drawing entries received for entering a Registered
                  Seller’s location for a period of minutes with no purchase
                  required (a geo-location run program).
                </p>
              </li>
              <li>
                <p>
                  Travel destination information, including specials and coupons
                  available only to travelers (geo-locations at least 100 miles
                  from your home address), including information on events,
                  attractions, and activities at the destination
                </p>
              </li>
              <li>
                <p>
                  Healthful Living rewards, a rewards program designed
                  specifically to provide financial assistance to those
                  individuals or families seeking to purchase healthy,
                  farm-fresh, and organic foods but struggle with the cost. Earn
                  rewards points from participating Registered Sellers to use
                  yourself or pay-it-forward by allocating them to an individual
                  who needs direct financial assistance in providing their
                  family with healthy food choices.
                </p>
              </li>
              <li>
                <p>
                  Other programs may be created to benefit the customer
                  experience with XPay further.
                </p>
              </li>
            </ol>
            <li>
              <p>
                There is no need to opt-in or out, as your mobile device will
                never be alerted to changes in these folders. They are presented
                based on your geo-location and change without informing you in
                any manner. These are present for you to view if and when you
                desire to see what is available.
              </p>
            </li>
            <li>
              <p>
                While XPay, is responsible for providing advertising material to
                the XPay app for the Buyer to view at their leisure, and if they
                so desire. Neither XPay, World XChange, Inc., or any affiliated
                entity warrant or are responsible for providing the Products
                advertised or as to the quality of the Product offered by the
                advertising Registered Sellers.
              </p>
            </li>
          </ol>
          <li>
            <p>
              <strong>
                <u>Third-Party Fees</u>
              </strong>
            </p>
          </li>
          <ul>
            <li>
              <p>
                You are responsible for any fees charged by your
                telecommunications provider, Payment Instrument issuer,
                Registered SellerTo or any other third party in connection with
                your use of the Services.
              </p>
            </li>
          </ul>
          <li>
            <p>
              <strong>
                <u>No Extension of Credit</u>
              </strong>
            </p>
          </li>
          <ul>
            <li>
              <p>
                Xpay is not extending credit in connection with your use of the
                Services.
              </p>
            </li>
          </ul>
          <li>
            <p>
              <strong>
                <u>
                  No relationship between XPay and Issuer of Payment
                  Instruments.
                </u>
              </strong>
            </p>
          </li>
          <ul>
            <li>
              <p>
                Use of the Services is not approved by or offered in conjunction
                with the issuer of your Payment Instrument. At a future date, an
                affiliate of World XChange will provide a Payment Instrument
                product and will, at that time, provide a disclosure specific to
                that Payment Instrument. Your Payment Instrument issuer may
                impose fees, transaction limits or other limitations on
                transactions incurred using the Services.
              </p>
            </li>
          </ul>
          <li>
            <p>
              <strong>
                <u>Privacy</u>
              </strong>
            </p>
          </li>
          <ol type='a'>
            <li>
              <p>
                Privacy is an issue of paramount concern to every person or
                business entity. XPay does receive (through the customer
                registration process), collect (through transaction data as a
                result of using these Services or such other data as may be
                provided by the payment networks as described herein), and
                maintain data on every user (both Buyer and Registered Sellers)
                of the Services. This data is relied upon with every process
                conducted on the app to ensure the identity of the person(s)
                making changes to their account, adding or maintaining Payment
                Instrument details, conducting Purchase Transactions or any
                other use of the Services. Except as needed to perform the tasks
                associated with the Services, customer data will be used
                internally by XPay, World XChange, Inc., and its affiliates in
                an effort to enhance and improve the customer experience.
                Third-Party Providers and/or Registered Sellers will be provided
                with transaction data if the customer has opted into their
                services and only to the extent needed to deliver those
                services. Data sharing will include but is not limited to the
                examples provided below:
              </p>
            </li>
            <ol type='i'>
              <li>
                <p>
                  Buyer's XPay identifying code and transaction dollar amounts
                  when a Buyer opts into a Registered Sellers loyalty program.
                </p>
              </li>
              <li>
                <p>
                  Buyer's name, address (or recipient address in the event
                  shipping is to another party) and shipping information when
                  purchasing a product of any type from a Registered Seller that
                  requires shipping to the Buyer's home, office, or such other
                  place as is designated by the Buyer.
                </p>
              </li>
              <li>
                <p>
                  Specific Registered Sellers may offer products via mail order
                  or some other method that will also require the Registered
                  Seller to receive a full breakdown of each item in the sales
                  order
                </p>
              </li>
              <li>
                <p>for delivery.</p>
              </li>
              <li>
                <p>
                  Providing personal information, including social security
                  numbers or tax identification numbers to the IRS and/or other
                  income tax authorities in the event, you become a sweepstake
                  drawing prize winner in an amount that requires reporting of
                  the winnings to taxing authorities.
                </p>
              </li>
            </ol>
            <li>
              <p>
                Except as defined in these Terms of Service, subsequent
                revisions to these Terms of Service, any terms agreed to between
                you and a Third Party Provider, or as required by law, no
                information will be sold, shared or disseminated to any other
                party for any benefit or gain, whether monetary or non-monetary.
              </p>
            </li>
            <li>
              <p>
                XPay, World XChange, Inc., and its affiliates will not
                intentionally share data, unless as defined in these Terms of
                Service, with any outside person or entity without the prior
                knowledge or approval of our customers.
              </p>
            </li>
          </ol>
          <li>
            <p>
              <strong>
                <u>Username and Password Information</u>
              </strong>
            </p>
          </li>
          <ol type='a'>
            <li>
              <p>You are responsible for:</p>
            </li>
            <ol type='i'>
              <li>
                <p>
                  Maintaining the confidentiality of your username and password,
                </p>
              </li>
              <li>
                <p>
                  Any and all Purchase Transactions or app setting changes and
                  modifications by persons that you give access to or that
                  otherwise such username and password,
                </p>
              </li>
              <li>
                <p>
                  Any and all consequences of use or misuse of your username and
                  password...
                </p>
              </li>
              <li>
                <p>
                  Notifying XPay immediately of any unauthorized use of your
                  username and password or of any which you have knowledge or
                  suspicion of.
                </p>
              </li>
            </ol>
            <li>
              <p>
                If you are a business entity, you agree that all officers,
                employees, agents, representatives, and others having access to
                the username(s) and password(s) shall be vested by you with
                authority to use the Services and to bind you legally. You shall
                be responsible for all actions by current and former officers,
                employees, agents, representatives, and others, regardless of
                whether authorized by you, that access the Services using the
                business' username(s) and password(s).
              </p>
            </li>
          </ol>
          <li>
            <p>
              <strong>
                <u>Electronic Communications</u>
              </strong>
            </p>
          </li>
          <ol type='a'>
            <li>
              <p>
                XPay and Third-Party Providers may be required to provide
                certain disclosures, notices, and communications (collectively
                "Communications") to you in written form. According to these
                Terms of Service, we will deliver such Communications to you in
                electronic form. Your agreement to these Terms of Service
                confirms your ability and consent to receive such Communications
                electronically rather than in paper form.
              </p>
            </li>
            <li>
              <p>
                You agree and consent to receive electronically all
                Communications provided to you in connection to your XPay
                account and your use of the Services. Communications include but
                are not limited to:
              </p>
            </li>
            <ol type='i'>
              <li>
                <p>
                  Agreement and policies you must agree to in order to use the
                  Services, including updates to that agreement and policies,
                  communicated to you via electronic mail.
                </p>
              </li>
              <li>
                <p>
                  Payment Transaction receipts, regardless of Payment Instrument
                  used, communicated to the receipts folder of your app and
                  available for review by accessing your online account portal.
                </p>
              </li>
              <li>
                <p>
                  Short term account history maintained on XPay app with long
                  term payment history available for review by accessing your
                  online account portal.
                </p>
              </li>
              <li>
                <p>
                  All other communication related to your XPay account will be
                  done via electronic mail.
                </p>
              </li>
            </ol>
            <li>
              <p>
                Electronic Communications will be deemed as delivered when
                posted to your XPay app, made available for review in your
                online account, or when sent to the email address of record in
                your registration file. It is your responsibility to open and
                review Communications we deliver to you through the methods
                described above.
              </p>
            </li>
            <li>
              <p>
                The following additional terms will apply to all electronic
                Communications with XPay.
              </p>
            </li>
            <ol type='i'>
              <li>
                <p>
                  You may contact XPay to update your registration information
                  used for electronic Communications.
                </p>
              </li>
              <li>
                <p>
                  You may contact XPay to transfer electronic Communications to
                  a new device.
                </p>
              </li>
              <li>
                <p>
                  You may contact XPay to withdraw consent to receive electronic
                  Communications.
                </p>
              </li>
              <li>
                <p>
                  XPay reserves the right to withdraw your use of the Services
                  and any Third Party provided products or services if you
                  decline or withdraw consent to receive electronic
                  communications.
                </p>
              </li>
              <li>
                <p>
                  You may contact XPay regarding any items in this section (12)
                  by going to
                </p>
              </li>
            </ol>
            <p>
              <a href='https://www.world-xchange.com'>
                https://www.world-xchange.com
              </a>
              and selecting Contact Us.
            </p>
          </ol>
          <li>
            <p>
              <strong>
                <u>Termination</u>
              </strong>
            </p>
          </li>
          <ol type='a'>
            <li>
              <p>
                We may, in our sole and absolute discretion without liability to
                you or any third-party, terminate your use of one or more
                Services for any reason, including but without limitation,
                inactivity or violation of these Terms of Service or other
                policies we may establish from time to time.
              </p>
            </li>
            <li>
              <p>
                Upon termination of your use of the Services, you remain liable
                for all Payment Transactions and any other obligations you have
                incurred under these Terms of Service. We also have the right to
                prohibit your access to the Services, including, without
                limitation, deactivating your username and password, and
                refusing future access to the Services by you, or if a business
                entity, its parent, affiliates or subsidiaries or its or their
                successors.
              </p>
            </li>
            <li>
              <p>
                You, as the customer, also have the right to terminate the use
                of the Services. Such a request for termination, once received
                by XPay through electronic Communications, will result in the
                disabling of access and use to the XPay app and XPay online
                portal and may result in the loss of information and data from
                any previous Purchase Transactions or use of the Services.
              </p>
            </li>
          </ol>
          <li>
            <p>
              <strong>
                <u>Responsibility for Taxes</u>
              </strong>
            </p>
          </li>
          <ul>
            <li>
              <p>
                The reporting and payment of any applicable taxes arising from
                the use of the Services or any benefits received in the form of
                awards and prizes from advertising programs are your
                responsibility. You, as a result of this, agree to comply with
                any and all tax laws in connection with your use of the
                Services.
              </p>
            </li>
          </ul>
          <li>
            <p>
              <strong>
                <u>No endorsement of Products</u>
              </strong>
            </p>
          </li>
          <ol type='a'>
            <li>
              <p>
                XPay, World XChange, Inc., or any of its affiliates do not
                represent or endorse and shall not be responsible for:
              </p>
            </li>
            <ol type='i'>
              <li>
                <p>The reliability or performance of any Registered Seller.</p>
              </li>
              <li>
                <p>
                  The safety, reliability, quality, accuracy, integrity, or
                  legality of any Product, offer, or loyalty program.
                </p>
              </li>
              <li>
                <p>
                  The truth or accuracy of the description of any Product,
                  advice, opinion, offer, proposal, statement, data, or other
                  information (collectively "Content") displayed or distributed,
                  purchased for, or paid through the Services.
                </p>
              </li>
            </ol>
          </ol>
          <li>
            <p>
              <strong>
                <u>Indemnification</u>
              </strong>
            </p>
          </li>
          <ol type='a'>
            <p>
              a. You agree to indemnify, defend and hold harmless XPay, World
              XChange, Inc., its affiliates and its and their directors,
              officers, owners, agents, co-branders, licensees, authorized
              resellers, employees, information providers, consultants,
              contractors, and other third parties, including without limitation
              any payment networks from and against any and all claims, demands,
              causes of action, debt or liability, including reasonable attorney
              fees, including without limitation attorney's fees and costs
              incurred by the indemnified parties arising out of, related to or
              arising from:
            </p>
            <ol type='i'>
              <li>
                <p>Your use of the Services;</p>
              </li>
              <li>
                <p>
                  Any breach or non-compliance by you of any term of these Terms
                  of Service;
                </p>
              </li>
              <li>
                <p>Any XPay, World XChange, Inc., or affiliate policies;</p>
              </li>
              <li>
                <p>Third-Party Provider policy;</p>
              </li>
              <li>
                <p>
                  Any dispute or litigation caused by your actions or omissions;
                  or
                </p>
              </li>
              <li>
                <p>
                  Your negligence or violation or alleged violations of any
                  applicable law or rights of a third party.
                </p>
              </li>
            </ol>
          </ol>
          <li>
            <p>
              <strong>
                <u>Disclaimer</u>
              </strong>
            </p>
          </li>
          <ol type='a'>
            <li>
              <p>
                THE SERVICES, INCLUDING ALL CONTENT, SOFTWARE, FUNCTIONS,
                MATERIALS, AND INFORMATION MADE AVAILABLE ON, PROVIDED IN
                CONNECTION WITH, OR ACCESSIBLE THROUGH THE SERVICES, ARE
                PROVIDED "AS IS" TO THE FULLEST EXTENT PERMISSIBLE BY LAW. XPAY,
                WORLD XCHANGE, INC., AND ITS AFFILIATES, AND THEIR AGENTS,
                CO-BRANDERS OR. OTHER PARTNERS, INCLUDING BUT NOT LIMITED TO
                DEVICE MANUFACTURERS (COLLECTIVELY "XPAY PARTIES"), MAKE NO
                REPRESENTATIONS OR WARRANTY OF ANY KIND WHATSOEVER FOR THE
                SERVICES OR THE CONTENT, MATERIALS, INFORMATION, AND FUNCTIONS
                MADE ACCESSIBLE BY THE SOFTWARE USED ON OR ACCESSED THROUGH THE
                SERVICES, OR FOR ANY BREACH OF SECURITY ASSOCIATED WITH THE
                TRANSMISSION OF SENSITIVE INFORMATION THROUGH THE SERVICES.
              </p>
            </li>
            <li>
              <p>
                EACH XPAY PARTY DISCLAIMS WITHOUT LIMITATION, OF ANY WARRANTY OF
                ANY KIND WITH RESPECT TO THE SERVICES, NONINFRINGEMENT,
                MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. THE XPAY
                PARTIES DO NOT WARRANT THAT THE FUNCTIONS CONTAINED IN THE
                SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE. THE XPAY PARTIES
                SHALL NOT BE RESPONSIBLE FOR ANY SERVICE INTERRUPTIONS,
                INCLUDING, BUT NOT LIMITED TO, SYSTEM FAILURES OR OTHER
                INTERRUPTIONS THAT MAY AFFECT THE RECEIPT, PROCESSING,
                ACCEPTANCE, COMPLETION OF SETTLEMENT OF PAYMENT TRANSACTIONS OR
                THE SERVICES.
              </p>
            </li>
            <li>
              <p>
                THE XPAY PARTIES ARE NOT RESPONSIBLE FOR THE ACCURACY OF ANY
                PAYMENT INSTRUMENT, INCLUDING, WITHOUT LIMITATION, WHETHER SUCH
                INFORMATION IS CURRENT AND UP-TO­DATE. WITHOUT LIMITING THE
                GENERALITY OF THE PRECEDING SENTENCE, YOU EXPRESSLY ACKNOWLEDGE
                AND AGREE THAT SUCH INFORMATION IS REPORTED BY THE ISSUER AS OF
                A PARTICULAR TIME ESTABLISHED BY THE ISSUER AND MAY NOT AND MAY
                NOT ACCURATELY REFLECT YOUR CURRENT TRANSACTIONS, AVAILABLE
                BALANCE OR OTHER ACCOUNT OR PROGRAM DETAILS AT THE TIME THEY ARE
                DISPLAYED TO YOU THROUGH THE SERVICES OR AT THE TIME YOU MAKE A
                PURCHASE OR REDEMPTION. YOU MAY INCUR FEES, SUCH AS OVERDRAFT
                FEES OR OTHER CHARGES AS A RESULT OF SUCH TRANSACTIONS, PER YOUR
                AGREEMENT WITH YOUR PAYMENT INSTRUMENT OR YOUR ATTEMPT TO MAKE A
                PURCHASE OR REDEMPTION MAY NOT BE SUCCESSFUL.
              </p>
            </li>
          </ol>
          <li>
            <p>
              <strong>
                <u>Limitations of Liability; Force Majeure</u>
              </strong>
            </p>
          </li>
          <ol type='a'>
            <li>
              <p>
                IN NO EVENT SHALL ANY XPAY PARTY BE RESPONSIBLE FOR OR LIABLE TO
                YOU OR ANY THIRD-PARTY UNDER ANY CIRCUMSTANCES FOR ANY DIRECT,
                CONSEQUENTIAL, SPECIAL, PUNITIVE OR EXEMPLARY, DAMAGES OR
                LOSSES, INCLUDING BUT NOT LIMITED TO DAMAGES FOR LOSS OF
                PROFITS, GOODWILL, USE, DATA OR OTHER INTANGIBLE LOSSES WHICH
                MAY INCURRED IN CONNECTION WITH ANY XPAY PARTY OR THE SERVICES,
                OR ANY GOODS, SERVICES, OR INFORMATION PURCHASED, RECEIVED, SOLD
                OR PAID FOR BY WAY OF THE SERVICES, REGARDLESS OF THE TYPE OF
                CLAIM OR THE NATURE OF THE CAUSE OF ACTION, EVEN IF THE XPAY
                PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGE OR
                LOSS. IN NO EVENT SHALL THE XPAY PARTIES' TOTAL CUMULATIVE
                LIABILITY ARISING FROM OR RELATING TO THESE TERMS OF SERVICE
                EXCEED THE NET FEES XPAY HAS RECEIVED AND RETAINED FROM YOUR
                VALID TRANSACTIONS DURING THE THREE MONTH PERIOD IMMEDIATELY
                PRECEEDING THE DATE OF THE CLAIM.
              </p>
            </li>
            <li>
              <p>
                Each party acknowledges that the other party has entered into
                these Terms of Service, relying on the limitations of liability
                stated herein and that those limitations are an essential part
                of the bargain (agreement) between the parties. In addition to
                and without limiting any of the preceding, no XPay Party shall
                have any liability for any failure or delay resulting from any
                condition beyond the reasonable control of such party, including
                but not limited to governmental actions or acts of terrorism,
                earthquake, fire, flood, pandemic or other acts of God, labor
                conditions, power failures and Internet disturbances.
              </p>
            </li>
          </ol>
          <li>
            <p>
              <strong>
                <u>Governing Law</u>
              </strong>
            </p>
          </li>
          <ul>
            <li>
              <p>
                These Terms of Service shall be governed by the laws of the
                State of Colorado and applicable federal United States laws.
                Each party agrees to submit to the personal and exclusive
                jurisdiction of the courts located in Larimer County, Colorado.
                The parties specifically exclude from application to the Terms
                of Service the United Nations Convention on Contracts for the
                International Sale of Goods and the Uniform Computer Information
                Transactions Act.
              </p>
            </li>
          </ul>
          <li>
            <p>
              <strong>
                <u>Notice</u>
              </strong>
            </p>
          </li>
          <ul>
            <li>
              <p>
                In addition to the electronic communications authorized in
                section 12 entitled "Electronic Communications," notices and
                other notifications to you may be made by mail, email, postings
                to your XPay online portal account or other reasonable means. We
                may also provide notices of changes to the Terms of Service or
                other matters by displaying links to notifications on your XPay
                online portal account or providing links to you in an email.
                Notice to XPay, World XChange, Inc., and its affiliates may be
                made by U.S. mail to:
              </p>
            </li>

            <p>World XChange, Inc.,</p>

            <p>Attn: XPay Operations Desk</p>

            <p>1182 Belle Drive</p>

            <p>Loveland, Colorado 80537</p>
          </ul>
          <li>
            <p>
              <strong>
                <u>Modification of Terms of Service</u>
              </strong>
            </p>
          </li>
          <ul>
            <li>
              <p>
                We have the right,in our sole and absolute discretion, to
                change, modify or amend any portion of these Terms of Service at
                any time by posting notifications to your XPay app, your XPay
                online portal account or sending an email. The changes will
                become effective, and shall be deemed accepted by you, after the
                initial posting and shall apply on a going-forward basis with
                respect to a transaction initiated after the posting date. In
                the event you do not agree with such modification, your sole and
                exclusive remedy is to terminate your use of the Services.
              </p>
            </li>
          </ul>
          <li>
            <p>
              <strong>
                <u>Assignment</u>
              </strong>
            </p>
          </li>
          <ul>
            <li>
              <p>
                You may not assign these Terms of Service or any rights or
                obligations hereunder, by operation of law or otherwise, without
                our prior written approval, and any such attempted assignment
                shall be void. We reserve the right to freely assign these Terms
                of Service and the rights and obligations hereunder, to any
                third party without notice or consent. Subject to the foregoing,
                these Terms of Service shall be binding upon and inure to the
                benefit of the parties hereto, their
              </p>
            </li>
            <li>
              <p>successors and permitted assigns.</p>
            </li>
          </ul>
          <li>
            <p>
              <strong>
                <u>Survival</u>
              </strong>
            </p>
          </li>
          <ul>
            <li>
              <p>
                Upon termination of your use of the Services or termination of
                these Terms of Service for any reason, in addition to this
                section, the following sections shall survive termination: B8,
                C1,3,5 and 7 through 25.
              </p>
            </li>
          </ul>
          <li>
            <p>
              <strong>
                <u>English Language Controls</u>
              </strong>
            </p>
          </li>
          <ul>
            <li>
              <p>
                Any translation of these Terms of Service is provided for your
                convenience and may be done
              </p>
            </li>
            <li>
              <p>
                through the use of a free online translation service into any
                language available through such a service. The meanings of
                terms, conditions, and representations herein are subject to
                definitions and interpretations in the English language. Any
                translation provided may not accurately represent the
                information in the original English.
              </p>
            </li>
          </ul>
          <li>
            <p>
              <strong>
                <u>Other Provisions</u>
              </strong>
            </p>
          </li>
          <ul>
            <li>
              <p>
                The failure of XPay, World XChange, Inc., or any of its
                affiliates to exercise or enforce any right or provision of the
                Terms of Service shall not constitute of waiver of such right or
                provision. If any provision of these Terms of Service shall be
                adjudged by any court of competent jurisdiction to be
                unenforceable or invalid, that provision shall be limited or
                eliminated to the minimum extent necessary so that these Terms
                of Service shall otherwise remain in full force and effect and
                remain enforceable between the parties. Headings are for
                reference purposes only and in no way define, limit, construe or
                describe the scope or extent of such section. These Terms of
                Service, including XPay, World XChange, Inc., and affiliates
                policies governing the Services referenced herein, constitute
                the entire agreement between you and XPay with respect to the
                use of the Services. These Terms of Service are not intended and
                shall not be construed to create any rights or remedies in any
                parties other than you and XPay, World XChange, Inc., and its
                affiliates which shall each be a third-party beneficiary of
                these Terms of Service and no other person shall assert any
                rights as a third party beneficiary hereunder.
              </p>
            </li>
          </ul>
        </ol>
      </div>
      {/* <form className='container flex-col-center'>
        <div className='terms-condition flex-col-center'>
          <label className='terms-label'>
            <input className='terms-input' type='checkbox' checked={accepted}  onChange={handleChange}  />
            {'      '}I Agree to XBanc's Terms & Service Agreements
          </label>
          <u className='text-color-primary'>
          <Link to='/sign-up'>
            <button disabled={!accepted} className='mt-32 text-color-primary' onClick={()=>submitTerms()}>Continue</button>
          </Link>
          </u>
        </div>
      </form> */}
    </div> //last div
  );
}
