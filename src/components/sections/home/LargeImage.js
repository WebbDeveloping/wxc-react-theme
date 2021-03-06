import React from 'react';
import classNames from 'classnames';
import TextImage from './TextImage';
import IconTiles from './IconTiles';

export default function LargeImage({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) {
  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );
  return (
    <section {...props} className={outerClasses}>
      <div className='lg-pl-32 lg-pr-32'>
        <IconTiles />
        <br className='sm-hide' />
        <br className='sm-hide' />
        <br className='sm-hide' />
        <br className='sm-hide' />
        <div className='img-absolute relative'>
          <div className='relative revel-from-bottom sm-hide '>
            <img
              src={require('./../../../assets/images/commerce.jpg')}
              alt='Open'
              width={128}
              height={128}
              className='w-100'
            />
          </div>
          <div className='board-right p-32 box-shadow sm-hide reveal-from-top'>
            <h1>Heading</h1>
            <p>
              some word shere for my cool board i am making, Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Repudiandae adipisci quia
              architecto praesentium ut quasi nemo tempora accusantium porro,
              cupiditate, illum laborum provident quis doloribus sunt
              dignissimos quod obcaecati. Neque.
            </p>
            <p>
              some word shere for my cool board i am making, Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Repudiandae adipisci quia
              architecto praesentium ut quasi nemo tempora accusantium porro,
              cupiditate, illum laborum provident quis doloribus sunt
              dignissimos quod obcaecati. Neque.
            </p>
          </div>
          {/* //small board */}
          <div className='board p-32 box-shadow lg-hide '>
            <h1>Heading</h1>
            <p>
              some word shere for my cool board i am making, Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Repudiandae adipisci quia
              architecto praesentium ut quasi nemo tempora accusantium porro,
              cupiditate, illum laborum provident quis doloribus sunt
              dignissimos quod obcaecati. Neque.
            </p>
            <p>
              some word shere for my cool board i am making, Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Repudiandae adipisci quia
              architecto praesentium ut quasi nemo tempora accusantium porro,
              cupiditate, illum laborum provident quis doloribus sunt
              dignissimos quod obcaecati. Neque.
            </p>
          </div>
          {/* end small board */}
        </div>
        <br />
        <TextImage />
        <br className='sm-hide' />
        <br className='sm-hide' />
        <br className='sm-hide' />
        <br className='sm-hide' />
        <br className='sm-hide' />
        <br className='sm-hide' />
        <div className='img-absolute relative'>
          <div className='relative reveal-from-bottom sm-hide '>
            <img
              src={require('./../../../assets/images/security-computer.jpg')}
              alt='Open'
              // width={128}
              // height={128}
              className='w-100 lg-img'
            />
          </div>
          <div className='board-left p-32 box-shadow sm-hide reveal-from-top'>
            <h1>Heading</h1>
            <p>
              some word shere for my cool board i am making, Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Repudiandae adipisci quia
              architecto praesentium ut quasi nemo tempora accusantium porro,
              cupiditate, illum laborum provident quis doloribus sunt
              dignissimos quod obcaecati. Neque.
            </p>
            <p>
              some word shere for my cool board i am making, Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Repudiandae adipisci quia
              architecto praesentium ut quasi nemo tempora accusantium porro,
              cupiditate, illum laborum provident quis doloribus sunt
              dignissimos quod obcaecati. Neque.
            </p>
          </div>
          {/* //small board */}
          <div className='board p-32 box-shadow lg-hide '>
            <h1>Heading</h1>
            <p>
              some word shere for my cool board i am making, Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Repudiandae adipisci quia
              architecto praesentium ut quasi nemo tempora accusantium porro,
              cupiditate, illum laborum provident quis doloribus sunt
              dignissimos quod obcaecati. Neque.
            </p>
            <p>
              some word shere for my cool board i am making, Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Repudiandae adipisci quia
              architecto praesentium ut quasi nemo tempora accusantium porro,
              cupiditate, illum laborum provident quis doloribus sunt
              dignissimos quod obcaecati. Neque.
            </p>
          </div>
          {/* end small board */}
        </div>
      </div>
    </section>
  );
}
