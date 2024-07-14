import React, { useState } from 'react';
import { motion } from 'framer-motion';
import VideoPlayer from './VideoPlayer';
import Card from './Card';

const MainComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const videoSources = ['./adas1.mp4', './adas2.mp4', './adas3.mp4', './adas4.mp4', './adas5.mp4'];
  const cardData = [
    { title: 'Discriminative', description: 'Edgeable AI', index: 0 },
    { title: 'Generative', description: 'Edgeable AI', index: 1 },
    { title: 'Enhansive', description: 'Edgeable AI', index: 2 },
    { title: 'Object Detection', description: 'Edgeable AI', index: 3 },
    { title: 'Edgeble Solution', description: 'Edgeable AI', index: 4 },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} className="w-full overflow-hidden">
    <div className="w-full h-auto flex flex-col justify-center items-start py-6 md:py-10 lg:py-14 2xl:py-20 3xl:py-28 px-8 md:px-18 lg:px-28 2xl:px-38 3xl:px-48 relative isolate">
    <p className="text-xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-4 lg:mb-12 xl:mb-16 2xl:mb-16 text-left">Burgeoning Edge AI</p>
        
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
        <div className="order-2 lg:order-1 w-full w-2/5 3xl:w-1/2">
            {videoSources.map((src, index) => (
              <VideoPlayer key={index} src={src} activeIndex={activeIndex} index={index} />
            ))}
        </div>
          <div className="order-1 lg:order-2 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-3/5 3xl:w-1/2">
            {cardData.map((card) => (
              <Card key={card.index} index={card.index} activeIndex={activeIndex} setActiveIndex={setActiveIndex} title={card.title} description={card.description} />
            ))}
          </div>
        </div>
        <div className="rotate-30 absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-blue-500 to-purple-300 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }} />
        </div>
      </div>
    </motion.div>
  );
};

export default MainComponent;
