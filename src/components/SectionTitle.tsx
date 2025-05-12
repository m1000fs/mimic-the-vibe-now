
import React from 'react';

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className="flex items-center my-8">
      <h2 className="font-playfair text-2xl font-bold">{title}</h2>
      <div className="flex-grow ml-4 h-px bg-gray-300"></div>
    </div>
  );
};

export default SectionTitle;
