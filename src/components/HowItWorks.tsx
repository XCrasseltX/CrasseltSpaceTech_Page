import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Exploration & System Architecture",
    description:
      "Before the first bolt is turned, we define the mission. This includes Requirements Engineering for mechanics, electronics, and software, as well as defining the hardware/software stacks (e.g., ESP-IDF, C++, Redis integration) to create a solid logical concept.",
  },
  {
    icon: <MapIcon />,
    title: "High-Fidelity CAD & Design",
    description:
      "Bringing the vision to life through parametric 3D modeling in SolidWorks. We focus on Design for Manufacturing (DfM) to optimize parts for 3D printing, CNC machining, or injection molding, ensuring a seamless transition from digital model to production.",
  },
  {
    icon: <PlaneIcon />,
    title: "Physical Validation & Simulation",
    description:
      "Eliminating guesswork through science. Using OpenFOAM for CFD (Computational Fluid Dynamics) and structural analysis, we validate aerodynamic performance and mechanical integrity before any physical prototype is built.",
  },
  {
    icon: <GiftIcon />,
    title: "Embedded Intelligence & AI",
    description:
      "Giving hardware a brain. We implement low-level control logic in C++ and integrate advanced AI, such as Spiking Neural Network (SNN) hormone simulations, to create truly autonomous and responsive systems.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        How It{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Works{" "}
        </span>
        Der Crasselt SpaceTech Workflow:
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        In 5 Schritten zur Innovation
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
