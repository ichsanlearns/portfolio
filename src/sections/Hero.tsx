import Button from "../components/Button";
import { words } from "../constants";

function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>

      <div className="hero-layout">
        {/* Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word) => (
                      <span
                        key={word.text}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>
            <p className="text-white md:text-xl  relative z-10 xl:max-w-[50%] max-w-[20%] pointer-events-none">
              Hi, I’m Ichsan, a software development student at Purwadhika
              Bootcamp. I’m actively learning modern web technologies and enjoy
              turning ideas into functional, well-structured applications
            </p>
            <Button
              className="md:w-80 md:h-16 w-60 h-12"
              id="button"
              text="See my Work"
            />
          </div>
        </header>

        {/* 3D Model */}
        <div className="hero-3d-layout">
          <div className="border-2 border-white w-[40%] h-[60%] flex items-center justify-start pl-[2px] rounded-3xl overflow-hidden">
            <img
              className="w-[90%] h-full object-cover "
              src="/images/foto2.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
