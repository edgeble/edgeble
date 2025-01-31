
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import VideoPlayer from './VideoPlayer';
import Card from './Card';

const MainComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const videoSources = ['./adas1.mp4', './adas2.mp4', './adas3.mp4', './adas4.mp4', './adas5.mp4', './adas5.mp4'];
  const cardData = [
    { title: 'Discriminative', imageUrl: "/burger1.png", index: 0 },
    { title: 'Generative', imageUrl: "./burger2.png", index: 1 },
    { title: 'Enhansive', imageUrl: "./burger3.png", index: 2 },
    { title: 'Object Detection', imageUrl: "./burger4.png", index: 3 },
    { title: 'Edgeble Solution', imageUrl: "./burger5.png", index: 4 },
    { title: 'Edgeble Solution', imageUrl: "./burger6.png", index: 5 },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} className="w-full overflow-hidden">
    
    <div className="w-full h-auto flex flex-col justify-center items-start py-6 md:py-10 lg:py-14 2xl:py-20 3xl:py-28 px-8 md:px-18 lg:px-28 2xl:px-38 3xl:px-[300px] 4xl:px-[700px] 5xl:px-[900px] relative isolate">
    <p className="text-xl md:text-3xl lg:text-4xl xl:text-5xl mb-4 lg:mb-12 xl:mb-16 2xl:mb-16 text-left">Transformative Edge AI Solutions</p>
        
        {/* Horizontal sliding bar for mobile view */}
        <div className="w-full flex lg:hidden overflow-x-auto whitespace-nowrap py-2">
          {cardData.map((card) => (
            <div
              key={card.index}
              className={`inline-block cursor-pointer px-4 py-2 ${activeIndex === card.index ? 'text-black' : 'text-gray-500'}`}
              onClick={() => setActiveIndex(card.index)}
            >
              {card.title}
            </div>
          ))}
        </div>
        
        <div className="w-full flex flex-col lg:flex-row items-center justify-center">
  <div className="order-2 lg:order-1 w-full lg:w-3/4">
    {videoSources.map((src, index) => (
      <VideoPlayer key={index} src={src} activeIndex={activeIndex} index={index} />
    ))}
  </div>
  <div className="order-1 lg:order-2 w-full lg:w-1/4 grid grid-cols-2 gap-4 mb-[135px]">
    {cardData.map((card) => (
      <Card key={card.index} index={card.index} activeIndex={activeIndex} setActiveIndex={setActiveIndex} title={card.title} imageUrl={card.imageUrl} />
    ))}
  </div>
</div>

        <div className="rotate-30 absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }} />
        </div>
      </div>
    </motion.div>
  );
};

export default MainComponent;
