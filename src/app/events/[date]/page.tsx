"use client";
import { useParams, useRouter } from "next/navigation";
import React from "react";

const events = [
  {
    date: "2024-12-13",
    title: "First Meetup",
    description:
      "Join us for a fun Pool session and let have some Drinks!",
    location: "Oude Koornmarkt 73, Antwerp",
    time: "6:00 PM - 8:00 PM",
  },
];

export default function EventDetailsPage() {
  const router = useRouter();
  const { date } = useParams();

  const event = events.find((event) => event.date === date);

  if (!event) {
    return (
      <div className="w-screen h-screen flex flex-col justify-center items-center bg-[#0F172A] text-gray-100">
        <h1 className="text-3xl font-bold text-red-500">No Event Found</h1>
        <button
          className="mt-4 bg-[#7C3AED] text-white py-2 px-6 rounded-md"
          onClick={() => router.push("/")}
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="w-screen min-h-screen bg-[#0F172A] text-gray-100 flex flex-col items-center py-16 px-6">
      <h1 className="text-4xl font-bold text-[#7C3AED] mb-6">{event.title}</h1>
      <p className="text-lg text-gray-300 mb-4">{event.description}</p>
      <p className="text-md text-gray-400">
        <strong>Location:</strong> {event.location}
      </p>
      <p className="text-md text-gray-400">
        <strong>Time:</strong> {event.time}
      </p>
      <button
        className="mt-6 bg-[#7C3AED] hover:bg-[#9F67FF] text-white font-bold py-3 px-8 rounded-full transition-all duration-300"
        onClick={() => router.push("/")}
      >
        Back to Home
      </button>
    </div>
  );
}
