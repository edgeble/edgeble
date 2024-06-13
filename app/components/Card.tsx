import React from 'react';
import { useRouter } from 'next/navigation';

interface CardProps {
  index: number;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ index, activeIndex, setActiveIndex, title, description }) => {
  const router = useRouter();
  return (
    <div className="w-[90vw] md:w-1/3 p-1 md:p-2 lg:p-4 cursor-pointer" onClick={() => setActiveIndex(index)}>
      <div className={`z-0 bg-white flex flex-col border border-2 p-4 lg:p-6 transition-transform duration-300 ease-in-out ${activeIndex === index ? 'border-black' : 'border-gray-200 hover:border-gray-400'}`}>
        <p className="text-md md:text-lg xl:text-xl 2xl:text-3xl font-semibold mb-1">{title}</p>
        <p className="text-[12px] md:text-sm xl:text-md 2xl:text-lg text-gray-600">{description}</p>
        <div className="w-24 lg:w-36 text-[10px] md:text-[12px] lg:text-[14px] xl:text-sm 2xl:text-md leading-6 text-white cursor-pointer bg-gradient-to-r from-black/50 via-black to-black parallelogram2 px-2 lg:px-4 2xl:px-6 py-px lg:py-1 mt-2 text-center" onClick={() => router.push(`/product/${index}`)}>
          Learn more <span aria-hidden="true">→</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
