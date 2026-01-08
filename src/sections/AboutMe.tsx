import TitleHeader from "../components/TitleHeader";
import { coreSkillsLogos } from "../constants";

function AboutMe() {
  return (
    <section
      id="about"
      className="flex justify-center items-center px-5 md:px-10 md:mt-40 mt-20"
    >
      <div className="w-full max-w-7xl mx-auto px-5 md:px-10 lg:px-20">
        <TitleHeader title="About Me" sub="👋 Get to know me better" />

        <div className="mt-16 md:mt-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-white-50 leading-relaxed">
                I'm a software development student at Purwadhika Bootcamp,
                passionate about building modern web applications. My background
                in IT studies has given me a strong foundation in programming
                fundamentals, and I'm now focused on mastering full-stack web
                development.
              </p>
              <p className="text-lg md:text-xl text-white-50 leading-relaxed">
                I'm particularly interested in creating clean, maintainable code
                and user-friendly interfaces. Through bootcamp projects and
                personal practice, I've gained hands-on experience with React,
                Node.js, and modern development tools.
              </p>
              <p className="text-lg md:text-xl text-white-50 leading-relaxed">
                I value <strong className="text-white">timeliness</strong>,{" "}
                <strong className="text-white">attention to detail</strong>, and{" "}
                <strong className="text-white">clear communication</strong> in
                every project I work on.
              </p>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-center lg:text-left">
                Core Technologies
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
                {coreSkillsLogos.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center gap-3 p-4 rounded-xl bg-black-200 border border-black-50 hover:border-white-50 transition-colors duration-300"
                  >
                    <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
                      <img
                        src={skill.imgPath}
                        alt={skill.name}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          // Fallback if image doesn't exist
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `<div class="text-white-50 text-xs text-center">${skill.name}</div>`;
                          }
                        }}
                      />
                    </div>
                    <span className="text-xs md:text-sm text-white-50 text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
