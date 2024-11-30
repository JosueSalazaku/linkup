"use client";

import { useRouter } from "next/navigation";
import { Calendar } from "@/components/ui/calendar";

const EventCalendar = () => {
  const router = useRouter();

  const handleDateClick = (selectedDate: Date) => {
    // Format date to yyyy-mm-dd for URL
    const formattedDate = selectedDate.toISOString().split("T")[0];
    router.push(`/events/${formattedDate}`);
  };

  return (
    <div className="p-4">
      <Calendar
        mode="single"
        onSelect={(date) => handleDateClick(date as Date)}
      />
    </div>
  );
};

export default EventCalendar;
