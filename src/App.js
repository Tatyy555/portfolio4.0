import HeroSection from "./components/HeroSection";
import ProjectSection from "./components/ProjectSection";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactSction from "./components/ContactSction";

function App() {
  return (
    <div className="bg-gray-900  text-white scroll-smooth h-screen overflow-y-scroll">
      <Header />
      <HeroSection />
      <ProjectSection />
      <ContactSction />
      <Footer />
    </div>
  );
}

export default App;
