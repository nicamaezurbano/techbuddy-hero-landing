import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">TB</span>
              </div>
              <span className="font-bold text-xl">TechBuddy PH</span>
            </div>
            <p className="text-background/80 leading-relaxed">
              Making technology simple, accessible, and reliable for businesses 
              across Southeast Asia since 2012.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-background/60 hover:text-secondary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-background/60 hover:text-secondary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-background/60 hover:text-secondary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <div className="space-y-2">
              <button
                onClick={() => scrollToSection("home")}
                className="block text-background/80 hover:text-secondary transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block text-background/80 hover:text-secondary transition-colors"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block text-background/80 hover:text-secondary transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className="block text-background/80 hover:text-secondary transition-colors"
              >
                Team
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block text-background/80 hover:text-secondary transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Our Services</h3>
            <div className="space-y-2">
              <p className="text-background/80">TechBuddy Support Bot</p>
              <p className="text-background/80">Cloud Solutions</p>
              <p className="text-background/80">Managed IT Services</p>
              <p className="text-background/80">IT Consulting</p>
              <p className="text-background/80">Cybersecurity</p>
              <p className="text-background/80">Mobile Solutions</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-secondary mt-0.5 flex-shrink-0" />
                <div className="text-background/80">
                  <p>Makati City</p>
                  <p>Metro Manila, Philippines</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-secondary flex-shrink-0" />
                <p className="text-background/80">+63 2 8123 4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-secondary flex-shrink-0" />
                <p className="text-background/80">hello@techbuddy.ph</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-background/60 text-sm">
              © {currentYear} TechBuddy PH, Inc. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-background/60 hover:text-secondary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-background/60 hover:text-secondary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-background/60 hover:text-secondary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;