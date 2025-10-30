import React from "react";

const ScrollCard = ({ image, title }) => {
  return (
    <div className="w-[280px] h-[300px] flex-shrink-0 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-4 flex flex-col items-center text-center">
      {/* Image */}
      <div className="w-full h-[200px] flex items-center justify-center bg-[#F9FAFB] rounded-lg overflow-hidden mb-3">
        <img 
          src={image} 
          alt={title} 
          className="h-full object-contain transform transition duration-300 hover:scale-105"
        />
      </div>

      {/* Title */}
      <h3 className="text-sm font-semibold text-gray-800">{title}</h3>
    </div>
  );
};

export default ScrollCard;