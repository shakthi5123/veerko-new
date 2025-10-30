

// const ProductCard = ({image, title, price, delay = 0}) => {
//   return (
//     <div className="rounded-lg p-4 border border-gray-200 flex flex-col items-center justify-center shadow hover:shadow-2xl transition" data-aos="fade-up" data-aos-delay={delay}>
//         <img src={image} alt="" className="w-full h-60 object-contain bg-[#F6F6F6] mb-4 transform transition duration-300 ease-in-out group-hover:scale-110" />
//         <h3 className='text-lg font-semibold text-center'>{title}</h3>
//         <p className='text-centre text-gray-600 mt-2'>
//             <span className="font-bold text-black">₹{price}</span>
//         </p>
//     </div>
//   )
// }

// export default ProductCard


// new 
const ProductCard = ({ image, title, specs, delay = 0 }) => {
  return (
    <div 
      className="min-w-[280px] rounded-lg p-4 border border-gray-200 flex flex-col items-center justify-center shadow hover:shadow-2xl transition" 
      data-aos="fade-up" 
      data-aos-delay={delay}
    >
      <img 
        src={image} 
        alt={title} 
        className="w-full h-60 object-contain bg-[#F6F6F6] mb-4 transform transition duration-300 ease-in-out hover:scale-110" 
      />
      <h3 className='text-lg font-semibold text-center'>{title}</h3>
      <p className='text-center text-gray-600 mt-2'>{specs}</p>
    </div>
  );
};

export default ProductCard;