import CoreSkills from "../components/CoreSkills";
import NavBar from "../components/NavBar";
import Hero from "../sections/Hero";
import ShowcaseSection from "../sections/ShowcaseSection";

function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowcaseSection />
      <CoreSkills />
    </>
  );
}

export default Home;
