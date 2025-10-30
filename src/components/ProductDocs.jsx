// import React from "react";
// import { FaFilePdf } from "react-icons/fa"; 

// const items = [
//   {
//     name: "Our Purses",
//     link: "https://drive.google.com/drive/folders/12jf_scjT5IJhrr8MYtziy34DMBuza2qW", 
//   },
//   {
//     name: "Our Mobile Stand",
//     link: "https://drive.google.com/drive/folders/12jf_scjT5IJhrr8MYtziy34DMBuza2qW", 
//   },
//   {
//     name: "Our Umbrella",
//     link: "https://drive.google.com/drive/folders/12jf_scjT5IJhrr8MYtziy34DMBuza2qW/", 
//   },
//   {
//     name: "Our Gift",
//     link: "https://drive.google.com/drive/folders/12jf_scjT5IJhrr8MYtziy34DMBuza2qW/", 
//   },
// ];

// const ProductDocs = () => {
//   return (
//     <section className="py-6 px-6 bg-white">
//       <h2 className="text-center text-2xl md:text-3xl text-blue-600 font-semibold mb-8">
//         Corporate Gifts Catalog
//       </h2>

//       {/* Grid of 4 boxes */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl text-blue-600  mx-auto">
//         {items.map((item, idx) => (
//           <a
//             key={idx}
//             href={item.link}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex flex-col items-center justify-center border border-gray-400  rounded-2xl shadow-md p-6 h-40  transition"
//           >
//             <FaFilePdf className="text-4xl mb-3" />
//             <span className="text-lg font-medium text-black">{item.name}</span>
//           </a>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ProductDocs;

import React, { useState } from "react";
import { FaFilePdf } from "react-icons/fa";

const items = [
  {
    name: "Our Purses",
    link: "https://drive.google.com/drive/folders/12jf_scjT5IJhrr8MYtziy34DMBuza2qW",
  },
  {
    name: "Our Mobile Stand",
    link: "https://drive.google.com/drive/folders/12jf_scjT5IJhrr8MYtziy34DMBuza2qW",
  },
  {
    name: "Our Umbrella",
    link: "https://drive.google.com/drive/folders/12jf_scjT5IJhrr8MYtziy34DMBuza2qW",
  },
  {
    name: "Our Gift",
    link: "https://drive.google.com/drive/folders/12jf_scjT5IJhrr8MYtziy34DMBuza2qW",
  },
];

const ProductDocs = () => {
  const [selected, setSelected] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

 const handleSubmit = async (e) => {
  e.preventDefault();
  if (!formData.name || !formData.email || !formData.phone) {
    alert("Please fill all fields");
    return;
  }

  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbzWPIlvLw6h0NGHvQkepQQsM-QKyI44Jro2AkTv1lYGa2yPLFdMZBR2FgkC9yPQABk/exec", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    });

    const result = await response.json();
    if (result.status === "success") {
      setSubmitted(true);
    } else {
      alert("Failed to submit. Try again.");
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("Error submitting form. Check console.");
  }
};

  return (
    <section className="py-6 px-6 bg-white">
      <h2 className="text-center text-2xl md:text-3xl text-blue-600 font-semibold mb-8">
        Corporate Gifts Catalog
      </h2>

      {/* Grid of 4 boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {items.map((item, idx) => (
          <button
            key={idx}
            onClick={() => {
              setSelected(item);
              setSubmitted(false);
              setFormData({ name: "", email: "", phone: "" });
            }}
            className="flex flex-col items-center justify-center border border-gray-300 
                       rounded-2xl shadow-md p-6 h-40 transition hover:shadow-lg hover:scale-105"
          >
            <FaFilePdf className="text-4xl mb-3 text-blue-600" />
            <span className="text-lg font-medium text-gray-800">{item.name}</span>
          </button>
        ))}
      </div>

      {/* Popup Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-lg relative">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              ✖
            </button>

            {!submitted ? (
              <>
                <h3 className="text-xl font-semibold text-center text-blue-600 mb-4">
                  Access {selected.name}
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-2 focus:outline-blue-500"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-2 focus:outline-blue-500"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border rounded-lg p-2 focus:outline-blue-500"
                  />
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                  >
                    Submit
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center">
                <h3 className="text-xl font-semibold text-green-600 mb-4">
                  Thank you, {formData.name}!
                </h3>
                <a
                  href={selected.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                >
                  View {selected.name}
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductDocs;


// new try improved the popup 
// import React, { useState } from "react";
// import { FaFilePdf } from "react-icons/fa";

// const items = [
//   { name: "Our Purses", formLink: "https://docs.google.com/forms/d/e/1FAIpQLSe8_pR9tClsGbhKMZ8uvNCgyeolyrPHhLnkOybcEfL5FxDnAw/viewform?usp=header" ,link: "https://drive.google.com/drive/folders/12jf_scjT5IJhrr8MYtziy34DMBuza2qW" },
//   { name: "Our Mobile Stand", formLink: "https://docs.google.com/forms/d/e/1FAIpQLSe8_pR9tClsGbhKMZ8uvNCgyeolyrPHhLnkOybcEfL5FxDnAw/viewform?usp=header" , link: "https://drive.google.com/drive/folders/12jf_scjT5IJhrr8MYtziy34DMBuza2qW" },
//   { name: "Our Umbrella", formLink: "https://docs.google.com/forms/d/e/1FAIpQLSe8_pR9tClsGbhKMZ8uvNCgyeolyrPHhLnkOybcEfL5FxDnAw/viewform?usp=header" , link:  "https://drive.google.com/drive/folders/12jf_scjT5IJhrr8MYtziy34DMBuza2qW" },
//   { name: "Our Gift", formLink: "https://docs.google.com/forms/d/e/1FAIpQLSe8_pR9tClsGbhKMZ8uvNCgyeolyrPHhLnkOybcEfL5FxDnAw/viewform?usp=header" , link: "https://drive.google.com/drive/folders/12jf_scjT5IJhrr8MYtziy34DMBuza2qW" },
// ];

// const ProductDocs = () => {
//   const handleClick = (item) => {
//     // Open Google Form in a new tab
//     window.open(item.formLink, "_blank");
//   };

//   return (
//     <section className="py-10 px-6 bg-gray-50">
//       <h2 className="text-center text-3xl text-blue-700 font-bold mb-10">
//         Corporate Gifts Catalog
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
//         {items.map((item, idx) => (
//           <button
//             key={idx}
//             onClick={() => handleClick(item)}
//             className="flex flex-col items-center justify-center border border-gray-300 rounded-xl shadow-md p-6 h-44 transition hover:shadow-lg hover:scale-105 bg-white"
//           >
//             <FaFilePdf className="text-4xl mb-3 text-blue-600" />
//             <span className="text-lg font-medium text-gray-800">{item.name}</span>
//           </button>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ProductDocs;