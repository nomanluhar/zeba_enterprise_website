export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-12 py-6 text-center text-sm text-gray-600">
      <div className="container mx-auto px-4">
        <p className="font-semibold text-blue-700 mb-1">Zeba Enterprise</p>
        <p>Ahmedabad, Gujarat, India</p>
        <p>Email: info@zebaenterprise.com | Phone: +91-98765 43210</p>

        <div className="mt-2 space-x-4">
          <button className="text-blue-600 hover:underline">Facebook</button>
          <button className="text-pink-500 hover:underline">Instagram</button>
          <button className="text-blue-800 hover:underline">LinkedIn</button>
        </div>

        <p className="mt-3">&copy; {new Date().getFullYear()} Zeba Enterprise. All rights reserved.</p>
      </div>
    </footer>
  );
}
