import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Shield, Zap } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-subtle flex items-center pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-primary font-medium">
                <Bot size={20} />
                <span>AI-Powered IT Solutions</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Making Technology
                <span className="bg-gradient-hero bg-clip-text text-transparent"> Simple & Accessible</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Empowering businesses across Southeast Asia with innovative AI-driven support tools, 
                managed IT services, and cloud solutions since 2012.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2 text-sm">
                <Zap className="text-secondary h-5 w-5" />
                <span>24/7 AI Support</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Shield className="text-secondary h-5 w-5" />
                <span>Secure & Reliable</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Bot className="text-secondary h-5 w-5" />
                <span>Multilingual AI</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg"
                onClick={scrollToContact}
                className="group"
              >
                Get Started Today
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={scrollToServices}
              >
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">12+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                  src={heroImage}
                  alt="TechBuddy PH team working on AI development in Manila office"
                className="rounded-2xl shadow-hero w-full h-auto"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-hero rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-secondary rounded-full opacity-20 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;