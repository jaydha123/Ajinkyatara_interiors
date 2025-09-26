import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card } from '@/components/ui/card';
import { toast } from 'sonner';
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    if (!formData.houseType || !formData.carpetArea || !formData.name || !formData.phone) {
      toast.error('Please fill in all required fields.');
      return;
    }

    try {
      const form = new FormData();
      Object.entries(formData).forEach(([key, value]) => form.append(key, value));

      const response = await fetch('https://formspree.io/f/xkgqgzoe', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: form,
      });

      const result = await response.json();
      if (result.ok) {
        toast.success('Thank you for your inquiry! Our team will contact you within 24 hours.');
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
              onClick={() => toast.success('Thank you for your interest! We will contact you soon for a free consultation.')}
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
                <Select
                  value={formData.lookingFor}
                  onValueChange={(value) => handleSelectChange('lookingFor', value)}
                  name="lookingFor"
                >
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
                  House Type
                </Label>
                <Input
                  id="houseType"
                  name="houseType"
                  placeholder="e.g. 2BHK, Villa"
                  value={formData.houseType}
                  onChange={handleChange}
                  className="h-12"
                />
              </div>

              <div>
                <Label htmlFor="carpetArea" className="text-base font-semibold mb-3 block">
                  Carpet Area (sq. ft.)
                </Label>
                <Input
                  id="carpetArea"
                  name="carpetArea"
                  placeholder="e.g. 800"
                  value={formData.carpetArea}
                  onChange={handleChange}
                  className="h-12"
                  type="number"
                  min="0"
                />
              </div>

              <div>
                <Label htmlFor="name" className="text-base font-semibold mb-3 block">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="h-12"
                  required
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-base font-semibold mb-3 block">
                  Phone
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="h-12"
                  required
                  type="tel"
                />
              </div>

              <div>
                <Label htmlFor="city" className="text-base font-semibold mb-3 block">
                  City
                </Label>
                <Input
                  id="city"
                  name="city"
                  placeholder="Your City"
                  value={formData.city}
                  onChange={handleChange}
                  className="h-12"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-lg py-3"
              >
                Book Free Online Consultation
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hero;
