import HeroSection from "./components/HeroSection"
import Navigation from "./components/Navigation";
import ProjectSection from "./components/ProjectSection";

function App() {
  return (
    <div className="sm:snap-mandatory bg-gray-900 sm:snap-y text-white overflow-scroll h-screen">

      <Navigation />
      <HeroSection />
      <ProjectSection />
    </div>
  );
}

export default App;
