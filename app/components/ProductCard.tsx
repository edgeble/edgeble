import React from 'react';

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  specs: string[];
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, description, specs }) => (
  <div className="flex flex-col overflow-hidden">
    <img src={image} className="w-full h-auto object-cover" />
    <div className="pt-4">
      <h3 className="text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold mb-2">{title}</h3>
      <p className="text-sm md:text-md lg:text-md xl:text-lg 2xl:text-xl">{description}</p>
      <ul className="list-disc pl-5 text-sm mb-4">
        {specs.map((spec, index) => (
          <li key={index} className="text-sm md:text-md lg:text-md xl:text-lg 2xl:text-xl text-gray-600">{spec}</li>
        ))}
      </ul>
      {title === "AI Accelerators" ? (
        <a href="/aiaccelerator">
          <button className="px-4 py-2 bg-black text-white hover:bg-gray-800 transition-colors duration-200 ease-in-out">
            Read More
          </button>
        </a>
      ) : (
        <button className="px-4 py-2 bg-black text-white hover:bg-gray-800 transition-colors duration-200 ease-in-out">
          Read More
        </button>
      )}
    </div>
  </div>
);

export default ProductCard;
