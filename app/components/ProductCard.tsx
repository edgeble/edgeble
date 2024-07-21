import React from 'react';

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  // specs: string[];
}

const ProductCard: React.FC<ProductCardProps> = ({ image, title, description }) => (
  <div className="flex flex-col overflow-hidden">
    <img src={image} className="w-full h-auto object-cover" />
    <div className="pt-4">
      <h3 className="py-2 lg:py-3 3xl:py-4 4xl:py-5 text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-3xl 4xl:text-3.5xl mb-2">{title}</h3>
      <p className="text-sm md:text-md xl:text-lg 2xl:text-xl 3xl:text-xl pb-2 lg:pb-3 3xl:pb-4 4xl:pb-5">{description}</p>
      {/* <ul className="list-disc pl-5 text-sm mb-4">
        {specs.map((spec, index) => (
          <li key={index} className="text-sm md:text-md xl:text-lg 2xl:text-xl 3xl:text-2xl 4xl:text-3xl text-gray-800">{spec}</li>
        ))}
      </ul> */}
      {title === "AI Accelerators" ? (
        <a href="/aiaccelerator">
          <button className="pt-2 lg:pt-3 3xl:pt-4 4xl:pt-5 text-sm md:text-md xl:text-lg 2xl:text-xl 3xl:text-2xl 4xl:text-3xl px-5 py-3 bg-black text-white hover:bg-gray-800 transition-colors duration-200 ease-in-out">
            Read More
          </button>
        </a>
      ) : (
        <button className="pt-2 lg:pt-3 3xl:pt-4 4xl:pt-5 text-sm md:text-md xl:text-lg 2xl:text-xl 3xl:text-2xl 4xl:text-3xl px-5 py-3 bg-black text-white hover:bg-gray-800 transition-colors duration-200 ease-in-out">
          Read More
        </button>
      )}
    </div>
  </div>
);

export default ProductCard;
