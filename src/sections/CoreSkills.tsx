import { logoIconsList } from "../constants";

// Marquee-specific styles
const marqueeStyles = `
  .marquee {
    width: 100dvw;
    overflow: hidden;
    position: relative;
  }
  
  .marquee-box {
    display: flex;
    align-items: center;
    width: 200%;
    height: 100%;
    position: absolute;
    overflow: hidden;
    animation: marquee 60s linear infinite;
  }
  
  .marquee-item {
    float: left;
  }
  
  @keyframes marquee {
    0% { left: 0; }
    100% { left: -100%; }
  }
`;

type TLogoIconProps = { icon: { name: string; imgPath: string } };

function LogoIcon({ icon }: TLogoIconProps) {
  return (
    <div className="flex-none flex-center marquee-item">
      <img src={icon.imgPath} alt={icon.name} />
    </div>
  );
}

function CoreSkills() {
  return (
    <>
      <style>{marqueeStyles}</style>
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
