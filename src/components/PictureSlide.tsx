"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

interface SlideshowProps {
  images: string[];
}

const Slideshow = ({ images }: SlideshowProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 5000); // 5 seconds per slide

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  useEffect(() => {
    if (currentIndex === images.length) {
      // Disable transition for seamless reset
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 1000); // Transition duration (1s) before resetting
    } else {
      setIsTransitioning(true);
    }
  }, [currentIndex, images.length]);

  return (
    <div className="absolute top-0 left-0 w-full h-screen -z-10 overflow-hidden">
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/80 z-10"></div>

      {/* Slideshow */}
      <div
        className={`absolute top-0 left-0 flex h-full transition-transform duration-1000 ${
          isTransitioning ? "ease-in-out" : ""
        }`}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          width: `${(images.length + 1) * 100}%`,
        }}
      >
        {/* Render all images plus the first image at the end */}
        {images.concat(images[0]).map((img, index) => (
          <div
            key={index}
            className="w-full h-full flex-shrink-0 relative"
            style={{ width: "100%" }}
          >
            <Image
              src={img}
              alt={`Slide ${index + 1}`}
              width={1400}
              height={800}
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
