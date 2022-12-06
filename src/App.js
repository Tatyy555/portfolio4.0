import HeroSection from "./components/HeroSection"
import ProjectSection from "./components/ProjectSection";
import Header from "./components/Header";

function App() {
  return (
    <div className="sm:snap-mandatory bg-gray-900 sm:snap-y text-white overflow-scroll h-screen">
      <Header />
      <HeroSection />
      <ProjectSection />
    </div>
  );
}

export default App;
