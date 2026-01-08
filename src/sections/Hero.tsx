import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const heroStyles = `
  .hero-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 10;
    pointer-events: none;
  }
  
  .hero-text .slide {
    position: absolute;
    padding-top: 0;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-bottom: 30px;
    height: 48px;
    transform: translateY(0);
    overflow: hidden;
  }
  
  @media (min-width: 768px) {
    .hero-text .slide {
      padding-left: 1.25rem;
      padding-right: 1.25rem;
      height: 78px;
      transform: translateY(4px);
    }
  }
  
  .hero-text .wrapper {
    display: flex;
    flex-direction: column;
    animation: wordSlider 21s infinite cubic-bezier(0.9, 0.01, 0.3, 0.99);
  }
  
  @keyframes wordSlider {
    0% { transform: translateY(0.5%); }
    12.5% { transform: translateY(-12.5%); }
    25% { transform: translateY(-25%); }
    37.5% { transform: translateY(-37.5%); }
    50% { transform: translateY(-50%); }
    62.5% { transform: translateY(-62.5%); }
    75% { transform: translateY(-75%); }
    87.5% { transform: translateY(-87.5%); }
  }
`;

function Hero() {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <>
      <style>{heroStyles}</style>
      <section
        id="hero"
        className="relative overflow-hidden min-h-screen flex flex-col"
      >
        <div className="absolute top-0 left-0 z-0 w-full h-full opacity-30">
          <img
            src="/images/bg.png"
            alt="background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 flex-1 flex items-center justify-center px-5 md:px-10 lg:px-20 py-20 md:py-32">
          <div className="w-full max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="flex flex-col gap-6 md:gap-8 text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
                  Muhammad Ichsanudin
                </h1>

                <h2 className="text-xl md:text-2xl lg:text-3xl text-white-50 font-medium">
                  Full-Stack Web Developer
                </h2>

                <div className="hero-text">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 mt-10">
                    Shaping
                    <span className="slide">
                      <div className="overflow-hidden h-12">
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
                      </div>
                    </span>
                  </h1>
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
                    into Real Projects
                  </h1>
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
                    that Deliver Results
                  </h1>
                </div>

                <p className="text-base md:text-lg lg:text-xl text-white-50 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Hi, I'm Ichsan, a software development student at Purwadhika
                  Bootcamp. I'm actively learning modern web technologies and
                  enjoy turning ideas into functional, well-structured
                  applications.
                </p>

                <div className="flex justify-center lg:justify-start pt-2">
                  <Button
                    className="md:w-80 md:h-16 w-60 h-12"
                    id="button"
                    text="View Portfolio"
                  />
                </div>
              </div>

              <div className="flex justify-center lg:justify-end">
                <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                  <div className="absolute inset-0 border-2 border-white-50 rounded-3xl transform rotate-3"></div>
                  <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-black-100 shadow-2xl">
                    <img
                      className="w-full h-full object-cover"
                      src="/images/foto2.jpg"
                      alt="Muhammad Ichsanudin - Full-Stack Web Developer"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <AnimatedCounter />
      </section>
    </>
  );
}

export default Hero;
