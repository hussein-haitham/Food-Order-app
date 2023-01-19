import resImage from "../assests/res-image.jpg";
function Hero() {
  return (
    <section>
      <div
        className="hero h-auto"
        style={{ backgroundImage: `url(${resImage})` }}
      >
        <div className="hero-overlayshadow bg-opacity-50"></div>
        <div className="hero-content text-center text-white">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Shrimp roll</h1>
            <p className="mb-5">
              Laboris nostrud mollit ex minim adipisicing ea.
            </p>
            <button className="btn btn-secondary">Order now</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
