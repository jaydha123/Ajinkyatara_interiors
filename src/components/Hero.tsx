import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card } from '@/components/ui/card';
import { useState } from 'react';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import heroImage from '@/assets/hero-interior.jpg';

const Hero = () => {
  const [formData, setFormData] = useState({
    lookingFor: '',
    houseType: '',
    carpetArea: '',
    name: '',
    phone: '',
    city: ''
  });

  const handleConsultationClick = () => {
    toast.success('Thank you for your interest! We will contact you soon for a free consultation.');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.houseType || !formData.carpetArea || !formData.name || !formData.phone) {
      toast.error('Please fill in all required fields.');
      return;
    }

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData,
      });

      if (error) {
        console.error('Supabase function error:', error);
        toast.error('Failed to send your inquiry. Please try again.');
        return;
      }

      if (data?.success) {
        toast.success('Thank you for your inquiry! Our team will contact you within 24 hours.');
        // Reset form
        setFormData({
          lookingFor: '',
          houseType: '',
          carpetArea: '',
          name: '',
          phone: '',
          city: ''
        });
      } else {
        toast.error('Failed to send your inquiry. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to send your inquiry. Please try again.');
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Beautiful Interior Design" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Let's take the first step towards making your{' '}
              <span className="text-primary-light">Dream Home</span>
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Consult an Ajinkyatara Associates Design Expert for free
            </p>
            <Button 
              size="lg" 
              onClick={handleConsultationClick}
              className="bg-primary hover:bg-primary-dark text-white text-lg px-8 py-4 h-auto shadow-strong"
            >
              Book Free Online Consultation
            </Button>
          </div>

          {/* Right Form */}
          <Card className="p-8 bg-white/95 backdrop-blur-sm shadow-strong">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <Label htmlFor="lookingFor" className="text-base font-semibold mb-3 block">
                  Looking for
                </Label>
                <Select value={formData.lookingFor} onValueChange={(value) => setFormData({...formData, lookingFor: value})}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select service type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="home-interior">Home Interior</SelectItem>
                    <SelectItem value="home-renovation">Home Renovation</SelectItem>
                    <SelectItem value="commercial-interior">Commercial Interior</SelectItem>
                    <SelectItem value="job">Job</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="houseType" className="text-base font-semibold mb-3 block">
                  House Type *
                </Label>
                <Select value={formData.houseType} onValueChange={(value) => setFormData({...formData, houseType: value})}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select house type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1bhk">1 BHK</SelectItem>
                    <SelectItem value="2bhk">2 BHK</SelectItem>
                    <SelectItem value="3bhk">3 BHK</SelectItem>
                    <SelectItem value="4bhk">4+ BHK / Duplex</SelectItem>
                    <SelectItem value="villa">Villa</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="carpetArea" className="text-base font-semibold mb-3 block">
                  Carpet Area (In Sqft) *
                </Label>
                <Input 
                  id="carpetArea"
                  type="number"
                  placeholder="Enter carpet area"
                  value={formData.carpetArea}
                  onChange={(e) => setFormData({...formData, carpetArea: e.target.value})}
                  className="h-12"
                />
              </div>

              <div>
                <Label htmlFor="name" className="text-base font-semibold mb-3 block">
                  Name *
                </Label>
                <Input 
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="h-12"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-base font-semibold mb-3 block">
                  Phone Number *
                </Label>
                <Input 
                  id="phone"
                  type="tel"
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="h-12"
                />
              </div>

              <div>
                <Label htmlFor="city" className="text-base font-semibold mb-3 block">
                  City
                </Label>
                <Input 
                  id="city"
                  type="text"
                  placeholder="Enter your city"
                  value={formData.city}
                  onChange={(e) => setFormData({...formData, city: e.target.value})}
                  className="h-12"
                />
              </div>

              <div className="text-sm text-muted-foreground">
                By submitting this form, you agree to the privacy policy & terms and conditions
              </div>

              <Button 
                type="submit"
                className="w-full h-12 bg-gradient-hero text-white text-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Submit
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hero;