import React from "react";
import PromoUmbrellaCard from "../components/PromoUmbrellaCard";
import img from "../assets/card-img/img.jpg";
import UmbrellaCard from "../components/UmbrellaCard";
import umImg from "../assets/umbrella-img/um1.jpg";
import umImg2 from "../assets/umbrella-img/um2.jpg";
import ScrollCard from "../components/ScrollCard";
import BrandPartners from "../components/BrandPartners";
import CoreValues from "../components/CoreValues";

const promoUmbrella = [
  {
    image: umImg,
    title: "Branded Promotional Umbrellas",
    text: "Elevate your brand's presence with a branded promotional umbrella. These custom umbrellas are a sophisticated and practical way to showcase your company. Tailored to your specific needs, a custom umbrella serves as an excellent corporate gift, a key component of a marketing campaign, or a stylish addition to your office and staff branding. We'll guide you in choosing the perfect umbrella model and printing method, and even provide a custom visual so you can see the final product before it's made.",
    reverse: false,
  },
  {
    image: umImg2,
    title: "Promotional Umbrella Print Options",
    text: "We offer a variety of print options to make your promotional umbrella stand out. We can match colors to your corporate palette or include detailed photo prints. Our digital printing is great for intricate, full-color designs. For a durable, classic finish, we use screen printing to apply each color with precision.",
    reverse: true,
  },
];

const Umbrella = () => {
  return (
    <div className="p-4 md:p-8 mt-8 max-w-8xl mx-auto  ">
      {/* Header Section */}
      <div className="text-center ">
        <h1 className="text-xl md:text-3xl font-bold">
          Promotional Umbrellas, Built for Brands
        </h1>
        <p className="italic mt-2">
          Custom-printed umbrellas designed to showcase your brand with impact.
        </p>
      </div>

      <div className="mb-12">
        <div className="max-6xl mx-auto px-6 py-5 ">
          {promoUmbrella.map((data, index) => (
            <PromoUmbrellaCard key={index} {...data} />
          ))}
        </div>
      </div>

      {/* Horizontal Umbrella Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <UmbrellaCard
          image={umImg}
          title="Logo Print"
          specs="Custom logo printing for powerful brand visibility on every rainy day."
        />
        <UmbrellaCard
          image={umImg}
          title="Pantone-Matched Canopy Umbrella "
          specs="Perfect color matching to your brand’s Pantone shade for a seamless identity."
        />
        <UmbrellaCard
          image={umImg}
          title=" Double canopy"
          specs="Wind-resistant dual-layer design for durability and premium style."
        />
      </div>

      {/* Print Options */}
      <div className="mb-12 mt-12 flex flex-col items-center text-center">
        <h2 className="font-semibold text-lg md:text-2xl mb-2">
          Choosing Your Branded Promotional Umbrella Model
        </h2>
        <p className="text-sm md:text-base max-w-[800px]">
          <span className="block text-base md:text-lg font-medium">
            We craft every promotional umbrella with a focus on durability and
            style.
          </span>
          <span className="block text-sm md:text-base">
            Using premium materials such as high-grade pongee / polyester and a
            range of advanced printing techniques,
          </span>
          <span className="block text-sm md:text-base">
            we ensure your branded umbrella is not only eye-catching but also
            built to last
          </span>
        </p>
      </div>

      {/* Scrollable Promotional Umbrella  */}
      <div className="mt-12">
        <h2 className="text-lg md:text-2xl font-semibold mb-6 text-center">
          Promotional Umbrella
        </h2>

        <div className="overflow-hidden p-4">
          <div className="flex gap-6 animate-slow-scroll">
            {[...Array(2)].map((_, idx) => (
              <>
                <ScrollCard
                  key={`a-${idx}-1`}
                  image={umImg2}
                  title="21/8 – 2 fold"
                />
                <ScrollCard
                  key={`a-${idx}-2`}
                  image={umImg}
                  title="21/8 – 2 fold"
                />
                <ScrollCard
                  key={`a-${idx}-3`}
                  image={umImg}
                  title="21/8 – 2 fold"
                />
                <ScrollCard
                  key={`a-${idx}-4`}
                  image={umImg}
                  title="21/8 – 2 fold"
                />
                <ScrollCard
                  key={`a-${idx}-5`}
                  image={umImg}
                  title="21/8 – 2 fold"
                />
                <ScrollCard
                  key={`a-${idx}-6`}
                  image={umImg}
                  title="21/8 – 2 fold"
                />
                <ScrollCard
                  key={`a-${idx}-7`}
                  image={umImg}
                  title="21/8 – 2 fold"
                />
              </>
            ))}
          </div>
        </div>
      </div>

      {/* Scrollable Stall Umbrella */}
      <div className="mt-12">
        <h2 className="text-lg md:text-2xl font-semibold mb-6 text-center">
          Promotional Stall Umbrella
        </h2>

        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
          <div className="overflow-hidden p-4">
            <div className="flex gap-6 animate-slow-scroll">
              {[...Array(2)].map((_, idx) => (
                <>
                  <ScrollCard key={`a-${idx}-1`} image={umImg2} title="21/8 – 2 fold" />
                  <ScrollCard key={`a-${idx}-2`} image={umImg} title="21/8 – 2 fold" />
                  <ScrollCard key={`a-${idx}-3`} image={umImg} title="21/8 – 2 fold" />
                  <ScrollCard key={`a-${idx}-4`} image={umImg} title="21/8 – 2 fold" />
                  <ScrollCard key={`a-${idx}-5`} image={umImg} title="21/8 – 2 fold" />
                  <ScrollCard key={`a-${idx}-6`} image={umImg} title="21/8 – 2 fold" />
                  <ScrollCard key={`a-${idx}-7`} image={umImg} title="21/8 – 2 fold" />
                </>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Brand-Partners  */}
      <BrandPartners />

      {/* Features Section */}
      <CoreValues />
    </div>
  );
};

export default Umbrella;
