import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon, MagnifierIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "01 Exploration",
    description:
      "Defining the mission. We conduct requirements engineering for mechanics and software while establishing the core technology stack using C++, ESP-IDF, and Redis.",
  },
  {
    icon: <MapIcon />,
    title: "02 Design",
    description:
      "Transforming concepts into reality through high-fidelity CAD modeling in SolidWorks, focusing on Design for Manufacturing (DfM) for aerospace-grade components.",
  },
  {
    icon: <PlaneIcon />,
    title: "03 Validation",
    description:
      "Science-backed precision. We utilize OpenFOAM for CFD simulations to validate aerodynamic performance and structural integrity before any physical build.",
  },
  {
    icon: <GiftIcon />,
    title: "04 Intelligence",
    description:
      "Giving hardware a brain. We implement low-level control logic and custom AI solutions, such as biologically inspired hormone simulations for autonomous behavior.",
  },
  {
    icon: <MagnifierIcon />, 
    title: "05 Prototyping",
    description:
      "The final frontier. We manufacture functional prototypes using 3D printing and precision assembly, bridging the gap from digital design to physical deployment.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        Engineering the{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Extraordinary{" "}
        </span>
        Der Crasselt SpaceTech Workflow:
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Our 5-Step Process to Functional Innovation
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
