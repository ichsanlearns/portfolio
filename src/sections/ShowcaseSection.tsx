import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TitleHeader from "../components/TitleHeader";
import { portfolioProjects } from "../constants";

gsap.registerPlugin(ScrollTrigger);

function ShowcaseSection() {
  const sectionRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );
  }, []);

  return (
    <>
      <section
        id="work"
        ref={sectionRef}
        className="flex justify-center items-center px-5 md:px-10 md:mt-40 mt-20 min-h-screen max-h-screen flex-col"
      >
        <div className="w-full max-w-7xl mx-auto px-5 md:px-10 lg:px-20 flex-1 flex flex-col overflow-hidden">
          <TitleHeader title="Portfolio" sub="💼 My Recent Work" />

          <div className="mt-8 md:mt-12 flex-1 overflow-y-auto pb-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {portfolioProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-black-200 border border-black-50 rounded-xl overflow-hidden hover:border-white-50 transition-all duration-300 cursor-pointer group"
                  onClick={() =>
                    setSelectedProject(
                      selectedProject === project.id ? null : project.id
                    )
                  }
                >
                  <div className="relative h-48 md:h-56 overflow-hidden bg-black-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black-100 to-transparent opacity-60"></div>
                  </div>

                  <div className="p-4 md:p-6">
                    <h3 className="text-xl md:text-2xl font-semibold mb-2 text-white">
                      {project.title}
                    </h3>
                    <p
                      className="text-white-50 text-sm md:text-base mb-4 overflow-hidden text-ellipsis"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs md:text-sm rounded-full bg-black-100 border border-black-50 text-white-50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {selectedProject === project.id && (
                      <div className="mt-4 pt-4 border-t border-black-50 space-y-3 animate-fadeIn">
                        <div>
                          <h4 className="text-sm font-semibold text-white-50 mb-1">
                            Situation
                          </h4>
                          <p className="text-sm text-white-50">
                            {project.star.situation}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-white-50 mb-1">
                            Task
                          </h4>
                          <p className="text-sm text-white-50">
                            {project.star.task}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-white-50 mb-1">
                            Action
                          </h4>
                          <p className="text-sm text-white-50">
                            {project.star.action}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-white-50 mb-1">
                            Result
                          </h4>
                          <p className="text-sm text-white-50">
                            {project.star.result}
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="text-xs text-white-50 mt-2 flex items-center gap-1">
                      <span>
                        {selectedProject === project.id
                          ? "Click to collapse"
                          : "Click for details"}
                      </span>
                      <svg
                        className={`w-4 h-4 transition-transform duration-300 ${
                          selectedProject === project.id ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
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
}

export default ShowcaseSection;
