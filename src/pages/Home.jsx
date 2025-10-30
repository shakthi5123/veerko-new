// import React, { useEffect, useState } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import { NavLink } from "react-router-dom";
// import teamImg from "../assets/about-img/teamImg.png";
// import product1 from "../assets/collection/umb-1.jpeg";
// import ProductGrid from "../components/ProductGrid";
// import CorporateMomentoSection from "../components/CorporateMomentoSection";
// import NewBrandPartners from "../components/NewBrandPartners";
// import Testimonials from "../components/Testimonials";

// // Banner images


// const Home = () => {
//   // const [current, setCurrent] = useState(0);

//   // Product sample data
//   const sampleProducts = [
//     { image: product1, title: "Gift 1" },
//     { image: product1, title: "Gift 2" },
//     { image: product1, title: "Gift 3" },
//     { image: "", title: "Gift 4" },
//     { image: "", title: "Gift 5" },
//     { image: "", title: "Gift 6" },
//     { image: "", title: "Gift 7" },
//     { image: "", title: "Gift 8" },
//     { image: "", title: "Gift 9" },
//   ];



//   return (
//     <>


//       {/* About Section */}
//       <div className="flex flex-col md:flex-row gap-5 items-center mt-20 mb-20 px-6">
//         <div className="max-w-3xl">
//           <h1 className="text-4xl md:text-5xl font-semibold">
//             Customized Solutions from the House of Veerko
//           </h1>
//           <p className="text-lg md:text-2xl mt-3">
//             A perfect corporate reward for every occasion
//           </p>

//           <div className="mt-6 flex gap-4">
//             <NavLink
//               to="/products"
//               className="p-3 rounded-2xl bg-blue-600 text-white hover:bg-blue-700"
//             >
//               Explore Products
//             </NavLink>
//             <NavLink
//               to="/contact"
//               className="p-3 rounded-2xl bg-blue-600 text-white hover:bg-blue-700"
//             >
//               Request a Quote
//             </NavLink>
//           </div>
//         </div>

//         <div>
//           <img src={teamImg} alt="Team" className="max-w-sm rounded-2xl" />
//         </div>
//       </div>

//       {/* Product Grid */}
//       <ProductGrid products={sampleProducts} />

//       <CorporateMomentoSection />

//       <NewBrandPartners />

//       <Testimonials />

//       {/* Contact Form */}
//       {/* <ContactForm /> */}
//     </>
//   );
// };

// export default Home;

// Right one 

import { NavLink } from "react-router-dom";

import bgImg from "../assets/bg-img.jpg";
import product1 from "../assets/collection/umb-1.jpeg";

import ProductGrid from "../components/ProductGrid";
import CorporateMomentoSection from "../components/CorporateMomentoSection";
import NewBrandPartners from "../components/NewBrandPartners";
import Testimonials from "../components/Testimonials";

const Home = () => {


  // Product sample data
  const sampleProducts = [
    { image: product1, title: "Gift 1" },
    { image: product1, title: "Gift 2" },
    { image: product1, title: "Gift 3" },
    { image: "", title: "Gift 4" },
    { image: "", title: "Gift 5" },
    { image: "", title: "Gift 6" },
    { image: "", title: "Gift 7" },
    { image: "", title: "Gift 8" },
    { image: "", title: "Gift 9" },
  ];

  return (
    <>
      {/* About Section with Background */}
      <div
       className="relative w-full flex flex-col md:flex-row items-center gap-5 px-12  py-40  mt-12 mb-20 bg-cover bg-center"
  style={{ backgroundImage: `url(${bgImg})` }}
      >
        {/* <div className="absolute inset-0 bg-black/50"></div> */}

        <div className="relative max-w-3xl text-center md:text-left text-white">
          <h1 className="text-3xl md:text-5xl font-bold">
            Customized Solutions from the House of Veerko
          </h1>
          <p className="text-lg md:text-2xl mt-3">
            A perfect corporate reward for every occasion
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <NavLink
              to="/products"
              className="p-3 rounded-2xl bg-blue-600 text-white hover:bg-blue-700 text-center"
            >
              Explore Products
            </NavLink>
            <NavLink
              to="/contact"
              className="p-3 rounded-2xl bg-blue-600 text-white hover:bg-blue-700 text-center"
            >
              Request a Quote
            </NavLink>
          </div>
        </div>

        {/* Team Image */}
        {/* <div className="relative">
          <img
            src={teamImg}
            alt="Team"
            className="max-w-xs sm:max-w-sm md:max-w-md rounded-2xl mt-8 md:mt-0 mx-auto md:mx-0"
          />
        </div> */}
      </div>

      {/* Product Grid */}
      <ProductGrid products={sampleProducts} />

      <CorporateMomentoSection />

      <NewBrandPartners />

      <Testimonials />
    </>
  );
};

export default Home;

