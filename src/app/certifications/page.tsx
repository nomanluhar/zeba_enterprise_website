export default function CertificationsPage() {
  return (
    <main className="min-h-screen p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">Certifications</h1>
      <p className="text-gray-700 mb-6">
        Zeba Enterprise is a government-recognized export company. We hold all necessary licenses and certifications required for international trade.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Placeholder for certification images */}
        <div className="bg-gray-200 h-48 flex items-center justify-center rounded text-gray-600">
          Certificate 1
        </div>
        <div className="bg-gray-200 h-48 flex items-center justify-center rounded text-gray-600">
          Certificate 2
        </div>
        <div className="bg-gray-200 h-48 flex items-center justify-center rounded text-gray-600">
          Certificate 3
        </div>
      </div>
    </main>
  );
}
