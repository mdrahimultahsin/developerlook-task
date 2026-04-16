import ContentIntro from "./components/ContentIntro";
import ContentShowcase from "./components/ContentShowcase";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MarqueSection from "./components/MarqueSection";
import Navbar from "./components/Navbar";
import FeatureCardsSection from "./components/FeatureCardsSection";

import SmoothScroll from "./components/SmoothScroll";

function App() {
  return (
    <SmoothScroll>
      <Navbar />

      <main className="relative w-full">
        <Hero />
        <ContentIntro />


        <FeatureCardsSection/>

        <ContentShowcase />
        <MarqueSection />
      </main>

      <Footer />
    </SmoothScroll>
  );
}

export default App;
