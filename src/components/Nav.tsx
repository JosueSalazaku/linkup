"use client";

import Link from "next/link";
import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { MdOutlineClose } from "react-icons/md";

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-screen h-24 flex justify-between items-center">
      <ul className="w-full flex justify-between items-center text-xl gap-4 py-4 px-10">
        {/* Left Link */}
        <li className="hidden sm:block">
          <Link href="/">LINK UP</Link>
        </li>

        {/* Center Logo */}
        <li className="absolute left-1/2 transform -translate-x-1/2 text-3xl border-2 px-8 py-4 rounded-xl">
          <Link href="/" onClick={() => setOpen(false)}>Logo</Link>
        </li>

        {/* Right Links for Large Screens */}
        <div className="hidden sm:flex gap-4">
          <li>
            <Link href="/events">Events</Link>
          </li>
          <li>
            <Link href="/findus">Find us</Link>
          </li>
          <li>
            <Link href="/shop">Shop</Link>
          </li>
        </div>

        {/* Hamburger Menu Button for Small Screens */}
        <button
          onClick={() => setOpen(!open)}
          className="block sm:hidden focus:outline-none"
        >
          {open ? <MdOutlineClose size={25} /> : <IoIosMenu size={25} />}
        </button>
      </ul>

      {/* Full-Screen Menu Dropdown for Small Screens */}
      {open && (
        <div className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center z-50">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 text-white focus:outline-none"
          >
            <MdOutlineClose size={30} />
          </button>
          <ul className="flex flex-col text-4xl gap-6">
            <li>
              <Link href="/events" onClick={() => setOpen(false)}>
                Events
              </Link>
            </li>
            <li>
              <Link href="/findus" onClick={() => setOpen(false)}>
                Find us
              </Link>
            </li>
            <li>
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
