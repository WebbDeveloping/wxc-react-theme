import React from 'react';

export default function VideoSection() {
  return (
    <div className='p-16'>
      <iframe
        className='intro-video'
        title='unique'
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
