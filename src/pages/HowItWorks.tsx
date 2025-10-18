import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { UserPlus, ClipboardList, Users } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Create Account",
      icon: UserPlus,
      description: "Sign up in minutes with your email",
    },
    {
      number: 2,
      title: "Complete Assessment",
      icon: ClipboardList,
      description: "Tell us about yourself and your needs",
    },
    {
      number: 3,
      title: "Get Matched",
      icon: Users,
      description: "Connect with a licensed therapist",
    },
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-2">How It Works</h1>
          <p className="text-lg">Get started with therapy in three simple steps</p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center gap-8"
              >
                {/* Step Number Circle */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg">
                    <span className="font-heading font-bold text-4xl">{step.number}</span>
                  </div>
                </div>

                {/* Step Content */}
                <Card className="flex-1 shadow-md">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <step.icon className="w-10 h-10 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-heading font-bold text-2xl mb-2">{step.title}</h3>
                        <p className="text-lg text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-heading font-bold text-3xl text-center mb-12">
            What to Expect
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-xl mb-3">First Session</h3>
                <p className="text-muted-foreground">
                  Your therapist will get to know you and understand your goals
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-xl mb-3">Ongoing Sessions</h3>
                <p className="text-muted-foreground">
                  Regular sessions help you work through challenges
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-xl mb-3">Flexible Format</h3>
                <p className="text-muted-foreground">
                  Choose video sessions or phone calls
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-xl mb-3">Your Privacy</h3>
                <p className="text-muted-foreground">
                  All sessions are confidential and secure
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-heading font-bold text-3xl mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Take the first step toward better mental health today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" className="px-12">
                Get Started Now
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="px-12">
                Have Questions?
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HowItWorks;
