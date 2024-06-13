import React from 'react';
import { motion } from 'framer-motion';

const products = [
  {
    image: './cardimage1.webp',
    title: 'AI Accelerator',
    description: 'Performance-driven standardized neural compute modules with built-in AI Accelerators that are ready to deploy in any AIoT sectors.',
  },
  {
    image: './cardimage2.webp',
    title: 'Machine Vision Sensors',
    description: 'Application-agnostic Camera sensor modules built with robust connectivity for delivering ultra vision Edge AI solutions.',
  },
  {
    image: './cardimage3.webp',
    title: 'OpenAIA Ecosystem',
    description: 'Open Source AI Accelerator model management platform which can train, deploy, and update the models powered by DevOps.',
  },
];

const ProductPortfolio = () => (
  <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} className="min-h-screen flex flex-col">
    <div className="flex-1 p-8 md:p-12 lg:p-16 2xl:p-48 3xl:56">
      <p className="text-xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-4 lg:mb-12 xl:mb-16 2xl:mb-16">Product Portfolio</p>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 p-4 lg:px-6 xl:px-8 2xl:px-10">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col">
            <img src={product.image} className="flex-shrink-0 w-full object-cover cutImage" />
            <p className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-semibold pt-6 pb-2">{product.title}</p>
            <p className="flex-1 text-md lg:text-lg 2xl:text-xl text-gray-700 pb-2">{product.description}</p>
            <div className="flex">
              <button className="min-w-content pr-6 pl-4 py-2 mt-2 text-white bg-black hover:border-blue-700 hover:scale-110 hover:translate-x-2 hover:translate-y-2 hover:bg-gradient-to-r hover:from-black hover:to-blue-900 cursor-pointer button2 transition duration-300 transform">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

export default ProductPortfolio;
