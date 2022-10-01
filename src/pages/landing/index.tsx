import { useNavigate } from "react-router-dom";
import "./landing.css";

function HomePage() {
  const navigate = useNavigate();
  return (
    <main className="landing bg-secondaryPurples-100 flex flex-col items-center justify-between xl:flex-row">
      <section className="landing__hero xl:order-2 xl:mb-5 xl:mr-28">
        <div className="landing__hero-heading text-center xl:text-right">
          <h1 className="text-primary-blue">Imagine if</h1>
          <h1 className="landing__hero-snap">Snapchat</h1>
          <h1 className="text-primary-blue">had events.</h1>
        </div>
        <p className="landing__hero-sub text-center xl:text-right mt-3 text-neutrals-gray-400">
          Easily host and share events with your friends across any social
          media.
        </p>
      </section>
      <img
        className="landing__image mt-10 w-[165.63px] h-[292px] sm:w-[60%] sm:h-[60%] xl:order-1"
        src="/Landing-page-image.svg"
        alt="envited-landing"
      />
      <button
        onClick={() => navigate("/create")}
        className="landing__button text-neutrals-white-100 mb-5 w-[187px] sm:w-[40%] xl:w-[20%] xl:order-2 xl:absolute xl:right-28 xl:bottom-40"
      >
        🎉 Create my event
      </button>
    </main>
  );
}

export default HomePage;
