import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import ajinkyataraLogo from '@/assets/ajinkyatara-logo.jpg';

const Footer = () => {
  const footerLinks = {
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Our Team', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' }
    ],
    services: [
      { name: 'Home Interiors', href: '#' },
      { name: 'Kitchen Design', href: '#' },
      { name: 'Civil Work', href: '#' },
      { name: 'Commercial Interiors', href: '#' }
    ],
    support: [
      { name: 'Contact Us', href: '#' },
      { name: 'FAQ', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms & Conditions', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/ajinkyatara_associates/', label: 'Instagram' }
  ];

  const contactInfo = [
    { icon: MapPin, text: 'A11, Mayur Park Society, Kothrud, Pune 411038' },
    { icon: Phone, text: '8668404748' },
    { icon: Mail, text: 'ajinkyatara.associates@gmail.com' }
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img src={ajinkyataraLogo} alt="Ajinkyatara Associates" className="h-12 w-auto mb-4" />
              <p className="text-background/80 leading-relaxed text-xl">
                Transform your space with our expert interior design services. Creating beautiful, functional homes that reflect your style.
              </p>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-semibold mb-4">Stay Updated</h4>
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Enter your email"
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/60"
                />
                <Button variant="outline" className="border-background/20 text-background hover:bg-background hover:text-foreground">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-background/80 hover:text-primary-light transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-background/80 hover:text-primary-light transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-6">Get in Touch</h4>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <item.icon className="h-5 w-5 text-primary-light mt-0.5 flex-shrink-0" />
                  <span className="text-background/80">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h5 className="font-semibold mb-4">Follow Us</h5>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="p-2 rounded-full bg-background/10 hover:bg-primary-light transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-background/20" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/70 text-sm">
            © 2024 Ajinkyatara Associates. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerLinks.support.slice(2).map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="text-background/70 hover:text-primary-light transition-colors duration-300 text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
