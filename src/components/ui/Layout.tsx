import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "HOW IT WORKS", path: "/how-it-works" },
    { name: "CONTACT US", path: "/contact" },
    { name: "ABOUT US", path: "/about" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary text-primary-foreground sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <span className="font-heading font-semibold text-lg">Logo</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-body font-medium text-sm transition-colors hover:opacity-80 ${
                    isActive(link.path) ? "opacity-100" : "opacity-90"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/login">
                <Button variant="outline" size="sm" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Login
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-primary-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block font-body font-medium py-2 transition-colors hover:opacity-80"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" size="sm" className="w-full border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Login
                </Button>
              </Link>
            </div>
          )}
        </nav>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="bg-[#2D2D3F] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-heading font-semibold mb-4">About</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Our Mission</li>
                <li>Careers</li>
                <li>Our Team</li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Individual Therapy</li>
                <li>Couples Counseling</li>
                <li>Group Sessions</li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Support</li>
                <li>Emergency</li>
                <li>Feedback</li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading font-semibold mb-4">FAQ</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Getting Started</li>
                <li>Privacy & Security</li>
                <li>Billing</li>
              </ul>
            </div>
          </div>
          <div className="text-center text-sm opacity-70">
            © 2025 OnlineCounseling. All rights reserved
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
