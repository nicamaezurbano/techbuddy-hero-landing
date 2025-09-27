import { Award, Calendar, Globe, Target, Users, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const achievements = [
    {
      year: "2015",
      title: "Best Startup IT Service Provider",
      description: "Philippines Tech Awards recognition"
    },
    {
      year: "2018",
      title: "First AI Chatbot Launch",
      description: "Developed AI-based customer support prototype"
    },
    {
      year: "2020",
      title: "Major Telco Partnership",
      description: "Deployed support bots nationwide"
    },
    {
      year: "2022",
      title: "Top 10 Emerging Tech Company",
      description: "Recognized across Asia"
    },
    {
      year: "2024",
      title: "TechBuddy Support Bot 2.0",
      description: "Multilingual omni-channel features"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "Continuously evolve through AI and automation"
    },
    {
      icon: Users,
      title: "Customer-Centricity",
      description: "Always prioritize user satisfaction"
    },
    {
      icon: Globe,
      title: "Collaboration",
      description: "Work hand-in-hand with clients and partners"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Deliver solutions that exceed expectations"
    }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-primary font-medium mb-4">
            <Calendar size={20} />
            <span>Our Story</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            About TechBuddy PH
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Founded in 2012 in Manila, Philippines, we've grown from a small IT consultancy 
            to a leading AI-powered solutions provider across Southeast Asia.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <Card className="p-8 border-2 hover:border-primary transition-colors">
            <CardContent className="p-0">
              <div className="flex items-center space-x-3 mb-6">
                <Eye className="text-primary h-8 w-8" />
                <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                "To empower businesses and individuals by making technology simple, 
                accessible, and reliable—anytime, anywhere."
              </p>
            </CardContent>
          </Card>

          <Card className="p-8 border-2 hover:border-secondary transition-colors">
            <CardContent className="p-0">
              <div className="flex items-center space-x-3 mb-6">
                <Target className="text-secondary h-8 w-8" />
                <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
              </div>
              <div className="space-y-3 text-muted-foreground">
                <p>• Provide fast, accurate, and reliable technical support solutions</p>
                <p>• Deliver innovative AI-driven tools that improve experiences</p>
                <p>• Ensure data security and privacy with world-class IT services</p>
                <p>• Support multilingual communication to reach more Filipinos</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Achievements Timeline */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center text-foreground mb-12">Key Achievements</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-hero rounded-full hidden lg:block"></div>
            
            <div className="space-y-8 lg:space-y-12">
              {achievements.map((achievement, index) => (
                <div 
                  key={achievement.year}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <Card className="p-6 hover:shadow-tech transition-shadow">
                      <CardContent className="p-0">
                        <div className="text-primary font-bold text-lg mb-2">{achievement.year}</div>
                        <h4 className="font-semibold text-foreground mb-2">{achievement.title}</h4>
                        <p className="text-muted-foreground">{achievement.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline node */}
                  <div className="hidden lg:block w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>
                  
                  {/* Spacer for desktop */}
                  <div className="flex-1 hidden lg:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <h3 className="text-2xl font-bold text-center text-foreground mb-12">Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-tech transition-shadow group">
                <CardContent className="p-0">
                  <value.icon className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="font-semibold text-foreground mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;