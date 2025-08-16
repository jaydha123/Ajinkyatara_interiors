import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import kitchenImage from '@/assets/kitchen-interior.jpg';
import civilWorkImage from '@/assets/civil-work.jpg';

const Services = () => {
  const services = [
    {
      number: '01',
      title: 'Full home interiors',
      description: 'Want a fun living room, a soothing bedroom or a balcony which becomes your neighbour\'s envy?',
      image: '/api/placeholder/600/400',
      link: '#'
    },
    {
      number: '02',
      title: 'Customised Kitchen',
      description: 'A fun place to fix up your food needs to get your gadgets and tools aligned without smashing into each other?',
      image: kitchenImage,
      link: '#'
    },
    {
      number: '03',
      title: 'Civil work',
      description: 'We\'ll do all the heavy-lifting–flooring, painting, false ceiling, plumbing and everything else in between!',
      image: civilWorkImage,
      link: '#'
    },
    {
      number: '04',
      title: 'Genie products',
      description: 'High-quality furniture and home decor solutions designed to transform your space with style and functionality.',
      image: '/api/placeholder/600/400',
      link: '#'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-accent">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-4 uppercase tracking-wider">BEST FEATURES</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What we do!
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <Card key={index} className="group overflow-hidden shadow-soft hover:shadow-strong transition-all duration-500 border-0 bg-gradient-card">
              <div className="relative">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute top-6 left-6">
                  <div className="bg-primary text-white font-bold text-2xl w-16 h-16 rounded-full flex items-center justify-center shadow-medium">
                    {service.number}
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Button 
                  variant="outline" 
                  className="group/btn border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                >
                  Imagine it Done!
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;