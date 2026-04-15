
import ContentIntro from "./components/ContentIntro";
import ContentShowcase from "./components/ContentShowcase";
import FeatureCardsSection from "./components/FeatureCardsSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MarqueSection from "./components/MarqueSection";
import Navbar from "./components/Navbar";

import SmoothScroll from "./components/SmoothScroll";


function App() {


  
  return (
    <SmoothScroll>
    

      
        <Navbar />
      
    <main className="">
                <Hero/>
                <ContentIntro/>
                <FeatureCardsSection/>
                <ContentShowcase/>
                <MarqueSection/>
            </main>

      <Footer />
    </SmoothScroll>
  );
}

export default App;
