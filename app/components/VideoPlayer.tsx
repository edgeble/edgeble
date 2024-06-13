import React from 'react';

interface VideoPlayerProps {
  src: string;
  activeIndex: number;
  index: number;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, activeIndex, index }) => (
  <video
    src={src}
    className={`w-[100vw] md:w-[30vw] object-contain ${activeIndex === index ? '' : 'hidden'}`}
    autoPlay
    muted
    loop
  />
);

export default VideoPlayer;
