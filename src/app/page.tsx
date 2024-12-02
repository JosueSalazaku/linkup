"use client";
import Calendar from "@/components/EventCalendar";
import { events } from "./../components/EventCalendar";
import Link from "next/link";

export default function Home() {
  const firstEvent = events[0];

  return (
    <main className="w-screen flex flex-col items-center bg-custom-meeting bg-cover bg-center text-gray-100 font-sans">
      {/* Welcome Section */}
      <section
        id="meeting-section"
        className="w-screen h-screen flex flex-col justify-center items-center bg-[url('/Meeting.jpg')] bg-cover bg-center relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[#090E1A]/90" />
        <div className="flex flex-col items-center text-center relative z-10">
          <h1 className="text-[#E2E8F0] font-extrabold text-5xl lg:text-7xl">
            Welcome to Link Up
          </h1>
          <p className="text-[#94A3B8] text-xl mt-4 max-w-3xl">
            The ultimate platform for developers to connect, collaborate, and grow.
          </p>
          <Link href={"/contact"} className="mt-6 bg-[#7C3AED] text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-[#9F67FF] transition-all duration-300">
            Join
          </Link>
        </div>
      </section>

      {/* About Us Section */}
      <section className="w-screen bg-[#0F172A] py-16 px-8 lg:px-16 text-center">
        <h2 className="text-4xl font-extrabold text-[#7C3AED] mb-8">About Us</h2>
        <p className="text-lg text-[#94A3B8] max-w-3xl mx-auto">
          At <span className="text-[#9F67FF] font-bold">Link Up</span>, we believe in creating a space
          where aspiring developers can come together, connect, and grow while having fun along the way.
          Learning to become a developer can be challenging and often feels like a lonely journey, but it
          doesn’t have to be that way.  
          <br />
          <br />
          Whether you&apos;re here to share your knowledge, build lasting friendships, or simply find support
          from others on the same path, <span className="text-[#9F67FF] font-bold">Link Up</span> is your home
          for collaboration, inspiration, and community. Together, we’re making the developer journey less
          daunting and a lot more exciting.
        </p>
      </section>

      {/* Calendar and Event Section */}
      <section className="w-screen flex flex-col lg:flex-row gap-4 bg-primaryDark py-16 px-8 lg:px-16">
        {/* Shared Card Styles */}
        <div className="w-full max-w-4xl flex lg:flex-row flex-col gap-4 mx-auto">
          <div className="flex-1 flex justify-center items-center bg-[#1E293B] rounded-lg shadow-md p-6 min-h-[400px]">
            <Calendar />
          </div>
          <div className="flex-1 flex flex-col justify-center items-center bg-[#1E293B] rounded-lg shadow-md p-6 min-h-[400px]">
            <h2 className="text-[#7C3AED] text-2xl font-semibold">Next Upcoming Event:</h2>
            <p className="text-white text-4xl font-bold mt-4 hover:underline">{firstEvent.text}</p>
            <button className="mt-6 bg-[#7C3AED] text-white py-3 px-8 rounded-full hover:bg-[#9F67FF] transition-all duration-300">
              View Event
            </button>
          </div>
        </div>
      </section>

      {/* Merch Section */}
      <section className="w-screen flex flex-col justify-center items-center bg-[#0F172A] py-16 px-8 lg:px-16">
        <h1 className="text-4xl font-extrabold text-[#9F67FF]">Exclusive Merch Coming Soon</h1>
        <p className="mt-4 text-lg text-[#94A3B8] max-w-2xl text-center">
          Subscribe to our newsletter and be the first to know when our exclusive merchandise launches.
        </p>
        <form
          action="https://formsubmit.co/josuesalazaku@gmail.com"
          method="POST"
          className="mt-6 flex flex-col gap-4 w-96"
        >
          <label className="flex flex-col flex-1">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="p-3 border border-[#9F67FF] rounded-lg bg-[#1A1A2E] text-white focus:outline-none focus:ring-2 focus:ring-[#7C3AED] "
            />
          </label>
          <button
            type="submit"
            className="bg-[#7C3AED] hover:bg-[#9F67FF] text-white font-bold py-3 px-8 rounded-full transition-all duration-300"
          >
            Subscribe
          </button>
        </form>
      </section>

      {/* Contact Section */}
      <section className="w-screen flex justify-center items-center bg-primaryDark py-16 px-8 lg:px-16">
        <div className="w-full max-w-4xl flex lg:flex-row flex-col gap-4">
          {/* Map Section */}
          <div className="flex-1 bg-[#1E293B] rounded-lg shadow-md p-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d9996.588940847743!2d4.400417621110882!3d51.21636329797412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x47c3f703a2514fe7%3A0x2747cd692cf51863!2sCentraal%20Station%2C%20Pelikaanstraat%2C%20Antwerpen!3m2!1d51.2143668!2d4.4206892!4m5!1s0x47c3f6f6e42e70ab%3A0xfbd92023bafcb872!2sOude%20Koornmarkt%2073%2C%20Antwerpen!3m2!1d51.218921699999996!2d4.400504499999999!5e0!3m2!1sen!2sus!4v1732106976935!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: "none" }}
              loading="lazy"
              className="rounded-lg shadow-md"
            ></iframe>
          </div>
          {/* Contact Form Section */}
          <div className="flex-1 bg-[#1E293B] rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-[#7C3AED] mb-4">Contact Us</h2>
            <form
              action="https://formsubmit.co/josuesalazaku@gmail.com"
              method="POST"
              className="flex flex-col gap-6"
            >
              <label className="flex flex-col">
                <span className="text-gray-400">Name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="p-3 border border-gray-600 rounded-lg bg-[#1A1A2E] text-white focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-gray-400">Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="p-3 border border-gray-600 rounded-lg bg-[#1A1A2E] text-white focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-gray-400">Message</span>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  required
                  className="p-3 border border-gray-600 rounded-lg bg-[#1A1A2E] text-white focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
                ></textarea>
              </label>
              <button
                type="submit"
                className="bg-[#7C3AED] hover:bg-[#9F67FF] text-white font-bold py-3 px-8 rounded-full transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
