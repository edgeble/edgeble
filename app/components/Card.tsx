import React from 'react';
import { useRouter } from 'next/navigation';

interface CardProps {
  index: number;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  title: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ index, activeIndex, setActiveIndex, title, imageUrl }) => {
  const router = useRouter();

  const handleImageClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { offsetY, target } = e.nativeEvent;
    const { height } = (target as HTMLImageElement).getBoundingClientRect();
    
    if (offsetY > height * 0.7) {
      router.push(`/product/${index}`);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="hidden md:flex flex-col items-center p-2 cursor-pointer">
      <div onClick={handleImageClick} className="w-full">
        <img
          src={imageUrl}
          alt={title}
          className={`w-full h-auto object-cover rounded-lg transition-transform duration-300 ease-in-out ${activeIndex === index ? 'border-black border-2' : 'border-gray-200 border-2 hover:border-gray-400'}`}
        />
      </div>
    </div>
  );
};

export default Card;
