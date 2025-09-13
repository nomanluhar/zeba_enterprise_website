import React from "react";
import Image from "next/image";

const people = [
  {
    name: "Maiyuddin Ansari",
    qualification: "MBA, International Business",
    image: "/images/hero-page-sliders/hero-1.jpg",
    position: "Managing Director",
    info: "Expert in global trade, strategic leadership."
  }
];

const KeyPersonPage = () => (
  <div className="min-h-screen py-16 bg-white">
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
      <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">Key Persons</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {people.map((person, idx) => (
          <div key={idx} className="bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center p-6">
            <div className="w-28 h-28 mb-4 relative rounded-full overflow-hidden">
              <Image src={person.image} alt={person.name} fill className="object-cover" />
            </div>
            <h2 className="font-semibold text-lg text-gray-900 mb-1 text-center">{person.name}</h2>
            <div className="text-primary font-medium mb-1 text-center">{person.position}</div>
            <div className="text-gray-600 text-sm mb-1 text-center">{person.qualification}</div>
            <p className="text-gray-600 text-xs text-center">{person.info}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default KeyPersonPage;
