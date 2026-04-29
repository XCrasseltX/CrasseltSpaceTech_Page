import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Check, Linkedin, Cpu, Rocket, Box, BrainCircuit } from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      
      {/* Simulation / OpenFOAM Card */}
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <div className="bg-primary/20 p-2 rounded-lg">
            <Rocket className="text-primary" size={24} />
          </div>
          <div className="flex flex-col">
            <CardTitle className="text-lg">Aerodynamik & CFD</CardTitle>
            <CardDescription>Validierung via OpenFOAM</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="text-sm">
          Präzise Strömungssimulationen für Luftfahrt-Komponenten und Gehäusedesign.
          <div className="mt-3 h-24 w-full bg-muted rounded-md flex items-center justify-center border-dashed border-2">
            <span className="text-xs text-muted-foreground uppercase">Simulation Render Placeholder</span>
          </div>
        </CardContent>
      </Card>

      {/* Profile / Expert Card */}
      <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <div className="absolute -top-12 w-24 h-24 bg-muted rounded-full border-4 border-background overflow-hidden flex items-center justify-center">
             <span className="text-xs text-center p-2 text-muted-foreground">Profilbild / Michael</span>
          </div>
          <CardTitle className="text-center pt-4">Michael Crasselt</CardTitle>
          <CardDescription className="font-normal text-primary">
            Konstruktion & KI-Entwicklung
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center pb-2 text-sm">
          <p>
            Verbindung von physischer Hardware (SolidWorks) mit intelligenter Steuerung (C++ & SNN).
          </p>
        </CardContent>
        <CardFooter className="gap-2">
            <a href="https://github.com/XCrasseltX" target="_blank" className={buttonVariants({ variant: "ghost", size: "sm" })}>
              <GitHubLogoIcon className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" className={buttonVariants({ variant: "ghost", size: "sm" })}>
              <Linkedin size="20" />
            </a>
        </CardFooter>
      </Card>

      {/* Technical IP / Gizmo Card */}
      <Card className="absolute top-[150px] left-[50px] w-72 drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Gizmo IP
            <Badge variant="secondary" className="text-xs">SNN Simulation</Badge>
          </CardTitle>
          <CardDescription>Hormonbasierte KI-Steuerung</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            {[
              { icon: <BrainCircuit size={16}/>, label: "Neuromorphic Logic" },
              { icon: <Cpu size={16}/>, label: "Embedded C++ (ESP-IDF)" },
              { icon: <Check size={16}/>, label: "Real-time Telemetry" }
            ].map((item, index) => (
              <span key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                {item.icon} {item.label}
              </span>
            ))}
          </div>
          <Button className="w-full text-xs">Technische Dokumentation</Button>
        </CardContent>
      </Card>

      {/* Manufacturing / Hardware Card */}
      <Card className="absolute w-[350px] -right-[10px] bottom-[35px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-2 rounded-lg">
            <Box className="text-primary" size={24} />
          </div>
          <div>
            <CardTitle className="text-lg">Rapid Prototyping</CardTitle>
            <CardDescription className="text-sm mt-2">
              Vom SolidWorks-Entwurf direkt zum funktionalen 3D-Druck (Gehäuse & Mechanik).
            </CardDescription>
            <div className="mt-4 h-16 w-full bg-muted rounded-md flex items-center justify-center border-dashed border-2">
               <span className="text-xs text-muted-foreground">CAD / Print Gallery</span>
            </div>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};
