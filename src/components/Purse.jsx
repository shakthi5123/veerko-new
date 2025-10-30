import ProductCard from '../components/ProductCard';
import img from '../assets/card-img/img.jpg'



const products = [
  {
    image: img,
    title: 'Custom Umbrella',
    price: 399,
    delay: 0
  },
  {
    image: img,
    title: 'Branded Bottle',
    price: 299,
    delay: 100
  },
  {
    image: img,
    title: 'Leather Diary',
    price: 349,
    delay: 200
  },
  {
    image: img,
    title: 'Corporate Backpack',
    price: 899,
    delay: 300
  },
  // Add more items here
];

const Purse = () => {
  return (
    <section className="py-12 px-4 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 text-center mb-10">
          Our Purses
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              title={product.title}
              price={product.price}
              delay={product.delay}
            />

          ))}
        </div>
      </div>
    </section>
  )
}

export default Purse