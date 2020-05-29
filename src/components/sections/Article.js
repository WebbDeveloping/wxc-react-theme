import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Cta from './Cta';

const propTypes = {
  ...SectionProps.types
};

const defaultProps = {
  ...SectionProps.defaults
};

const Article = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = e => {
    e.preventDefault();
    setVideomodalactive(true);
  };

  const closeModal = e => {
    e.preventDefault();
    setVideomodalactive(false);
  };

  const outerClasses = classNames(
    'hero section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section {...props} className={outerClasses}>
      <div className='container-sm'>
        <div className={innerClasses}>
          <div className='hero-content center-content'>
            <h1
              className='mt-0 mb-16 reveal-from-bottom'
              data-reveal-delay='200'
            >
              React template: Easy Articles for{' '}
              <span className='text-color-primary'>EVERYONE.</span>
            </h1>
            <div className='container-xs'>
              <p
                className='m-0 mb-32 reveal-from-bottom'
                data-reveal-delay='400'
              >
                - Joe Dirt
              </p>
            </div>
          </div>
          <div
            className='hero-figure reveal-from-bottom illustration-element-04'
            data-reveal-value='20px'
            data-reveal-delay='800'
          >
            <a
              data-video='https://player.vimeo.com/video/174002812'
              href='#0'
              aria-controls='video-modal'
              //   onClick={openModal}
            >
              <Image
                className='has-shadow'
                src={require('./../../assets/images/john-schnobrich-2FPjlAyMQTA-unsplash.jpg')}
                alt='Hero'
                width={896}
                height={504}
              />
            </a>
          </div>
          {/* <Modal
            id='video-modal'
            show={videoModalActive}
            handleClose={closeModal}
            video='https://player.vimeo.com/video/174002812'
            videoTag='iframe'
          /> */}
        </div>
        <div className='container-xs'>
          <p className='m-0 mb-32 reveal-from-bottom' data-reveal-delay='400'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam,
            velit. Consequatur quia ipsum exercitationem. Iste vitae libero
            aperiam tempora itaque voluptates facilis nesciunt, nostrum
            similique corporis ipsum veniam, itaque voluptates facilis nesciunt.
          </p>
        </div>
        <div className='container-sm'>
          <h1 className='text-color-primary'>Some Heading Title</h1>
          <h4 className='m-0 mb-32 reveal-from-bottom' data-reveal-delay='400'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam,
            velit. Consequatur quia ipsum exercitationem. Iste vitae libero
            aperiam tempora itaque voluptates facilis nesciunt, nostrum
            similique corporis ipsum veniam, itaque voluptates facilis nesciunt.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam,
            velit. Consequatur quia ipsum exercitationem. Iste vitae libero
            aperiam tempora itaque voluptates facilis nesciunt, nostrum
            similique corporis ipsum veniam, itaque voluptates facilis nesciunt.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam,
            velit. Consequatur quia ipsum exercitationem. Iste vitae libero
            aperiam tempora itaque voluptates facilis nesciunt, nostrum
            similique corporis ipsum veniam, itaque voluptates facilis nesciunt.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam,
            velit. Consequatur quia ipsum exercitationem. Iste vitae libero
            aperiam tempora itaque voluptates facilis nesciunt, nostrum
            similique corporis ipsum veniam, itaque voluptates facilis nesciunt.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam,
            velit. Consequatur quia ipsum exercitationem. Iste vitae libero
            aperiam tempora itaque voluptates facilis nesciunt, nostrum
            similique corporis ipsum veniam, itaque voluptates facilis nesciunt.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam,
            velit. Consequatur quia ipsum exercitationem. Iste vitae libero
            aperiam tempora itaque voluptates facilis nesciunt, nostrum
            similique corporis ipsum veniam, itaque voluptates facilis nesciunt.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam,
            velit. Consequatur quia ipsum exercitationem. Iste vitae libero
            aperiam tempora itaque voluptates facilis nesciunt, nostrum
            similique corporis ipsum veniam, itaque voluptates facilis nesciunt.
          </h4>
        </div>
        <div className='container-sm'>
          <h1 className='text-color-primary'>Keep Reading About Me!</h1>
          <h4 className='m-0 mb-32 reveal-from-bottom' data-reveal-delay='400'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam,
            velit. Consequatur quia ipsum exercitationem. Iste vitae libero
            aperiam tempora itaque voluptates facilis nesciunt, nostrum
            similique corporis ipsum veniam, itaque voluptates facilis nesciunt.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam,
            velit. Consequatur quia ipsum exercitationem. Iste vitae libero
            aperiam tempora itaque voluptates facilis nesciunt, nostrum
            similique corporis ipsum veniam, itaque voluptates facilis nesciunt.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam,
            velit. Consequatur quia ipsum exercitationem. Iste vitae libero
            aperiam tempora itaque voluptates facilis nesciunt, nostrum
            similique corporis ipsum veniam, itaque voluptates facilis nesciunt.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam,
            velit. Consequatur quia ipsum exercitationem. Iste vitae libero
            aperiam tempora itaque voluptates facilis nesciunt, nostrum
            similique corporis ipsum veniam, itaque voluptates facilis nesciunt.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam,
            velit. Consequatur quia ipsum exercitationem. Iste vitae libero
            aperiam tempora itaque voluptates facilis nesciunt, nostrum
            similique corporis ipsum veniam, itaque voluptates facilis nesciunt.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam,
            velit. Consequatur quia ipsum exercitationem. Iste vitae libero
            aperiam tempora itaque voluptates facilis nesciunt, nostrum
            similique corporis ipsum veniam, itaque voluptates facilis nesciunt.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam,
            velit. Consequatur quia ipsum exercitationem. Iste vitae libero
            aperiam tempora itaque voluptates facilis nesciunt, nostrum
            similique corporis ipsum veniam, itaque voluptates facilis nesciunt.
          </h4>
        </div>
        <div className='container-sm'>
          <p className='m-0 mb-32 reveal-from-bottom' data-reveal-delay='400'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam,
            velit. Consequatur quia ipsum exercitationem. Iste vitae libero
            aperiam tempora itaque voluptates facilis nesciunt, nostrum
            similique corporis ipsum veniam, itaque voluptates facilis nesciunt.
          </p>
        </div>
        <div className='container-sm'>
          <h1 className='text-color-primary'>Keep Reading About Me!</h1>
          <h4 className='m-0 mb-32 reveal-from-bottom' data-reveal-delay='400'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam,
            velit. Consequatur quia ipsum exercitationem. Iste vitae libero
            aperiam tempora itaque voluptates facilis nesciunt, nostrum
            similique corporis ipsum veniam, itaque voluptates facilis nesciunt.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam,
            velit. Consequatur quia ipsum exercitationem. Iste vitae libero
            aperiam tempora itaque voluptates facilis nesciunt, nostrum
            similique corporis ipsum veniam, itaque voluptates facilis nesciunt.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam,
            velit. Consequatur quia ipsum exercitationem. Iste vitae libero
            aperiam tempora itaque voluptates facilis nesciunt, nostrum
            similique corporis ipsum veniam, itaque voluptates facilis nesciunt.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam,
            velit. Consequatur quia ipsum exercitationem. Iste vitae libero
            aperiam tempora itaque voluptates facilis nesciunt, nostrum
            similique corporis ipsum veniam, itaque voluptates facilis nesciunt.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam,
            velit. Consequatur quia ipsum exercitationem. Iste vitae libero
            aperiam tempora itaque voluptates facilis nesciunt, nostrum
            similique corporis ipsum veniam, itaque voluptates facilis nesciunt.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam,
            velit. Consequatur quia ipsum exercitationem. Iste vitae libero
            aperiam tempora itaque voluptates facilis nesciunt, nostrum
            similique corporis ipsum veniam, itaque voluptates facilis nesciunt.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam,
            velit. Consequatur quia ipsum exercitationem. Iste vitae libero
            aperiam tempora itaque voluptates facilis nesciunt, nostrum
            similique corporis ipsum veniam, itaque voluptates facilis nesciunt.
          </h4>
        </div>
      </div>
      <Cta split />
    </section>
    
  );
};

Article.propTypes = propTypes;
Article.defaultProps = defaultProps;

export default Article;
