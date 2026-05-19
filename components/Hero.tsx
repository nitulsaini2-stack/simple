"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const images: string[] = ["/gym.jpg", "/gym1.jpg", "/gym2.jpg"];

  const [currentImage, setCurrentImage] = useState<number>(0);

  // Auto Slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Next Slide
  const nextSlide = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  // Previous Slide
  const prevSlide = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section
      className="relative h-[700px] w-full bg-cover bg-center flex flex-col py-20 px-6 transition-all duration-1000"
      style={{
        backgroundImage: `url(${images[currentImage]})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
       <div className="relative z-10 max-w-4xl py-20">
        {/* <div className="inline-block text-red-500 px-5 py-4 text-sm md:text-base font-semibold mb-2">
        Forge Your Legacy
        </div>  */}

      <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight font-size-1rem">
        PUSH YOUR <span className="text-red-500">LIMITS.</span>
      </h1>

      <p className="text-gray-300 text-lg md:text-xl mt-6 leading-relaxed">
        Where discipline meets results. IronCore Gym is built for those who
        refuse to settle.
      </p>

      <div className="flex gap-4 mt-8 px-10">
        <a
          href="/membership"
          className="bg-red-500 hover:bg-red-600 text-white px-8 py-3  font-semibold transition duration-300"
        >
          Join Now
        </a>

        <a
          href="/membership"
          className="border border-white text-white hover:bg-white hover:text-black px-8 py-3  font-semibold transition duration-300"
        >
          Free Trial
        </a>
        <a
          href="/membership"
          className="border border-white text-white hover:bg-white hover:text-black px-8 py-3  font-semibold transition duration-300"
        >
          Contact Us
        </a>
      </div>
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-red-500 text-white w-10 h-10 rounded-full text-xl z-20"
      >
        ❮
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-red-500 text-white w-10 h-10 rounded-full text-xl z-20"
      >
        ❯
      </button>

      {/* Main Container */}
      <div className="relative w-full h-screen">
        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-3 h-3 rounded-full ${
                currentImage === index ? "bg-red-500" : "bg-white/60"
              }`}
            ></button>
          ))}
        </div>

        {/* Right Side Stats */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 flex gap-8 z-20 text-right">
          <div>
            <h1 className="text-red-500 text-3xl font-bold text-center">500+</h1>
            <p className="text-uppercase text-gray-300">Members</p>
          </div>

          <div>
            <h1 className="text-red-500 text-3xl font-bold text-center">50+</h1>
            <p className="text-uppercase text-gray-300">Expert Trainers</p>
          </div>

          <div>
            <h1 className="text-red-500 text-3xl font-bold text-center">10K+</h1>
            <p className="text-uppercase text-gray-300">year strong</p>
          </div>
        </div>
      </div>
    </section>
  );
}
