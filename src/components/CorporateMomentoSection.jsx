// import React from "react";
// import teamImg from "../assets/about-img/teamImg.png";

// const CorporateMomentoSection = () => {
//   const stats = [
//     { number: "50+", label: "Cities Reached" },
//     { number: "2,500+", label: "Personalized Products" },
//     { number: "5,00,000+", label: "Curated Gift Experience Delivered" },
//     { number: "1,000+", label: "Enterprise Clients" },
//     { number: "99%", label: "On-time Dispatch Rate" },
//     { number: "10,000+", label: "Scale-ready Gifting Solutions" },
//   ];

//   return (
//     <section className="py-16 px-6 bg-white">
//       {/* Heading */}
//       <h2 className="text-center text-2xl md:text-3xl font-semibold mb-12">
//         Corporate Momentos for Every Occasion
//       </h2>

//       {/* Image Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
//         <div className="col-span-1 md:row-span-2">
//           <img
//             src=""
//             alt="Gift"
//             className="w-full h-full object-cover rounded-2xl border bg-amber-200"
//           />
//         </div>
//         <div className="col-span-2">
//           <img
//             src=""
//             alt="Gift"
//             className="w-full h-40 md:h-full object-cover rounded-2xl border bg-amber-200"
//           />
//         </div>
//         <div className="col-span-1">
//           <img
//             src=""
//             alt="Gift"
//             className="w-full h-40 object-cover rounded-2xl border bg-amber-200"
//           />
//         </div>
//         <div className="col-span-1">
//           <img
//             src=""
//             alt="Gift"
//             className="w-full h-40 object-cover rounded-2xl border bg-amber-200"
//           />
//         </div>
//         <div className="col-span-2">
//           <img
//             src=""
//             alt="Gift"
//             className="w-full h-40 object-cover rounded-2xl border bg-amber-200"
//           />
//         </div>
//       </div>

//       {/* Subheading */}
//       <div className="text-center mb-8">
//         <h3 className="text-xl md:text-2xl font-bold">
//           We Power Gifting for India's Smartest Companies
//         </h3>
//         <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
//           Over 1,000+ businesses trust Veerko to handle their employee and
//           client gifting, from onboarding boxes to festive hampers.
//         </p>
//       </div>

//       {/* Stats */}
//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
//         {stats.map((stat, idx) => (
//           <div
//             key={idx}
//             className="bg-white shadow rounded-xl p-6 border border-gray-200"
//           >
//             <h4 className="text-xl font-bold text-blue-700">{stat.number}</h4>
//             <p className="text-sm text-gray-600 mt-2">{stat.label}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default CorporateMomentoSection;
import React from "react";
import teamImg from "../assets/about-img/teamImg.png";

const CorporateMomentoSection = () => {
  const stats = [
    { number: "50+", label: "Cities Reached" },
    { number: "2,500+", label: "Personalized Products" },
    { number: "5,00,000+", label: "Curated Gift Experience Delivered" },
    { number: "1,000+", label: "Enterprise Clients" },
    { number: "99%", label: "On-time Dispatch Rate" },
    { number: "10,000+", label: "Scale-ready Gifting Solutions" },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      {/* Heading */}
      <h2 className="text-center text-2xl md:text-3xl font-semibold mb-12">
        Corporate Momentos for Every Occasion
      </h2>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <div className="col-span-1 md:row-span-2">
          <img
            src=""
            alt="Gift"
            className="w-full h-full object-cover rounded-2xl border bg-amber-200"
          />
        </div>
        <div className="col-span-2">
          <img
            src=""
            alt="Gift"
            className="w-full h-40 md:h-full object-cover rounded-2xl border bg-amber-200"
          />
        </div>
        <div className="col-span-1">
          <img
            src=""
            alt="Gift"
            className="w-full h-40 object-cover rounded-2xl border bg-amber-200"
          />
        </div>
        <div className="col-span-1">
          <img
            src=""
            alt="Gift"
            className="w-full h-40 object-cover rounded-2xl border bg-amber-200"
          />
        </div>
        <div className="col-span-2">
          <img
            src=""
            alt="Gift"
            className="w-full h-40 object-cover rounded-2xl border bg-amber-200"
          />
        </div>
      </div>

      {/* Subheading */}
      <div className="text-center mb-8">
        <h3 className="text-xl md:text-2xl font-bold">
          We Power Gifting for India's Smartest Companies
        </h3>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Over 1,000+ businesses trust Veerko to handle their employee and
          client gifting, from onboarding boxes to festive hampers.
        </p>
      </div>

      {/* Stats with responsive grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {/* Row 1 */}
        <StatBox {...stats[0]} />
        <StatBox {...stats[2]} extra="col-span-1 sm:col-span-2 sm:row-span-2" large />
        <StatBox {...stats[5]}  />
        <StatBox {...stats[1]}  />

        {/* Row 2 */}
        <StatBox {...stats[3]} />

        {/* Last stat centered */}
        
      </div>
      <div className="mt-8   gap-6 max-w-6xl mx-auto">
          <StatBox {...stats[4]} large />
        </div>
    </section>
  );
};

//  Reusable Stat Box
const StatBox = ({ number, label, extra = "", large = false, hiddenOnSmall = false }) => (
  <div
    className={`bg-white shadow rounded-xl 	px-14 py-8  border border-gray-200 text-center flex flex-col justify-center 
      ${extra} ${hiddenOnSmall ? "hidden lg:block" : ""}`}
  >
    <h4 className={`${large ? "text-2xl" : "text-xl"} font-bold text-blue-700`}>
      {number}
    </h4>
    <p className={`${large ? "text-base" : "text-sm"} text-gray-600 mt-2`}>
      {label}
    </p>
  </div>
);

export default CorporateMomentoSection;