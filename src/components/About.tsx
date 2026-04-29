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
                In a world often split between pure hardware development and isolated software logic, 
                I bridge the gap. As a Technical Product Designer with a deep passion for Embedded C++ and Artificial Intelligence, I view systems holistically.
                From the initial CAD design in SolidWorks and aerodynamic validation in OpenFOAM to the implementation of complex control algorithms (SNN) – 
                I don't just deliver drafts; I build functional prototypes.
                With Crasselt SpaceTech, I pursue a clear vision: the next generation of robotics and aerospace doesn't need components; it needs organs. 
                Systems that are optimized through simulations and endowed with organic intelligence by 'Gizmo' – my SNN-based hormone simulation.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
