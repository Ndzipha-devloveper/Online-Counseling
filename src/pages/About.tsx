import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Lock, Award, Heart } from "lucide-react";

const About = () => {
  const leadership = Array(6).fill(null);

  const values = [
    {
      icon: User,
      title: "Accessibility",
      description: "Paragraph",
    },
    {
      icon: Lock,
      title: "Privacy & Security",
      description: "Paragraph",
    },
    {
      icon: Award,
      title: "Quality Care",
      description: "Paragraph",
    },
    {
      icon: Heart,
      title: "Compassion",
      description: "Paragraph",
    },
  ];

  const careers = [
    { title: "Licensed Therapists", description: "Paragraph" },
    { title: "Technology Professionals", description: "Paragraph" },
    { title: "Support Staff", description: "Paragraph" },
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-2">About Us</h1>
          <p>Paragraph</p>
        </div>
      </section>

      {/* Mission and Stats */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="font-heading font-bold text-3xl mb-4">Our Mission</h2>
              <p className="text-muted-foreground">Paragraph</p>
            </div>

            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-8">
                <h3 className="font-heading font-bold text-xl mb-4">Happy clients</h3>
                <div className="space-y-3">
                  <div className="bg-white/20 rounded p-3"></div>
                  <div className="bg-white/20 rounded p-3"></div>
                  <div className="bg-white/20 rounded p-3"></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-heading font-bold text-3xl text-center mb-12">
            Meet Our Leadership Team
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {leadership.map((_, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-square bg-muted flex items-center justify-center border-b">
                  <span className="text-muted-foreground">image</span>
                </div>
                <CardContent className="p-4">
                  <div className="h-16 bg-muted/50 rounded"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-heading font-bold text-3xl text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-heading font-bold text-3xl text-center mb-4">
            Join Our Team
          </h2>
          <p className="text-center text-muted-foreground mb-12">Paragraph</p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {careers.map((career, index) => (
              <Card key={index} className="bg-muted/30">
                <CardContent className="p-6 text-center">
                  <h3 className="font-heading font-semibold text-lg mb-2">{career.title}</h3>
                  <p className="text-sm text-muted-foreground">{career.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" className="text-primary border-primary">
              View Open Positions
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
