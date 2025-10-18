import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, MessageCircle, HelpCircle, CreditCard, Plus } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    toast.success("Message sent successfully!");
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const supportCategories = [
    {
      icon: Phone,
      title: "Crisis Support",
      description: "Text",
      bgColor: "bg-red-500",
    },
    {
      icon: MessageCircle,
      title: "General Support",
      description: "Text",
      bgColor: "bg-primary",
    },
    {
      icon: HelpCircle,
      title: "Technical Help",
      description: "Text",
      bgColor: "bg-primary",
    },
    {
      icon: CreditCard,
      title: "Billing Questions",
      description: "Text",
      bgColor: "bg-primary",
    },
  ];

  const faqs = [
    { question: "Text" },
    { question: "Text" },
    { question: "Text" },
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-2">Contact Us</h1>
          <p className="text-lg">Text</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="shadow-md bg-muted/50">
              <CardContent className="p-8">
                <h2 className="font-heading font-bold text-2xl mb-6">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      required
                      className="mt-2"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Get in Touch */}
            <div>
              <Card className="shadow-md bg-muted/30 mb-6">
                <CardContent className="p-6">
                  <h2 className="font-heading font-bold text-2xl mb-6">Get in Touch</h2>
                  <div className="space-y-4">
                    {supportCategories.map((category, index) => (
                      <Card key={index} className="bg-card shadow-sm">
                        <CardContent className="p-4 flex items-center gap-4">
                          <div className={`${category.bgColor} text-white p-3 rounded-full`}>
                            <category.icon className="w-6 h-6" />
                          </div>
                          <div>
                            <h3 className="font-semibold">{category.title}</h3>
                            <p className="text-sm text-muted-foreground">{category.description}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-heading font-bold text-3xl text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-muted/30">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
                >
                  <span className="font-medium">{faq.question}</span>
                  <Plus
                    className={`w-6 h-6 text-primary transition-transform ${
                      expandedFaq === index ? "rotate-45" : ""
                    }`}
                  />
                </button>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
