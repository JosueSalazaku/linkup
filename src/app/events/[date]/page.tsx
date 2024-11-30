// import { useRouter } from "next/router";

export default function EventPage({ params }: { params: { date: string } }) {
  const { date } = params;

  // Fetch event data for the specific date (e.g., from an API or database)
  // Example static data:
  const events: { [key: string]: { title: string; description: string } } = {
    "2024-11-29": { title: "Event 1", description: "Details about Event 1" },
    "2024-12-01": { title: "Event 2", description: "Details about Event 2" },
  };

  const event = events[date] || null;

  if (!event) {
    return <div>No events scheduled for {date}</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">{event.title}</h1>
      <p>{event.description}</p>
    </div>
  );
}
