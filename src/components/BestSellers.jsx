import ProductCard from './ProductCard';
import img from '../assets/card-img/img.jpg'

const products = [
  {
    image: img,
    title: 'Paper Bag Samples',
    price: 94.40,
  },
  {
    image: img,
    title: 'Paper Bag Samples',
    price: 187.62,
  },
  {
    image: img,
    title: 'Paper Bag Samples',
    price: 187.62,
  },
  {
    image: img,
    title: 'Paper Bag Samples',
    price: 187.62,
  },
  
];

const BestSellers = () => {
  return (
    <section className="py-5 px-4">
      <h2 className="text-3xl text-blue-700  font-bold mb-6 text-center">Best Sellers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((item, idx) => (
          <ProductCard key={idx} {...item} />
        ))}
      </div>
    </section>
  )
}

export default BestSellers