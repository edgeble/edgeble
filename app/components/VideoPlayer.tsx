import React from 'react';

const VideoPlayer = ({ src, activeIndex, index }) => (
  <video src={src} className={`w-[100vw] md:w-[30vw] object-contain ${activeIndex === index ? '' : 'hidden'}`} autoPlay muted loop />
);

export default VideoPlayer;
