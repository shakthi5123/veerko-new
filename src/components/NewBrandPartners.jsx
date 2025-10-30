import React from "react";
import brand1 from "../assets/brand-partners/p1.png";
import brand2 from "../assets/brand-partners/p2.png";
import brand3 from "../assets/brand-partners/p3.png";
import brand4 from "../assets/brand-partners/p4.png";
import brand5 from "../assets/brand-partners/p5.png";
import brand6 from "../assets/brand-partners/p6.png";
import brand7 from "../assets/brand-partners/p7.png";
import brand8 from "../assets/brand-partners/p8.png";
import brand9 from "../assets/brand-partners/p10.png";

const brands = [
  brand1,
  brand2,
  brand3,
  brand4,
  brand5,
  brand6,
  brand7,
  brand8,
  brand9,
];

const NewBrandPartners = () => {
  return (
    <div className="w-full overflow-hidden py-10 space-y-2">
      <h2 className="text-xl md:text-2xl font-semibold text-center ">
        Trusted by Industry Leaders
      </h2>
      <h3 className="text-lg text-gray-700  font-semibold text-center mb-8 max-w-3xl mx-auto">
        Chosen by industry leaders for one reason: we deliver results. Our
        reliability and dedication have earned the trust of the world' s most
        iconic brands.
      </h3>

      {/* Scroll Container */}
      <div className="relative w-full">
        <div className="flex animate-scroll">
          {/* movingRow contains two copies: [...brands, ...brands] */}
          {[...brands, ...brands].map((logo, i) => (
            <div key={i} className="flex-shrink-0 px-8">
              <img
                src={logo}
                alt={`brand-${i}`}
                className="h-16 md:h-20 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewBrandPartners;
