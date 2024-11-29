"use client";
import Image from "next/image";
import { useState } from "react";

const images = [
  "/1.jpg",
  "/2.jpg",
  "/3.jpg",
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <main className="w-screen flex flex-col justify-center items-center px-4">
      <h1 className="text-3xl sm:text-4xl text-center mt-6">Welcome to Link Up</h1>
      <section className="w-full flex flex-col justify-center items-center mt-8 gap-6">
        {/* Slideshow */}
        <div className="relative w-full max-w-3xl overflow-hidden">
          <div
            className="w-full h-[400px] flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`Slide ${index + 1}`}
                width={1200} // Adjust this to the actual image width
                height={800} // Adjust this to the actual image height
                className="w-full h-full object-cover"
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2"
          >
            ❮
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2"
          >
            ❯
          </button>
        </div>
        {/* Indicator Dots */}
        <div className="flex gap-2">
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 rounded-full cursor-pointer ${
                currentIndex === index ? "bg-gray-800" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </section>
    </main>
  );
}
