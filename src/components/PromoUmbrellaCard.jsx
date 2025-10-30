import React from "react"

const PromoUmbrellaCard = ({ image, title, text, reverse}) => {
  return (
    <div className={`flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""} items-center gap-8 md:gap-12 py-12`}>
        <div className="w-full md:w-1/3">
            <img src={image} alt="Branded Promotional Umbrella" className="max-h-[350px] object-contain rounded-xl w-full shadow-lg border " />
        </div>

        <div className="w-full md:w-2/3 px-2">
            <h2 className="text-2xl font-semibold mb-4">{title}</h2>
            <p className="text-gray-600 leading-relaxed">{text}</p>
        </div>
       



    </div>
  )
}

export default PromoUmbrellaCard