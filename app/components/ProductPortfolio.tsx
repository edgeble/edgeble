import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard'; 

const products = [
  {
    image: './cardimage1.webp',
    title: 'AI Accelerators',
    description: 'Performance-driven standardized neural compute modules with built-in AI Accelerators that are ready to deploy in any AIoT sectors.',
    specs: [
      'NPU: Up to 32TOPS',
      'Low Power consumption',
      '8K Video Coding'
    ],
  },
  {
    image: './cardimage2.webp',
    title: 'Machine Vision Sensors',
    description: 'Application-agnostic Camera sensor modules built with robust connectivity for delivering ultra vision Edge AI solutions.',
    specs: [
      '4K Pixel Resolution',
      'Frame rates: 30, 60, 90fps',
      '4 or 2 lane MIPI CSI2'
    ],
  },
  {
    image: './cardimage3.webp',
    title: 'OpenAIA Ecosystem',
    description: 'Open Source AI Accelerator model management platform which can train, deploy, and update the models powered by DevOps.',
    specs: [
      'Open Source OS/Kernel',
      'Edgeble Model Zoo',
      'Model Deployment, Update'
    ],
  },
];

const ProductPortfolio: React.FC = () => (
  <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} className="w-full h-auto">
    <div className="p-8 md:p-12 lg:p-16 2xl:p-20 w-full relative isolate">
      <h1 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-4 lg:mb-12 xl:mb-16 2xl:mb-16 text-left">Product Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            title={product.title}
            description={product.description}
            specs={product.specs}
          />
        ))}
      </div>
    </div>
  </motion.div>
);

export default ProductPortfolio;
