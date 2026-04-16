import ContentIntro from "./components/ContentIntro";
import ContentShowcase from "./components/ContentShowcase";
import FeatureCardsSection from "./components/FeatureCardsSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MarqueSection from "./components/MarqueSection";
import Navbar from "./components/Navbar";

import SmoothScroll from "./components/SmoothScroll";
import Sticky from "./components/sticky";

function App() {
  return (
    <>
      <Navbar />

      <main className="relative w-full">
        <Hero />
        <ContentIntro />
        {/* <Sticky /> */}
        <FeatureCardsSection />
        <ContentShowcase />
        <MarqueSection />
      </main>

      <Footer />
    </>
  );
}

export default App;
