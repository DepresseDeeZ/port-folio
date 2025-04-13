import LogoSection from "./sections/LogoSection";
import NavBar from "./components/NavBar";
import FeatureCard from "./sections/FeatureCard";
import Hero from "./sections/Hero";
import ShowCaseSection from "./sections/ShowCaseSection";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowCaseSection />
      {/* <LogoSection /> */}
      <FeatureCard />
    </>
  );
};

export default App;
