"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

interface SlideshowProps {
  images: string[];
}

const Slideshow = ({ images }: SlideshowProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically transition slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5 seconds per slide

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <div className="absolute top-0 left-0 w-full h-screen -z-10 overflow-hidden">
      {/* Background Slideshow */}
      <div
        className="absolute top-0 left-0 w-full h-full flex transition-transform duration-1000"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            fill
            className="object-cover"
            priority
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
