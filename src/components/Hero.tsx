import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card } from '@/components/ui/card';
import { toast } from 'sonner';
import heroImage from '@/assets/hero-interior.jpg';
import { useForm, ValidationError } from '@formspree/react';

const Hero = () => {
  const [formData, setFormData] = useState({
    lookingFor: '',
    houseType: '',
    carpetArea: '',
    name: '',
    phone: '',
    city: ''
  });

  const [state, handleSubmit] = useForm("xkgqgzoe");

  // Show success message
  if (state.succeeded) {
    toast.success('Thank you for your inquiry! Our team will contact you within 24 hours.');
    setFormData({
      lookingFor: '',
      houseType: '',
      carpetArea: '',
      name: '',
      phone: '',
      city: ''
    });
    // Optionally, you can render a thank you message instead of the form
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
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
            {/* You can optionally render a thank you/confirmation message here if state.succeeded */}
            <form className="space-y-6" onSubmit={(e) => {
              // Basic validation
              if (!formData.houseType || !formData.carpetArea || !formData.name || !formData.phone) {
                e.preventDefault();
                toast.error('Please fill in all required fields.');
                return;
              }
              handleSubmit(e);
            }}>
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
                <input type="hidden" name="lookingFor" value={formData.lookingFor} />
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

              {/* ValidationError fields are optional but recommended for better error display */}
              <ValidationError prefix="Looking For" field="lookingFor" errors={state.errors} />
              <ValidationError prefix="House Type" field="houseType" errors={state.errors} />
              <ValidationError prefix="Carpet Area" field="carpetArea" errors={state.errors} />
              <ValidationError prefix="Name" field="name" errors={state.errors} />
              <ValidationError prefix="Phone" field="phone" errors={state.errors} />
              <ValidationError prefix="City" field="city" errors={state.errors} />

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-lg py-3"
                disabled={state.submitting}
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
