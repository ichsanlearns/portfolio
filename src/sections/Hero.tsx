import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

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

                <div className="hero-text flex flex-col justify-center relative z-10 pointer-events-none">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 mt-10">
                    Shaping
                    <span className="slide absolute pt-0 px-2 pb-[30px] h-12 translate-y-0 overflow-hidden md:px-5 md:h-[78px] md:translate-y-1">
                      <div className="overflow-hidden h-12">
                        <span className="wrapper flex flex-col animate-[wordSlider_21s_infinite_cubic-bezier(0.9,0.01,0.3,0.99)]">
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
