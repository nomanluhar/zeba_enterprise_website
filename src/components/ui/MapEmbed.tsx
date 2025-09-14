"use client";

import React from "react";

const MapEmbed = () => {
  return (
    <div className="w-full h-96 rounded-lg overflow-hidden shadow-md">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3672.1869547912625!2d72.58303602605476!3d23.016906829177806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1smasjid%20manjil%20khatkivad%20khamasah%20jamalpur%20380001%20Ahmedabad%20india!5e0!3m2!1sen!2sin!4v1757827757837!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapEmbed;
