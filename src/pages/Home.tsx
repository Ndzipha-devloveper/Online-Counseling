import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Headphones, Monitor, Calendar } from "lucide-react";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-image.jpg";

const Home = () => {
  return (
    <Layout>
      {/* Hero Section with Background Image */}
      <section 
        className="relative h-[500px] flex items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-white px-4">
          <h1 className="font-heading font-bold text-4xl md:text-6xl mb-4">
            Online Counseling<br />Services
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Professional therapy from the comfort of your home
          </p>
          <Link to="/signup">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-12">
              Get Started
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border shadow-sm">
              <CardContent className="p-8 text-center">
                <Headphones className="w-16 h-16 mx-auto mb-4 text-foreground" />
                <h3 className="font-heading font-bold text-xl mb-3">Experienced Therapists</h3>
                <p className="text-sm text-muted-foreground">
                  Get matched with a licensed therapist who meets your needs.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border shadow-sm">
              <CardContent className="p-8 text-center">
                <Monitor className="w-16 h-16 mx-auto mb-4 text-foreground" />
                <h3 className="font-heading font-bold text-xl mb-3">Convenient & Secure</h3>
                <p className="text-sm text-muted-foreground">
                  Access therapy sessions through our private and secure platform for you with evening and weekend sessions available.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border shadow-sm">
              <CardContent className="p-8 text-center">
                <Calendar className="w-16 h-16 mx-auto mb-4 text-foreground" />
                <h3 className="font-heading font-bold text-xl mb-3">Flexible Scheduling</h3>
                <p className="text-sm text-muted-foreground">
                  Choose a time that works for you. Get matched with a licensed therapist who meets your needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-8">
            Ready To Start Your Session?
          </h2>
          <Link to="/bookings">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-12">
              Book Now
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
