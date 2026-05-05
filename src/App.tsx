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
import { useState, useEffect } from "react";

import "./App.css";

{/* auskomentieten?*/}
const WorkInProgressOverlay = () => {
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    // 1. Prüfen, ob du das Overlay schon mal entsperrt hast
    if (localStorage.getItem("devMode") === "aktiv") {
      setShowOverlay(false);
    }

    // 2. Die geheime Hintertür: Wenn die URL "?dev=true" enthält
    if (window.location.href.includes("?dev=true")) {
      localStorage.setItem("devMode", "aktiv");
      setShowOverlay(false);
    }
  }, []);

  // Wenn du als Admin eingeloggt bist, wird das Overlay unsichtbar
  if (!showOverlay) return null;

  return (
    // bg-background/98 macht es fast komplett undurchsichtig
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-background/98 backdrop-blur-md">
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
    <>
      <Hero />
      <About />
      <HowItWorks />
      <Services />
      <Team />
    </>
  );
};

function App() {
  return (
    <>
      {/* Das Overlay wacht jetzt über die gesamte App */}
      <WorkInProgressOverlay />

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
    </>
  );
}

export default App;
