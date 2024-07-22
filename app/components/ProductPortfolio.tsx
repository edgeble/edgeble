import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard'; 

const products = [
  {
    image: './cardimage1.png',
    title: 'Edge AI Accelerators',
    description: 'Performance-driven standardized neural compute modules with built-in AI Accelerators that are ready to deploy in any AIoT sectors.',
    // specs: [
    //   'NPU: Up to 32TOPS',
    //   'Low Power consumption',
    //   '8K Video Coding'
    // ],
  },
  {
    image: './cardimage2.png',
    title: 'Machine Vision Sensors',
    description: 'Application-agnostic Camera sensor modules built with robust connectivity for delivering ultra vision Edge AI solutions.',
    // specs: [
    //   '4K Pixel Resolution',
    //   'Frame rates: 30, 60, 90fps',
    //   '4 or 2 lane MIPI CSI2'
    // ],
  },
  {
    image: './cardimage3.png',
    title: 'EdgeAIA Platform',
    description: 'Industry first Pre-trained AI inference Open source DevOps lifecycle software platform that train, deploy, and update the models on real-time',
    // specs: [
    //   'Open Source OS/Kernel',
    //   'Edgeble Model Zoo',
    //   'Model Deployment, Update'
    // ],
  },
];

const ProductPortfolio: React.FC = () => (
  <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} className="w-full h-auto">
    <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-500 to-purple-300 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                        }}
                    />
                </div>
    <div className="py-6 md:py-10 lg:py-14 2xl:py-20 3xl:py-28 px-8 md:px-18 lg:px-28 2xl:px-38 3xl:px-[300px] 4xl:px-[700px] 5xl:px-[900px] w-full relative isolate">
      <h1 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl mb-4 lg:mb-12 xl:mb-16 2xl:mb-10 3xl:mb-12 text-left">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            title={product.title}
            description={product.description}
            // specs={product.specs}
          />
        ))}
      </div>
    </div>
  </motion.div>
);

export default ProductPortfolio;
