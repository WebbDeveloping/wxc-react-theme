import React from 'react';
import classNames from 'classnames';

export default function VideoSection(
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
) {
  const outerClasses = classNames(
    'hero section center-content',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames('hero-inner section-inner');
  return (
    <div className='p-16'>
      <iframe
        className='intro-video'
        width='300'
        height='500'
        src='https://www.youtube.com/embed/sNwKcG445s8'
        frameborder='0'
        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen
      ></iframe>
    </div>
  );
}
