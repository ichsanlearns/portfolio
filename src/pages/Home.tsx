import NavBar from "../components/NavBar";
import Hero from "../sections/Hero";
import AboutMe from "../sections/AboutMe";
import ShowcaseSection from "../sections/ShowcaseSection";
import SkillsSection from "../sections/SkillsSection";
import KeyValues from "../sections/KeyValues";
import ExperienceSection from "../sections/ExperienceSection";
import Testimonials from "../sections/Testimonials";
import ContactSection from "../sections/ContactSection";

function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <AboutMe />
      <ShowcaseSection />
      <SkillsSection />
      <KeyValues />
      <ExperienceSection />
      <Testimonials />
      <ContactSection />
    </>
  );
}

export default Home;
