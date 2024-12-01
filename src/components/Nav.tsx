"use client";
import Link from "next/link";
import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { MdOutlineClose } from "react-icons/md";

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full h-24 z-10 flex justify-between items-center shadow-lg">
      <ul className="w-full flex justify-between text-gray-200 items-center text-lg lg:text-xl gap-4 py-4 px-8 lg:px-12">
        {/* Left Link */}
        <li className="hidden sm:block hover:text-[#7C3AED] transition duration-300">
          <Link href="/events">Events</Link>
        </li>

        {/* Center Logo */}
        <li className="absolute left-1/2 transform -translate-x-1/2 text-2xl lg:text-3xl font-extrabold text-[#7C3AED]">
          <Link href="/" onClick={() => setOpen(false)}>
            LINK UP
          </Link>
        </li>

        {/* Right Links for Large Screens */}
        <div className="hidden sm:flex gap-6">
          <li className="hover:text-[#7C3AED] transition duration-300">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="hover:text-[#7C3AED] transition duration-300">
            <Link href="/shop">Shop</Link>
          </li>
        </div>

        {/* Hamburger Menu Button for Small Screens */}
        <button
          onClick={() => setOpen(!open)}
          className="block sm:hidden focus:outline-none text-gray-200 hover:text-[#7C3AED] transition duration-300"
        >
          {open ? <MdOutlineClose size={25} /> : <IoIosMenu size={25} />}
        </button>
      </ul>

      {/* Full-Screen Menu Dropdown for Small Screens */}
      {open && (
        <div className="fixed inset-0 bg-[#1E293B] text-gray-100 flex flex-col items-center justify-center z-50">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 text-gray-200 hover:text-[#7C3AED] focus:outline-none transition duration-300"
          >
            <MdOutlineClose size={30} />
          </button>
          <ul className="flex flex-col text-4xl gap-12">
            <li className="hover:text-[#7C3AED] transition duration-300">
              <Link href="/events" onClick={() => setOpen(false)}>
                Events
              </Link>
            </li>
            <li className="hover:text-[#7C3AED] transition duration-300">
              <Link href="/contact" onClick={() => setOpen(false)}>
                Contact
              </Link>
            </li>
            <li className="hover:text-[#7C3AED] transition duration-300">
              <Link href="/shop" onClick={() => setOpen(false)}>
                Shop
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Nav;
