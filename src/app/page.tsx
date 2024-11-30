"use client";
import Slideshow from "@/components/PictureSlide";
import { Calendar } from "@/components/ui/calendar";

const images = ["/1.jpg", "/2.jpg", "/3.jpg"];

export default function Home() {
  // Highlight the 13 of Dec in the calendar
  return (
    <main className="w-screen flex flex-col justify-center items-center gap-10 px-4">
      <Slideshow images={images} />
      <section className="w-screen ">
        <h1>Upcoming Events</h1>
        <div className="flex gap-5 items-center">
       < Calendar />
        <h1>Next Upcoming event This Month: 13 December</h1>
        </div>
      </section>
      <section>
        <h1>Merch Sections</h1>
      </section>
      <div>
        Contact section
        {/* From for contac
        Add directions here */}
      </div>
    </main>
  );
}
