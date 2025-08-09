import Link from 'next/link';

const productCategories = [
  { name: 'Garments & Textiles', path: '/products/garments' },
  { name: 'Leather Products', path: '/products/leather' },
  { name: 'Furniture', path: '/products/furniture' },
  { name: 'Imitation Jewellery', path: '/products/jewellery' },
  { name: 'Handicrafts', path: '/products/handicrafts' },
  { name: 'Copper & Brass Items', path: '/products/metals' },
  { name: 'Packaging Products', path: '/products/packaging' },
  { name: 'Food Products', path: '/products/food' },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {productCategories.map((item, index) => (
          <Link
            key={index}
            href={item.path}
            className="block p-6 rounded-lg shadow hover:shadow-md bg-white border border-gray-200 hover:border-blue-500 transition duration-200"
          >
            <h2 className="text-xl font-semibold text-blue-700">{item.name}</h2>
          </Link>
        ))}
      </div>
    </main>
  );
}
