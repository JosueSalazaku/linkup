"use client";
import Slideshow from "@/components/PictureSlide";
import { Calendar } from "@/components/ui/calendar";

// const images = ["/1.jpg", "/2.jpg", "/3.jpg"];

export default function Home() {
  return (
    <main className="relative w-screen flex flex-col items-center">
      {/* Slideshow Positioned Directly Below the Nav */}
      <div className="absolute top-0 left-0 bg- w-full h-screen z-[-10]">
      <Slideshow images={["/1.jpg", "/2.jpg", "/3.jpg"]} />
      </div>

      {/* Content */}
      <section className="w-screen h-screen flex flex-col justify-center items-center">
        <h1 className="text-white text-4xl">Welcome to Link Up</h1>
        <h1 className="text-white text-3xl">The place to make the right connections</h1>
      </section>

      <section className="w-screen h-[30rem] bg-gray-100">
        <h1 className="text-4xl font-bold p-6">Upcoming Events</h1>
        <div className="flex items-center mt-4">
          <div className="border h-[20rem] w-1/2">
          <Calendar />
          </div>
          <div className="border h-[20rem] w-1/2 items-center">
          <h1>Next Upcoming Event This Month: 13 December</h1>
          </div>
        </div>
      </section>

      <section className="w-screen p-8 bg-gray-200">
        <h1 className="text-xl font-bold">Merch Section</h1>
      </section>

      <div className="w-screen p-8 bg-gray-300">
        <h1 className="text-xl font-bold">Contact Section</h1>
        <p>Add directions and a form for contact here</p>
      </div>
    </main>
  );
}
