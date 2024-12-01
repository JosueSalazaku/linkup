import React from "react";

function Page() {
  return (
    <div className="w-screen min-h-screen bg-[#0F172A] text-gray-200 flex flex-col items-center py-16 px-6 lg:px-12">
      {/* Page Title */}
      <h1 className="text-4xl font-extrabold text-[#7C3AED] mb-8">Contact Us</h1>

      {/* Contact Section */}
      <div className="w-full max-w-4xl bg-[#1E293B] rounded-lg shadow-lg p-8 flex flex-col md:flex-row gap-8">
        {/* Contact Form */}
        <div className="flex-1 flex flex-col">
          <h2 className="text-2xl font-bold text-white mb-4">Get in Touch</h2>
          <form className="flex flex-col gap-6">
            <label className="flex flex-col">
              <span className="text-gray-400">Name</span>
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 border border-gray-600 rounded-lg bg-[#1A1A2E] text-white focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-gray-400">Email</span>
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 border border-gray-600 rounded-lg bg-[#1A1A2E] text-white focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-gray-400">Message</span>
              <textarea
                placeholder="Your Message"
                rows={5}
                className="p-3 border border-gray-600 rounded-lg bg-[#1A1A2E] text-white focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
              ></textarea>
            </label>
            <button
              type="submit"
              className="bg-[#7C3AED] hover:bg-[#9F67FF] text-white font-bold py-3 px-8 rounded-full transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Map Section */}
        <div className="flex-1 flex justify-center items-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d9996.588940847743!2d4.400417621110882!3d51.21636329797412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x47c3f703a2514fe7%3A0x2747cd692cf51863!2sCentraal%20Station%2C%20Pelikaanstraat%2C%20Antwerpen!3m2!1d51.2143668!2d4.4206892!4m5!1s0x47c3f6f6e42e70ab%3A0xfbd92023bafcb872!2sOude%20Koornmarkt%2073%2C%20Antwerpen!3m2!1d51.218921699999996!2d4.400504499999999!5e0!3m2!1sen!2sus!4v1732106976935!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: "none" }}
            className="rounded-lg shadow-md"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Page;
