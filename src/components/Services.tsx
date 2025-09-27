import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Bot, 
  Cloud, 
  Shield, 
  Headphones, 
  Server, 
  Smartphone,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Bot,
      title: "TechBuddy Support Bot",
      description: "AI-powered chatbot with multilingual support for Messenger, WhatsApp, Web, and Email",
      features: ["24/7 Automated Support", "Taglish & Regional Dialects", "Omni-channel Integration", "Smart Escalation"],
      popular: true
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services for modern businesses",
      features: ["Cloud Migration", "Infrastructure Setup", "Performance Optimization", "Cost Management"],
      popular: false
    },
    {
      icon: Server,
      title: "Managed IT Services",
      description: "Complete IT infrastructure management and support for your business operations",
      features: ["Network Management", "Security Monitoring", "Regular Maintenance", "Disaster Recovery"],
      popular: false
    },
    {
      icon: Headphones,
      title: "IT Consulting",
      description: "Expert guidance on technology strategy, digital transformation, and process optimization",
      features: ["Technology Assessment", "Digital Strategy", "Process Automation", "Training & Support"],
      popular: false
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your business from digital threats",
      features: ["Security Audits", "Threat Monitoring", "Data Protection", "Compliance Support"],
      popular: false
    },
    {
      icon: Smartphone,
      title: "Mobile Solutions",
      description: "Custom mobile applications and responsive web solutions for enhanced user engagement",
      features: ["Mobile App Development", "Responsive Design", "Cross-platform Solutions", "User Experience Design"],
      popular: false
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-24 bg-accent/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-primary font-medium mb-4">
            <Server size={20} />
            <span>Our Services</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Comprehensive IT Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From AI-powered support bots to complete cloud migrations, we provide 
            end-to-end technology solutions tailored for Southeast Asian businesses.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`relative group hover:shadow-tech transition-all duration-300 hover:-translate-y-2 ${
                service.popular ? 'border-2 border-primary' : ''
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-hero text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <service.icon className={`h-12 w-12 ${service.popular ? 'text-primary' : 'text-secondary'}`} />
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle size={16} className="text-success flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant={service.popular ? "hero" : "outline"} 
                  className="w-full group"
                  onClick={scrollToContact}
                >
                  Learn More
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-subtle p-12 rounded-2xl">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI-powered solutions can streamline your operations 
            and improve customer satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" onClick={scrollToContact}>
              Get Free Consultation
            </Button>
            <Button variant="outline" size="lg">
              View Case Studies
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;