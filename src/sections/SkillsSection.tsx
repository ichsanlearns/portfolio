import TitleHeader from "../components/TitleHeader";
import { frontEndSkills, backEndSkills, devOpsTools } from "../constants";

function SkillsSection() {
  const SkillGroup = ({ title, skills }: { title: string; skills: Array<{ name: string; imgPath: string }> }) => (
    <div className="space-y-6">
      <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6">{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center gap-3 p-4 md:p-6 rounded-xl bg-black-200 border border-black-50 hover:border-white-50 transition-all duration-300 hover:scale-105"
          >
            <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
              <img
                src={skill.imgPath}
                alt={skill.name}
                className="w-full h-full object-contain"
                onError={(e) => {
                  // Fallback if image doesn't exist
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `<div class="text-white-50 text-xs text-center">${skill.name}</div>`;
                  }
                }}
              />
            </div>
            <span className="text-sm md:text-base text-white-50 text-center font-medium">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section
      id="skills"
      className="flex justify-center items-center px-5 md:px-10 md:mt-40 mt-20"
    >
      <div className="w-full max-w-7xl mx-auto px-5 md:px-10 lg:px-20">
        <TitleHeader
          title="Skills & Technologies"
          sub="🛠️ What I work with"
        />

        <div className="mt-16 md:mt-20 space-y-16 md:space-y-20">
          <SkillGroup title="Front-End Skills" skills={frontEndSkills} />
          <SkillGroup title="Back-End Skills" skills={backEndSkills} />
          <SkillGroup title="DevOps & Tools" skills={devOpsTools} />
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
