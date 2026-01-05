import CoreSkills from "../sections/CoreSkills";
import NavBar from "../components/NavBar";
import Hero from "../sections/Hero";
import ShowcaseSection from "../sections/ShowcaseSection";
import KeyValues from "../sections/KeyValues";

function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowcaseSection />
      <CoreSkills />
      <KeyValues />
    </>
  );
}

export default Home;
