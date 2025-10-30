import React from "react";

const UmbrellaCard = ({ image, title, specs, delay = 0 }) => {
  return (
    <div 
      className="group bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 p-5 flex flex-col items-center text-center max-w-sm mx-auto"
    //   data-aos="fade-up"
    //   data-aos-delay={delay}
    >
      {/* Image */}
      <div className="w-full h-56 flex items-center justify-center bg-[#F9FAFB] rounded-xl overflow-hidden mb-4">
        <img 
          src={image} 
          alt={title} 
          className="h-full object-contain transform transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>

      {/* Specs/Description */}
      {specs && (
        <p className="text-gray-600 text-sm mt-2">{specs}</p>
      )}

      {/* CTA Button */}
      {/* <button className="mt-4 px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded-full shadow-md hover:bg-blue-700 transition">
        Get Quote
      </button> */}
    </div>
  );
};

export default UmbrellaCard;