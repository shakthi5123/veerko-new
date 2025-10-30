import React from "react";
import { FaFilePdf } from "react-icons/fa";
import ProductDocs from "./ProductDocs";

export default function OurProducts() {
  return (
    <div className="mt-15 mb-60">
      <div className="py-6 px-6 md:px-12 lg:px-12 text-center">
        <h1 className="text-xl md:text-3xl font-bold text-blue-600">Corporate Gift Product Catalogs</h1>
        <p className="text-gray-600 mt-2 max-w-6xl mx-auto">
          Amazing branded products to curated collections based on themes, below
          VEERKO catalogs have everything covered to take away wonderful gifting
          ideas. We are sure, these catalogs will answer all your queries and
          help you strategise your upcoming gifintg campaign perfectly.
        </p>
      </div>

      <div className="">

      </div>

      <ProductDocs />
    </div>
  );
}
