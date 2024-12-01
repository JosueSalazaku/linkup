"use client";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export const events = [
  {
    date: "2024-12-13",
    url: "/event/dec-13",
    text: "13 December"
  },
];

export default function EventCalendar() {
  const [value, setValue] = useState<Date>(new Date());

  const handleDateClick = (date: Date) => {
    const formattedDate = formatDate(date);
    const event = events.find((event) => event.date === formattedDate);
    if (event) {
      window.location.href = event.url;
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
    <div>
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
        className="rounded-md"
      />
    </div>
  );
}
