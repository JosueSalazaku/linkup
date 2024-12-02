"use client";

import React, { useState } from "react";
import Calendar from "react-calendar";
import { useRouter } from "next/navigation"; // Import useRouter
import "react-calendar/dist/Calendar.css";

export const events = [
  {
    date: "2024-12-13",
    url: "/events/2024-12-13",
    text: "13 December",
  },
];

export default function EventCalendar() {
  const [value, setValue] = useState<Date>(new Date());
  const router = useRouter(); // Make sure useRouter is used within a client component

  const handleDateClick = (date: Date) => {
    const formattedDate = formatDate(date);
    const event = events.find((event) => event.date === formattedDate);
    if (event) {
      router.push(event.url); // Use router.push instead of window.location.href
    } else {
      alert("No events on this date!");
    }
  };

  const formatDate = (date: Date) => {
    const adjustedDate = new Date(
      date.getTime() - date.getTimezoneOffset() * 60000
    );
    return adjustedDate.toISOString().split("T")[0];
  };

  return (
    <div className="bg-[#1E293B] rounded-lg shadow-md p-6">
      <Calendar
        onChange={(value) => setValue(value as Date)}
        value={value}
        onClickDay={handleDateClick}
        tileClassName={({ date }) => {
          const formattedDate = formatDate(date);
          const isEvent = events.some((event) => event.date === formattedDate);
          return isEvent ? "highlight" : null;
        }}
        locale="en-GB"
        className="react-calendar-custom"
      />
    </div>
  );
}
