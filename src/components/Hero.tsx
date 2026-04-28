//import { Button } from "./ui/button";
//import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
//import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { LogoIcon } from "./Icons";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              <LogoIcon/>
            </span>{" "}
            Engeneering
          </h1>{" "}
          the{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              Future
            </span>{" "}
            of Autonomous Hardware.
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Mechanical Design | Embedded Intelligence | CFD Simulation
        </p>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
