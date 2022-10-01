import { useNavigate } from "react-router-dom";
import "./landing.css";

function HomePage() {
  const navigate = useNavigate();
  return (
    <main className="landing bg-secondaryPurples-100 flex flex-col items-center justify-between">
      <section className="landing__hero">
        <div className="landing__hero-heading text-center">
          <h1 className="text-primary-blue">Imagine if</h1>
          <h1 className="landing__hero-snap">Snapchat</h1>
          <h1 className="text-primary-blue">had events.</h1>
        </div>
        <p className="landing__hero-sub text-center mt-3 text-neutrals-gray-400">
          Easily host and share events with your friends across any social
          media.
        </p>
      </section>
      <img
        className="landing__image mt-10"
        src="/Landing-page-image.svg"
        alt="envited-landing"
      />
      <button
        onClick={() => navigate("/create")}
        className="landing__button text-neutrals-white-100 mb-5"
      >
        🎉 Create my event
      </button>
    </main>
  );
}

export default HomePage;
