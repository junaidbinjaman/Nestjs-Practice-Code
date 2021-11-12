import { useRouter } from "next/router";
import React, { useState } from "react";

const Event = ({ eventList }) => {
  const [events, setEvents] = useState(eventList);
  const router = useRouter();

  const fetchSportsEvent = async () => {
    const responce = await fetch(
      `http://localhost:4000/events?category=sports`
    );
    const data = await responce.json();
    setEvents(data);
    router.push("/events?category=sports", undefined, { shallow: true });
  };
  return (
    <>
      <button onClick={fetchSportsEvent}>sports</button>
      <h1>List Of Events</h1>
      {events.map((event) => (
        <div key={event.id}>
          <h2>
            {event.id} {event.title} {event.date} {event.category}
          </h2>
          <p>{event.description}</p>
          <hr />
        </div>
      ))}
    </>
  );
};

export default Event;

export async function getServerSideProps(context) {
  const { query } = context;
  const { category } = query;
  const querySting = category ? "category=sports" : "";
  const responce = await fetch(`http://localhost:4000/events?${querySting}`);
  const data = await responce.json();

  return {
    props: {
      eventList: data,
    },
  };
}
