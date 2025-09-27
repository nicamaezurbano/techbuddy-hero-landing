import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Twitter, Mail } from "lucide-react";
import ceImage from "@/assets/team-ceo.jpg";
import ctoImage from "@/assets/team-cto.jpg";
import aiHeadImage from "@/assets/team-ai-head.jpg";
import opsImage from "@/assets/team-ops.jpg";

const Team = () => {
  const teamMembers = [
    {
      name: "Maria Santos-Cruz",
      position: "Chief Executive Officer",
      image: ceImage,
      bio: "Visionary leader with 15+ years in tech innovation. Passionate about making technology accessible to Filipino businesses.",
      linkedin: "#",
      twitter: "#",
      email: "maria.santos@techease.ph"
    },
    {
      name: "Carlos Mendoza",
      position: "Chief Technology Officer",
      image: ctoImage,
      bio: "Expert in AI development and cloud architecture. Leads our technical innovation and product development initiatives.",
      linkedin: "#",
      twitter: "#",
      email: "carlos.mendoza@techease.ph"
    },
    {
      name: "Dr. Ana Reyes",
      position: "Head of AI Development",
      image: aiHeadImage,
      bio: "PhD in Machine Learning with expertise in multilingual NLP. Drives our AI research and TechEase Support Bot evolution.",
      linkedin: "#",
      twitter: "#",
      email: "ana.reyes@techease.ph"
    },
    {
      name: "Miguel Torres",
      position: "Operations Director",
      image: opsImage,
      bio: "Operations expert ensuring smooth delivery of our services across Southeast Asia. Focuses on client success and satisfaction.",
      linkedin: "#",
      twitter: "#",
      email: "miguel.torres@techease.ph"
    }
  ];

  return (
    <section id="team" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-primary font-medium mb-4">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span>Our Team</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Meet the Innovators
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our diverse team of technology experts, AI researchers, and business leaders 
            are dedicated to transforming how businesses interact with technology.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <Card key={index} className="group hover:shadow-tech transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6">
                {/* Photo */}
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  {/* Social overlay */}
                  <div className="absolute inset-0 bg-primary/80 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <a 
                        href={member.linkedin}
                        className="text-primary-foreground hover:text-secondary transition-colors"
                      >
                        <Linkedin size={24} />
                      </a>
                      <a 
                        href={member.twitter}
                        className="text-primary-foreground hover:text-secondary transition-colors"
                      >
                        <Twitter size={24} />
                      </a>
                      <a 
                        href={`mailto:${member.email}`}
                        className="text-primary-foreground hover:text-secondary transition-colors"
                      >
                        <Mail size={24} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.position}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company Culture Section */}
        <div className="bg-gradient-subtle p-12 rounded-2xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Why Work With Us?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're building the future of AI-powered business solutions while maintaining 
              our Filipino values of collaboration, innovation, and customer-centricity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Innovation First</h4>
              <p className="text-sm text-muted-foreground">
                Work on cutting-edge AI and cloud technologies that shape the future
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Collaborative Culture</h4>
              <p className="text-sm text-muted-foreground">
                Join a team that values diversity, inclusion, and shared success
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-success" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Growth Opportunities</h4>
              <p className="text-sm text-muted-foreground">
                Advance your career while making a real impact on businesses across Asia
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;