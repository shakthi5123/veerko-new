const coreValues = [
  { title: "Quality", desc: "Delivering high-quality products that reflect excellence." },
  { title: "Customization", desc: "Tailoring every design to perfectly match your brand's identity." },
  { title: "Reliability", desc: "Consistent and timely service you can depend on." },
  { title: "Efficiency", desc: "Streamlining processes for swift and accurate delivery." },
  { title: "Versatility", desc: "Offering a huge range of umbrella models and design options." },
  { title: "Global", desc: "Reliable shipping to multiple addresses, anywhere in the world." },
  { title: "Heritage", desc: "Proudly made in India, with a commitment to craftsmanship." },
];

const CoreValues = () => {
  return (
    <div className="">
      <h1 className="text-center text-2xl md:text-4xl font-bold mb-8">Our Core Values</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6 text-center">
        {coreValues.map((value, i) => (
          <div key={i} className="flex flex-col items-center p-4">
            <h1 className="font-bold py-2 ml-2 mr-4 px-2 mb-3 bg-[#1b5fbc] text-white text-2xl border-3 border-[#414141] rounded-xl">
              {value.title}
            </h1>
            <p className="text-sm text-gray-700">{value.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreValues;