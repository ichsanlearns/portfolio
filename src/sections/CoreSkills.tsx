import { logoIconsList } from "../constants";

// Marquee-specific styles
type TLogoIconProps = { icon: { name: string; imgPath: string } };

function LogoIcon({ icon }: TLogoIconProps) {
  return (
    <div className="flex-none flex justify-center items-center marquee-item">
      <img src={icon.imgPath} alt={icon.name} />
    </div>
  );
}

function CoreSkills() {
  return (
    <>
      <div className="md:my-20 my-10 relative">
        <div className="marquee h-52">
          <div className="marquee-box md:gap-12 gap-5">
            {logoIconsList.map((icon) => (
              <LogoIcon key={icon.name} icon={icon} />
            ))}
            {logoIconsList.map((icon) => (
              <LogoIcon key={icon.name} icon={icon} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default CoreSkills;
