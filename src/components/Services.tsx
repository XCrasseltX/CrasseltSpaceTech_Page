import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";
import cubeLeg from "../assets/cube-leg.png";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Advanced Mechanical Engineering",
    description:
      "High-precision CAD development in SolidWorks, specializing in Design for Manufacturing (DfM) for aerospace components and complex robotic prototypes.",
    icon: <ChartIcon />,
  },
  {
    title: "High-Fidelity Simulation (CFD)",
    description:
      "Validating performance through Computational Fluid Dynamics using OpenFOAM to ensure aerodynamic efficiency and structural integrity before production.",
    icon: <WalletIcon />, // Falls PlaneIcon verfügbar, sonst WalletIcon lassen
  },
  {
    title: "Embedded Intelligence & AI",
    description:
      "Integrating hardware-near software in C++ and custom AI solutions like hormone-based SNN simulations for truly autonomous hardware behavior.",
    icon: <MagnifierIcon />,
  },
];

export const Services = () => {
  return (
    <section 
    className="container py-24 sm:py-32"
    id="services">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Engineering{" "}
            </span>
            Solutions
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            Combining industrial precision with cutting-edge software and physical validation to accelerate your aerospace and robotics development.
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Hier könntest du statt cubeLeg ein Rendering deiner Strömungssimulation einbauen */}
        <img
          src={cubeLeg} 
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="Technical Engineering Showcase"
        />
      </div>
    </section>
  );
};
