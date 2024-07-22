import React from 'react';

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
}


const ProductCard: React.FC<ProductCardProps> = ({ image, title, description }) => (
  <div className="flex flex-col overflow-hidden h-full">
    <img src={image} className="w-full h-auto object-cover" />
    <div className="flex flex-col justify-between flex-grow pt-4 bg-custom-gradient text-white p-4 rounded-b-lg">
      <div>
        <h3 className="py-2 lg:py-3 3xl:py-4 4xl:py-5 text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-3xl 4xl:text-3.5xl mb-2">{title}</h3>
        <p className="text-sm md:text-md xl:text-lg 2xl:text-xl 3xl:text-xl pb-2 lg:pb-3 3xl:pb-4 4xl:pb-5">{description}</p>
      </div>
      <div>
      {title === "AI Accelerators" ? (
          <a href="/aiaccelerator" className="flex items-center pt-2 lg:pt-3 3xl:pt-4 4xl:pt-5 text-sm md:text-md xl:text-lg 2xl:text-xl 3xl:text-2xl 4xl:text-3xl text-white hover:text-gray-300 transition-colors duration-200 ease-in-out">
            Learn More <span className="ml-2">&#x2192;</span>
          </a>
        ) : (
          <div className="flex items-center pt-2 lg:pt-3 3xl:pt-4 4xl:pt-5 text-sm md:text-md xl:text-lg 2xl:text-xl text-white hover:text-gray-300 transition-colors duration-200 ease-in-out">
            Learn More <span className="ml-1">&#x2192;</span>
          </div>
        )}
      </div>
    </div>
  </div>
);

export default ProductCard;
