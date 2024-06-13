import React from 'react';

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, description }) => (
  <div className="flex flex-col">
    <img src={image} className="flex-shrink-0 w-full object-cover cutImage" />
    <p className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-semibold pt-6 pb-2">{title}</p>
    <p className="flex-1 text-md lg:text-lg 2xl:text-xl text-gray-700 pb-2">
      {description}
    </p>
    <div className="flex">
      <button className="min-w-content pr-6 pl-4 py-2 mt-2 text-white bg-black hover:border-blue-700 hover:scale-110 hover:translate-x-2 hover:translate-y-2 hover:bg-gradient-to-r hover:from-black hover:to-blue-900 cursor-pointer button2 transition duration-300 transform">
        Read More
      </button>
    </div>
  </div>
);

export default ProductCard;
