import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";
import { Services } from "./components/Services";
import { Team } from "./components/Team";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Contact } from "./components/Kontact"; // Kleiner Hinweis: Schau mal, ob der Ordner wirklich "Kontact" mit 'K' und 'c' heißt!

import "./App.css";

{/* auskomentieten?*/}
const WorkInProgressOverlay = () => {
  return (
    // 'fixed inset-0' legt das div über den ganzen Bildschirm.
    // 'z-50' sorgt dafür, dass es ÜBER allen anderen Elementen liegt.
    // Der Hintergrund fängt automatisch alle Klicks ab, sodass man nichts darunter anklicken kann.
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="text-center p-8 border rounded-xl shadow-lg bg-card">
        <h1 className="text-4xl font-bold mb-4">🚧 Work in Progress 🚧</h1>
        <p className="text-muted-foreground text-lg">
          Wir bauen hier gerade etwas Großartiges.<br /> 
          Bitte schau später nochmal vorbei!
        </p>
      </div>
    </div>
  );
};


// Wir erstellen eine kleine Hilfs-Komponente für deine Startseite, 
// damit die App.tsx nicht so unübersichtlich wird.
const Home = () => {
  return (
    <div className="relative">
      
{/*       
        HIER IST DAS OVERLAY: 
        Wenn du die Landingpage bearbeiten oder freigeben willst, 
        kommentierst du diese Zeile einfach aus! 
*/}      
      <WorkInProgressOverlay />

      
      <Hero />
      <About />
      <HowItWorks />
      <Services />
      <Team />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Navbar /> {/* Bleibt immer oben sichtbar */}
      
      <Routes>
        {/* Route 1: Deine Hauptseite */}
        <Route path="/" element={<Home />} />
        
        {/* Route 2: Deine neue Kontakt-Seite */}
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer /> {/* Bleibt immer unten sichtbar */}
      <ScrollToTop />
    </Router>
  );
}

export default App;
