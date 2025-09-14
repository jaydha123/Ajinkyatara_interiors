import { Card } from '@/components/ui/card';
import heroInteriorImage from '@/assets/hero-interior.jpg';
import kitchenImage from '@/assets/kitchen-interior.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-4 uppercase tracking-wider">WHO WE ARE</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Us
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Ajinkyatara Associates</strong> is an undertaking to provide one stop solutions to all your décor requirements. We came together with a view to help you enliven your living spaces. We understand that your home is a reflection of you, and we want to partner with you in realizing that desire, in transforming your houses into homes.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ajinkyatara Associates was conceived with a view to cater to the growing needs of homeowners to personalize their living spaces. Today, people are more conscious than ever about owning signature living spaces; and age is no bar. It is not unusual to see little children picking out their favorite colors or cartoon characters or action heroes as themes for their bedroom walls, furniture and what not! Neither is it unusual to see that the décor of a home changes more frequently these days – to reflect a mood, a season or a special occasion in the family.
            </p>
          </div>
          
          <div className="relative">
            <Card className="overflow-hidden shadow-elegant">
              <img 
                src={heroInteriorImage} 
                alt="Interior Design Showcase"
                className="w-full h-96 object-cover"
              />
            </Card>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 shadow-soft hover:shadow-medium transition-shadow duration-300 bg-gradient-card">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To transform every house into a personalized home that reflects the unique personality and lifestyle of its inhabitants, creating spaces that inspire and comfort.
            </p>
          </Card>
          
          <Card className="p-8 shadow-soft hover:shadow-medium transition-shadow duration-300 bg-gradient-card">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To provide comprehensive interior design solutions that combine functionality with aesthetics, making beautiful living spaces accessible to everyone.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;