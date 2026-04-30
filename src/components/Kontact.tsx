import { Button } from "./ui/button"; // Das hast du im Repo
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"; // Das hast du auch

export const Contact = () => {
  return (
    <section id="contact" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Contact{" "}
            </span>
            Our Crew
          </h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8">
            Let's discuss your next aerospace or robotics milestone.
          </p>
        </div>

        <Card className="bg-muted/50">
          <CardHeader>
            <CardTitle>Technical Briefing</CardTitle>
          </CardHeader>
          <CardContent>
            <form action="/success" className="grid gap-6">
              {/* Custom Input Styles passend zum Dark-Mode Design */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2 text-left">
                  <label className="text-sm font-medium">First name</label>
                  <input 
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" 
                    placeholder="Michael" 
                  />
                </div>
                <div className="flex flex-col gap-2 text-left">
                  <label className="text-sm font-medium">Last name</label>
                  <input 
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" 
                    placeholder="Crasselt" 
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-2 text-left">
                <label className="text-sm font-medium">Email</label>
                <input 
                  type="email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" 
                  placeholder="m.crasselt@crasselt-spacetech.com" 
                />
              </div>

              <div className="flex flex-col gap-2 text-left">
                <label className="text-sm font-medium">Engineering Domain</label>
                <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                  <option value="mechanical">Mechanical Design</option>
                  <option value="simulation">CFD Simulation</option>
                  <option value="ai">Embedded Intelligence</option>
                  <option value="prototyping">Rapid Prototyping (LEO)</option>
                </select>
              </div>

              <div className="flex flex-col gap-2 text-left">
                <label className="text-sm font-medium">Project Description</label>
                <textarea 
                  rows={4}
                  className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" 
                  placeholder="Describe your technical requirements..." 
                />
              </div>

              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};