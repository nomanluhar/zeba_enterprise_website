import HeroSlider from '@/components/HeroSlider';
import Link from 'next/link';

export const metadata = {
  title: 'Zeba Enterprise | Import Export Company in India',
  description:
    'Zeba Enterprise specializes in exporting garments, spices, electronics, and more from India to global markets.',
};

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Slider with Overlay */}
      <section className="relative h-[500px] w-full overflow-hidden">
        <HeroSlider />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Zeba Enterprise</h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Your Trusted Import & Export Partner — Delivering Quality from India to the World
          </p>
        </div>
      </section>

      {/* About / Welcome Section */}
      <section className="max-w-4xl mx-auto py-12 text-center px-4">
        <h2 className="text-2xl font-bold text-sky-100 mb-4">Who We Are</h2>
        <p className="text-gray-700 mb-4">
          Zeba Enterprise is a leading import-export company from Ahmedabad, India. We deal in garments, food items, electronics, furniture, and many more quality Indian products for the global market.
        </p>
        <Link href="/about" className="text-blue-600 underline font-medium">
          Learn more about us →
        </Link>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 py-12 px-6">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h2 className="text-2xl font-bold text-white-700">Why Choose Us</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left list-disc list-inside text-gray-700">
            <li>Wide product range with export-grade quality</li>
            <li>Ethical, transparent business practices</li>
            <li>Fast and secure global delivery</li>
            <li>Affordable pricing and flexible MOQ</li>
            <li>Custom labeling and packaging options</li>
            <li>Experienced support team</li>
          </ul>
        </div>
      </section>

      {/* Product Categories */}
      <section className="max-w-6xl mx-auto py-12 px-4 text-center">
        <h2 className="text-2xl font-bold text-blue-700 mb-6">Explore Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'Garments', link: '/products/garments' },
            { name: 'Food Items', link: '/products/food' },
            { name: 'Electronics', link: '/products/electronics' },
            { name: 'Stationery', link: '/products/stationery' },
            { name: 'Agricultural', link: '/products/agriculture' },
            { name: 'Furniture', link: '/products/furniture' },
          ].map((item, idx) => (
            <Link
              key={idx}
              href={item.link}
              className="p-6 border rounded shadow hover:shadow-md transition text-left"
            >
              <h3 className="text-lg font-semibold text-blue-800">{item.name}</h3>
              <p className="text-sm text-gray-600 mt-2">Click to explore</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-blue-50 py-12 text-center px-4">
        <h2 className="text-2xl font-bold text-blue-700 mb-6">What Our Clients Say</h2>
        <div className="max-w-4xl mx-auto space-y-6 text-gray-700">
          <blockquote className="italic">“Zeba Enterprise provided quality school uniforms with perfect packaging and timely delivery.”</blockquote>
          <blockquote className="italic">“Their spices and food items are always fresh and loved by our customers overseas.”</blockquote>
        </div>
      </section>
    </main>
  );
}
