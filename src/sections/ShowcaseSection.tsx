import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function ShowcaseSection() {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];
    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="app-showcase border border-4 rounded-3xl"
    >
      <div className="w-full">
        <div className="showcaselayout">
          {/* LEFT */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img src="/images/project1.jpg" alt="Project 1" />
            </div>
            <div className="text-content">
              <h2>TODO LIST</h2>
              <p className="text-white-50 md:text-xl">
                A project thats designed and created to test myself
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="project-list-wrapper overflow-hidden">
            {/* <div className="project">
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="/images/project2.jpg" alt="Project 2" />
              </div>
              <h2>Project Title - Todo List</h2>
            </div> */}
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#ffefdb] flex items-center justify-center">
                <div className="max-w-85 max-h-100 overflow-hidden border border-3 border-black rounded-2xl">
                  <img
                    className="object-fill w-90"
                    src="/images/project2.jpg"
                    alt="Project 2"
                  />
                </div>
              </div>
              <h2>Project Title - My GitHub</h2>
            </div>
            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#ffe7eb] flex items-center justify-center">
                <div className="max-w-85 max-h-100 overflow-hidden border border-3 border-black rounded-2xl">
                  <img
                    className="object-fill w-70"
                    src="/images/project1.jpg"
                    alt="Project 3"
                  />
                </div>
              </div>
              <h2>Project Title - Todo List</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShowcaseSection;
