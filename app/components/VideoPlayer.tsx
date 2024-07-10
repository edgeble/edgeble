import React from 'react';

interface VideoPlayerProps {
  src: string;
  activeIndex: number;
  index: number;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, activeIndex, index }) => (
  <div className="w-full h-auto">
    <video
      src={src}
      className={`w-full pr-10 md:pr-12 lg:pr-14 2xl:pr-17 h-auto object-cover ${activeIndex === index ? '' : 'hidden'}`}
      autoPlay
      muted
      loop
    />
  </div>
);

export default VideoPlayer;
