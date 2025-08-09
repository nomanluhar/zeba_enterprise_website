export default function ContactPage() {
  return (
    <main className="min-h-screen p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">Contact Us</h1>
      <p className="text-gray-700 mb-6">
        Feel free to reach out to us for export inquiries, partnerships, or any questions.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">Contact Details</h2>
          <p className="text-gray-700">📍 Address: Ahmedabad, Gujarat, India</p>
          <p className="text-gray-700">📞 Phone: +91-98765 43210</p>
          <p className="text-gray-700">📧 Email: info@zebaenterprise.com</p>
          <div className="mt-4 space-x-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded">Facebook</button>
            <button className="bg-pink-500 text-white px-4 py-2 rounded">Instagram</button>
            <button className="bg-blue-800 text-white px-4 py-2 rounded">LinkedIn</button>
          </div>
        </div>

        <form
          action="https://formspree.io/f/mgvzvgdg"
          method="POST"
          className="space-y-4"
        >
          <div>
            <label className="block font-medium">Name</label>
            <input name="name" type="text" required className="w-full border border-gray-300 rounded px-3 py-2" />
          </div>
          <div>
            <label className="block font-medium">Email</label>
            <input name="email" type="email" required className="w-full border border-gray-300 rounded px-3 py-2" />
          </div>
          <div>
            <label className="block font-medium">Message</label>
            <textarea name="message" rows={4} required className="w-full border border-gray-300 rounded px-3 py-2" />
          </div>
          <button type="submit" className="bg-blue-700 text-white px-6 py-2 rounded">
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}
