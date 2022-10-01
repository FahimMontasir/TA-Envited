import EventBox from "./components/EventBox";
import "./event.css";

function Event() {
  return (
    <main className="event bg-neutrals-white-100 flex flex-col items-center">
      <img
        className="event__image"
        src="/Birthday-cake.png"
        alt="envited-event"
      />
      <div className="event__title py-2 text-left mt-2 ">
        <h1 className="event__title-name text-primary-blue">Birthday Bash</h1>
        <p className="event__title-host text-neutrals-gray-300">
          Hosted by Elysia
        </p>
      </div>
      <EventBox
        title="18 August 6:00PM"
        subtitle="to 19 August 1:00PM UTC +10"
        calender
      />
      <EventBox title="Street name" subtitle="Suburb, State, Postcode" />
    </main>
  );
}

export default Event;
