import React from "react";
import { IoMdContact } from "react-icons/io";

// Reusable Testimonial Card
const TestimonialCard = ({ icon: Icon, name, role, rating, text }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition duration-300">
      {/* Rating */}
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            fill={i < rating ? "gold" : "none"}
            viewBox="0 0 24 24"
            stroke="gold"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.18 3.64a1 1 0 00.95.69h3.813c.969 0 1.371 1.24.588 1.81l-3.084 2.24a1 1 0 00-.364 1.118l1.18 3.64c.3.921-.755 1.688-1.54 1.118l-3.084-2.24a1 1 0 00-1.176 0l-3.084 2.24c-.784.57-1.838-.197-1.539-1.118l1.18-3.64a1 1 0 00-.364-1.118L2.518 9.067c-.783-.57-.38-1.81.588-1.81h3.813a1 1 0 00.95-.69l1.18-3.64z"
            />
          </svg>
        ))}
      </div>

      {/* Text */}
      <p className="text-gray-600 italic mb-6">“{text}”</p>

      {/* Profile */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-2xl text-gray-600">
          <Icon />
        </div>
        <div>
          <h4 className="font-semibold text-gray-800">{name}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
};

// Main Component
const Testimonials = () => {
  const testimonialsData = [
    {
      icon: IoMdContact,
      name: "Shakthi",
      role: "Business owner",
      rating: 5,
      text: "Veerko made employee gifting effortless. Our onboarding kits were delivered on time and beautifully packed!",
    },
    {
      icon: IoMdContact,
      name: "Manikandan",
      role: "Manager",
      rating: 4,
      text: "The personalized gifts impressed our clients. Highly recommend Veerko for corporate gifting.",
    },
    {
      icon: IoMdContact,
      name: "Raja",
      role: "Marketing Head",
      rating: 5,
      text: "Great quality products and smooth service. They really understand what corporate clients need.",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <h2 className="text-center text-2xl md:text-3xl font-semibold mb-12">
        What Our Clients Say
      </h2>

      {/* Grid Layout */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {testimonialsData.map((testimonial, idx) => (
          <TestimonialCard key={idx} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;