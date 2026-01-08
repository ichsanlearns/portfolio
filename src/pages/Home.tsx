import CoreSkills from "../sections/CoreSkills";
import NavBar from "../components/NavBar";
import Hero from "../sections/Hero";
import ShowcaseSection from "../sections/ShowcaseSection";
import KeyValues from "../sections/KeyValues";
import ExperienceSection from "../sections/ExperienceSection";
import Testimonials from "../sections/Testimonials";

function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowcaseSection />
      <CoreSkills />
      <KeyValues />
      <ExperienceSection />
      <Testimonials />
    </>
  );
}

export default Home;
