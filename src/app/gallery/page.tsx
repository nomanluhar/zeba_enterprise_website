export default function GalleryPage() {
  return (
    <main className="min-h-screen p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">Gallery</h1>
      <p className="text-gray-700 mb-6">
        Explore some of the products we export globally, including packaging, shipments, and product showcases.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Placeholder gallery images */}
        <div className="bg-gray-300 h-48 flex items-center justify-center rounded text-gray-700">
          Image 1
        </div>
        <div className="bg-gray-300 h-48 flex items-center justify-center rounded text-gray-700">
          Image 2
        </div>
        <div className="bg-gray-300 h-48 flex items-center justify-center rounded text-gray-700">
          Image 3
        </div>
        <div className="bg-gray-300 h-48 flex items-center justify-center rounded text-gray-700">
          Image 4
        </div>
        <div className="bg-gray-300 h-48 flex items-center justify-center rounded text-gray-700">
          Image 5
        </div>
        <div className="bg-gray-300 h-48 flex items-center justify-center rounded text-gray-700">
          Image 6
        </div>
      </div>
    </main>
  );
}
