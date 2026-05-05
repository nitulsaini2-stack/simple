"use client";

import { useEffect, useState } from "react";

const banners = [
  {
    id: 1,
    title: "Big Sale is Live 🔥",
    desc: "Up to 50% off on all products",
    image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg",
  },
  {
    id: 2,
    title: "Latest Gadgets",
    desc: "Explore new tech arrivals",
    image: "https://images.pexels.com/photos/18105/pexels-photo.jpg",
  },
  {
    id: 3,
    title: "Upgrade Your Setup",
    desc: "Best laptops & accessories",
    image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg",
  },
];

export default function CarouselBanner() {
  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-xl mb-6">

      {/* Slides */}
      {banners.map((banner, i) => (
        <div
          key={banner.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={banner.image}
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              {banner.title}
            </h2>
            <p className="text-gray-200 mb-4">{banner.desc}</p>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2.5 h-2.5 rounded-full ${
              i === index ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}