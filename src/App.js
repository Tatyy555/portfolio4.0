import HeroSection from "./components/HeroSection";
import ProjectSection from "./components/ProjectSection";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gray-900  text-white ">
      <Header />
      <HeroSection />
      <ProjectSection />
      <Footer />
    </div>
  );
}

export default App;
