import React from 'react';
import { motion } from 'framer-motion';

const ComingSoonSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-[50vh] w-screen flex flex-col items-center justify-center p-4 md:p-12 lg:p-16 relative isolate"
    >
      <p className="bg-clip-text bg-gradient-to-l from-pink-500 to-blue-900 text-transparent text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold tracking-wide leading-normal text-center md:text-left">
        {`</>`}
      </p>
      <p className="font-mono tracking-widest text-lg md:text-xl lg:text-2xl 2xl:text-3xl 3xl:text-4xl text-center">
        Developer&apos;s Community
      </p>
      <span className="font-mono tracking-widest text-lg md:text-xl lg:text-2xl 2xl:text-3xl 3xl:text-4xl flex items-center text-center">
        Coming Soon...
      </span>
      <div
        className="rotate-60 absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-blue-500 to-purple-300 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </motion.div>
  );
};

export default ComingSoonSection;
