
import ContentIntro from "./components/ContentIntro";
import FeatureCardsSection from "./components/FeatureCardsSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";


function App() {


  
  return (
    <>
    

      
        <Navbar />
      
    <main className="min-h-screen">
                <Hero/>
                <ContentIntro/>
                <FeatureCardsSection/>
            </main>

      <Footer />
    </>
  );
}

export default App;
