import React from "react";

// Reusable Card Component
const ProductCard = ({ image, title }) => {
  return (
    <div className="flex flex-col items-center">
      {image ? (
        <img
          src={image}
          alt={title}
          className="w-32 h-32 object-cover rounded-2xl shadow-md"
        />
      ) : (
        <div className="w-32 h-32 bg-blue-700 rounded-2xl shadow-md"></div>
      )}
      {title && (
        <p className="mt-2 text-sm font-medium text-gray-700 text-center">
          {title}
        </p>
      )}
    </div>
  );
};

// Grid Section

const ProductGrid = ({ products }) => {
  return (
    <section className="">
      <h2 className="text-center text-2xl font-semibold mb-6">
        Browse a Wide Collection of Corporate Gifts & Promotional Giveaways
      </h2>

      <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
        {products.map((product, idx) => (
          <div
            key={idx}
            className="min-w-[150px] sm:min-w-[180px] md:min-w-[150px] bg-blue-700 rounded-3xl flex items-center justify-center text-white font-semibold h-30"
          >
            {product.image ? (
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover rounded-3xl"
              />
            ) : (
              <span>{product.title}</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;