import React from "react";

function Page() {
  return (
    <div className="w-screen min-h-screen bg-[#0F172A] text-gray-200 flex flex-col items-center py-16 px-6">
      {/* Page Title */}
      <h1 className="text-4xl font-extrabold text-[#7C3AED] mb-8">Shop</h1>

      {/* Content */}
      <div className="w-full max-w-4xl bg-[#1E293B] rounded-lg shadow-lg p-8 flex flex-col items-center text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          No Merchandise Available Yet
        </h2>
        <p className="text-gray-400 mb-6">
          Stay tuned! We’re working on exclusive Link Up merchandise. Be the
          first to know when it drops.
        </p>

        {/* Call to Action */}
        <form className="w-full max-w-md flex flex-col  gap-4 items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 border border-[#7C3AED] rounded-lg bg-[#1A1A2E] text-white focus:outline-none focus:ring-2 focus:ring-[#7C3AED] w-full"
          />
          <button
            type="submit"
            className="bg-[#7C3AED] hover:bg-[#9F67FF] text-white font-bold py-3 px-6 rounded-full transition duration-300 w-full"
          >
            Notify Me
          </button>
        </form>
      </div>
    </div>
  );
}

export default Page;
