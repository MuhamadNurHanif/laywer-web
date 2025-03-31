"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const partners = [
  { id: 1, name: 'Partner 1', image: '/partner1.jpg' },
  { id: 2, name: 'Partner 2', image: '/partner2.jpg' },
  { id: 3, name: 'Partner 3', image: '/partner3.jpg' },
  { id: 4, name: 'Partner 4', image: '/partner4.jpg' },
];

const PartnerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % partners.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Organisasi Advokat - Kami & Partner</h2>
        <div className="relative h-64 overflow-hidden">
          {partners.map((partner, index) => (
            <div
              key={partner.id}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 flex justify-center
                ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            >
              <Image 
                src={partner.image} 
                alt={partner.name} 
                width={300} 
                height={200} 
                className="rounded-lg shadow-lg"
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          {partners.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full mx-1
                ${index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerSlider;
