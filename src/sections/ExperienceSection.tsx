import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { expCards } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

gsap.registerPlugin(ScrollTrigger);

// Experience-specific styles
const experienceStyles = `
  .exp-card-wrapper {
    display: flex;
    flex-direction: column-reverse;
    gap: 2.5rem;
    justify-content: space-between;
  }
  
  @media (min-width: 1280px) {
    .exp-card-wrapper {
      flex-direction: row;
      gap: 5rem;
    }
  }
  
  .timeline-wrapper {
    position: absolute;
    top: 0;
    left: 1.25rem;
    height: 100%;
    display: flex;
    justify-content: center;
  }
  
  @media (min-width: 768px) {
    .timeline-wrapper {
      left: 2.5rem;
    }
  }
  
  @media (min-width: 1280px) {
    .timeline-wrapper {
      left: 35.5vw;
    }
  }
  
  .timeline {
    position: absolute;
    z-index: 30;
    height: 110%;
    top: -2.5rem;
    width: 3.5rem;
    background-color: black;
  }
  
  @media (min-width: 768px) {
    .timeline {
      width: 7rem;
    }
  }
  
  .gradient-line {
    width: 2px;
    background: linear-gradient(
      0deg,
      rgba(69, 222, 196, 0) 0%,
      #62e0ff 25%,
      #52aeff 37.51%,
      #fd5c79 62.83%,
      #6d45ce 92.91%
    );
  }
  
  .timeline-logo {
    width: 2.5rem;
    height: 2.5rem;
    flex: none;
    border-radius: 9999px;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(-1.75rem);
    border: 1px solid #1c1c21;
    background-color: #0e0e10;
  }
  
  @media (min-width: 768px) {
    .timeline-logo {
      width: 5rem;
      height: 5rem;
      transform: translateY(-1.75rem);
    }
  }
`;

const Experience = () => {
  useGSAP(() => {
    gsap.utils.toArray<HTMLElement>(".timeline-card").forEach((card) => {
      gsap.from(card, {
        xPercent: -100,
        opacity: 0,

        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
      });
    });

    gsap.to(".timeline", {
      transformOrigin: "bottom bottom",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "70% center",
        onUpdate: (self) => {
          gsap.to(".timeline", {
            scaleY: 1 - self.progress,
          });
        },
      },
    });

    gsap.utils.toArray<HTMLElement>(".expText").forEach((text) => {
      gsap.from(text, {
        opacity: 0,
        xPercent: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: text,
          start: "top 100%",
        },
      });
    }, "<");
  }, []);

  return (
    <>
      <style>{experienceStyles}</style>
      <section
        id="experience"
        className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
      >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader title="Experience" sub="💼 My Experience Overview" />
        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {expCards.map((card) => (
              <div key={card.title} className="exp-card-wrapper">
                <div className="xl:w-2/6">
                  <GlowCard card={card}>
                    <div className="bg-gray-500 w-full h-20 rounded-2xl">
                      <img
                        className="object-contain w-full h-full"
                        src={card.imgPath}
                        alt="exp-img"
                      />
                    </div>
                  </GlowCard>
                </div>
                <div className="xl:w-4/6">
                  <div className="flex items-start">
                    <div className="timeline-wrapper">
                      <div className="timeline" />
                      <div className="gradient-line w-1 h-full" />
                    </div>
                    <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                      <div className="timeline-logo">
                        <img src={card.logoPath} alt="logo" />
                      </div>
                      <div>
                        <h1 className="font-semibold text-3xl">{card.title}</h1>
                        <p className="my-5 text-white-50">
                          🗓️&nbsp;{card.date}
                        </p>
                        <p className="text-[#839CB5] italic">
                          Responsibilities
                        </p>
                        <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                          {card.responsibilities.map(
                            (responsibility, index) => (
                              <li key={index} className="text-lg">
                                {responsibility}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Experience;
