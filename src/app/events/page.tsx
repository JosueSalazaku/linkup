import React from "react";

function Page() {
  return (
    <div className="w-screen min-h-screen bg-[#0F172A] text-gray-200 flex flex-col items-center py-16">
      {/* Page Title */}
      <h1 className="text-4xl font-extrabold text-[#7C3AED] mb-8">
        Upcoming Events
      </h1>

      {/* Events Section */}
      <section className="w-full max-w-7xl flex flex-col gap-8 px-6 lg:px-12">
        {/* Event Card 1 */}
        <div className="bg-[#1E293B] p-6 rounded-lg shadow-lg flex flex-col md:flex-row gap-6 hover:shadow-xl transition-shadow duration-300">
          <div className="w-full md:w-1/3 h-40 bg-[#7C3AED]/30 rounded-lg flex items-center justify-center text-white text-lg font-semibold">
            Event Image
          </div>
          <div className="flex flex-col justify-between">
            <h2 className="text-2xl font-bold text-white">December 13, 2024</h2>
            <p className="text-gray-400 mt-4">
              Join us for an amazing event where developers connect, learn, and
              collaborate. Don&apos;t miss out!
            </p>
            <button className="mt-4 bg-[#7C3AED] hover:bg-[#9F67FF] text-white font-semibold py-2 px-6 rounded-full transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page;
