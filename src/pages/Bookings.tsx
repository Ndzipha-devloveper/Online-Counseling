import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import heroImage from "@/assets/hero-image.jpg";

const Bookings = () => {
  const handleBooking = (type: string) => {
    toast.success(`${type} session selected! Please log in to continue.`);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative h-[300px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-white text-center px-4">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
            Online Counseling<br />Services
          </h1>
          <p className="text-lg">
            Professional therapy from the comfort of your home
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-2xl">
          <Card className="shadow-lg border-2">
            <CardContent className="p-12">
              <h2 className="font-heading font-bold text-4xl text-center mb-8">
                Book Your Session
              </h2>
              
              <hr className="border-t mb-8" />
              
              <p className="text-center text-lg mb-8">
                Choose your preferred appointment type:
              </p>

              <div className="space-y-4">
                <Link to="/login">
                  <Button
                    size="lg"
                    className="w-full text-lg py-6"
                    onClick={() => handleBooking("Video")}
                  >
                    Video Session
                  </Button>
                </Link>

                <Link to="/login">
                  <Button
                    size="lg"
                    className="w-full text-lg py-6"
                    onClick={() => handleBooking("Phone")}
                  >
                    Schedule Call
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Bookings;
