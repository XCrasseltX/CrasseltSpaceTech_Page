import { Statistics } from "./Statistics";
import pilot from "../assets/pilot.png";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                Crasselt SpaceTech
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                In einer Welt, die sich oft zwischen reiner Hardware-Entwicklung und isolierter Software-Logik spaltet, 
                schließe ich die Lücke. Als Technischer Produktdesigner mit einer tiefen Leidenschaft für Embedded C++ und künstliche Intelligenz 
                betrachte ich Systeme ganzheitlich.
                Vom ersten CAD-Entwurf in SolidWorks über die aerodynamische Validierung in OpenFOAM bis hin zur Implementierung komplexer Steuerungsalgorithmen (SNN). 
                Ich liefere nicht nur Entwürfe, sondern funktionale Prototypen.
                Mit Crasselt SpaceTech verfolge ich eine klare Vision: Die nächste Generation der Robotik und Luftfahrt braucht keine Bauteile, sie braucht Organe. Systeme, 
                die durch Simulationen optimiert und durch 'Gizmo' – meine SNN-Hormonsimulation – mit einer organischen Intelligenz ausgestattet sind.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
