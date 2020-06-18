import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Button from '../elements/Button';
import HeroCard from './home/HaroCard';
import HeroScrollButtons from './home/HeroScrollButtons';
import SmallHeroScroll from './home/SmallHeroScroll';
const data = {
  properties: [
    {
      id: 1,
      index: 0,
      'color-heading': 'X-WORLD',
      heading: ' is the new',
      'heading-2': 'secure way to bank',
      subheading: 'We take your security seriously',
      'button-text': 'Get Started',
      'img-path': 'security.svg',
      smHeading: 'We take your security seriously',
      active: 1
    },
    {
      id: 2,
      index: 1,
      'color-heading': 'BUSINESS',
      heading: '',
      'heading-2': '',
      subheading:
        'Our digital technology and industry expertise enables vendor financing programs for business equipment financing.',
      'button-text': 'Explore Business Financing',
      'img-path': 'undraw_revenue_3osh.svg',
      smHeading: 'Banking made easy',
      active: 1
    },
    {
      id: 3,
      index: 2,
      'color-heading': 'INSTITUTIONAL',
      heading: '',
      'heading-2': ' ',
      subheading:
        'Businesses rely on us for expertise, agility and banking solutions that bring their ideas into outcomes.',
      'button-text': 'Discover Solutions',
      'img-path': 'undraw_finance_0bdk.svg',
      smHeading: 'Small Text to look good',
      active: 1
    },
    {
      id: 4,
      index: 3,
      'color-heading': 'Personal Banking',
      heading: '',
      'heading-2': '',
      subheading:
        'Advance personal savings and achieve your goals with competitive deposits.',
      'button-text': 'Start Saving',
      'img-path': 'undraw_Credit_card_3ed6.svg',
      smHeading: 'Start Saving for what you love',
      active: 1
    }
  ]
};

const propTypes = {
  ...SectionProps.types
};

const defaultProps = {
  ...SectionProps.defaults
};

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  // const [animate, setAnimate] = useState(false);
  // const handleClick = () => setAnimate(!animate);
  // const [dataList, setDataList] = useState(data.properties);
  const [activeHeroContent, setHeroContent] = useState(data.properties[0]);

  const buttonClick = e => {

    if (e === 1) {
      setHeroContent(data.properties[0]);
    } else if (e === 2) {
      setHeroContent(data.properties[1]);
    } else if (e === 3) {
      setHeroContent(data.properties[2]);
    } else if (e === 4) {
      setHeroContent(data.properties[3]);
    }
  };
  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',

    invertColor && 'invert-color',
    className
  );


  return (
    <section {...props} className={outerClasses}>
    {/* TODO: Maybe add container back to class */}
      <div className='lg-pl-32 lg-pr-32'>
        <SmallHeroScroll data={activeHeroContent} click={buttonClick} />
        <br className='lg-hide' />
        <br className='lg-hide' />
        <div className='lg-hide'>
          <Button tag='a' color='secondary' wideMobile href='/sign-up'>
            {activeHeroContent['button-text']}
          </Button>
        </div>
        <br className='lg-hide' />
        {/* <br className='sm-hide' /> */}
        <HeroScrollButtons
          data={activeHeroContent}
          click={buttonClick}
          className='sm-hide'
        />
        <HeroCard
          data={activeHeroContent}
          animateRight={'reveal-from-right'}
          animateLeft={'reveal-from-left'}
        />
        {/* <HeroScrollButtons click={buttonClick} className='sm-hide' /> */}
      </div>
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
