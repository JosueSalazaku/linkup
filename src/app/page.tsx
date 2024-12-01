"use client";

import Calendar from "@/components/EventCalendar";
import { events } from "./../components/EventCalendar"

export default function Home() {
  const firstEvent = events[0];

  return (
    <main className="w-screen flex flex-col items-center">
      {/* Content */}
      <section className="w-screen h-screen flex flex-col justify-center items-center">
        <h1 className="text-white text-4xl">Welcome to Link Up</h1>
        <h1 className="text-white text-3xl">
          The place to make the right connections
        </h1>
      </section>
      <section className="w-screen lg:flex lg:flex-row md:flex md:flex-row h-[50rem] flex flex-col">
        {/* Left Block */}
        <div className="lg:w-1/2 h-full bg-lime-400 flex justify-center items-center">
          <div className="flex flex-col items-center">
            <Calendar />
          </div>
        </div>

        {/* Right Block */}
        <div className="lg:w-1/2 h-full bg-black flex justify-center items-center">
          <div className="text-white text-center text-2xl">
            <h1>Next Upcoming Event This Month:</h1>
            <p className="mt-4 text-4xl font-bold">{firstEvent.text}</p>
          </div>
        </div>
      </section>

      <section className="w-screen p-8 bg-gray-200">
        <h1 className="text-xl font-bold">Merch Section</h1>
      </section>

      <section className="w-screen p-8 bg-gray-300">
        <h1 className="text-xl font-bold">Contact Section</h1>
        <p>Add directions and a form for contact here</p>
      </section>
    </main>
  );
}
