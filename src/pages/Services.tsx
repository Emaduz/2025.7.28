/**
 * Services page showcasing design services offered
 */
import React from 'react';
import { Palette, Layers, FileText, Monitor, Printer, Camera, PenTool, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router';

const ServicesPage: React.FC = () => {
  const { isRTL, t } = useLanguage();

  const services = [
    {
      icon: Palette,
      title: t('services.logo'),
      description: 'Professional logo design that represents your brand identity with creativity and impact.',
      features: ['Custom Logo Design', 'Multiple Concepts', 'Vector Files', 'Brand Guidelines'],
      price: 'Starting from $299',
      popular: true
    },
    {
      icon: Layers,
      title: t('services.branding'),
      description: 'Complete brand identity systems including colors, typography, and visual guidelines.',
      features: ['Logo Design', 'Color Palette', 'Typography System', 'Brand Guidelines', 'Business Cards'],
      price: 'Starting from $599',
      popular: true
    },
    {
      icon: FileText,
      title: t('services.print'),
      description: 'Print materials including brochures, flyers, business cards, and marketing materials.',
      features: ['Brochure Design', 'Flyer Design', 'Business Cards', 'Poster Design', 'Print Ready Files'],
      price: 'Starting from $199',
      popular: false
    },
    {
      icon: Monitor,
      title: t('services.ui'),
      description: 'User interface and user experience design for mobile apps and web applications.',
      features: ['UI Design', 'UX Research', 'Wireframing', 'Prototyping', 'Mobile First'],
      price: 'Starting from $799',
      popular: false
    },
    {
      icon: Printer,
      title: 'Packaging Design',
      description: 'Creative packaging solutions that make your products stand out on the shelf.',
      features: ['Package Design', '3D Mockups', 'Label Design', 'Box Design', 'Print Specifications'],
      price: 'Starting from $399',
      popular: false
    },
    {
      icon: Camera,
      title: 'Social Media Design',
      description: 'Eye-catching social media graphics and templates for all major platforms.',
      features: ['Instagram Posts', 'Facebook Covers', 'LinkedIn Banners', 'Story Templates', 'Social Media Kit'],
      price: 'Starting from $149',
      popular: true
    },
    {
      icon: PenTool,
      title: 'Illustration',
      description: 'Custom illustrations for books, websites, marketing materials, and brand assets.',
      features: ['Digital Illustration', 'Character Design', 'Icon Design', 'Infographics', 'Vector Art'],
      price: 'Starting from $249',
      popular: false
    },
    {
      icon: Target,
      title: 'Marketing Materials',
      description: 'Complete marketing collateral design including ads, banners, and promotional materials.',
      features: ['Advertisement Design', 'Banner Design', 'Brochures', 'Catalogs', 'Marketing Campaigns'],
      price: 'Starting from $199',
      popular: false
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We start with understanding your needs, goals, and brand vision through detailed consultation.'
    },
    {
      step: '02',
      title: 'Concept',
      description: 'Multiple creative concepts are developed based on your requirements and brand guidelines.'
    },
    {
      step: '03',
      title: 'Design',
      description: 'Selected concepts are refined and developed into final designs with attention to detail.'
    },
    {
      step: '04',
      title: 'Delivery',
      description: 'Final files are delivered in all required formats with complete documentation and guidelines.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-b from-[#d9cab1]/20 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#8f1819] mb-4">
            {t('services.title')}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Professional design services to elevate your brand and create meaningful connections with your audience
          </p>
          <Button 
            asChild
            className="bg-[#8f1819] hover:bg-[#bd7b6a] text-white px-8 py-3"
          >
            <Link to="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={index} 
                  className={`relative hover:shadow-xl transition-all duration-300 border-[#d9cab1] ${
                    service.popular ? 'ring-2 ring-[#8f1819]' : ''
                  }`}
                >
                  {service.popular && (
                    <Badge className="absolute -top-2 -right-2 bg-[#8f1819] text-white">
                      Popular
                    </Badge>
                  )}
                  
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-[#8f1819] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-[#8f1819] mb-2">
                      {service.title}
                    </CardTitle>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-[#8f1819] rounded-full mr-3 rtl:mr-0 rtl:ml-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="pt-4 border-t border-[#d9cab1]">
                      <p className="text-lg font-semibold text-[#8f1819] mb-3">
                        {service.price}
                      </p>
                      <Button 
                        asChild
                        className="w-full bg-[#8f1819] hover:bg-[#bd7b6a] text-white"
                      >
                        <Link to="/contact">Get Quote</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-[#d9cab1]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#8f1819] mb-4">
              How I Work
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A structured approach to deliver exceptional design solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#8f1819] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-[#8f1819] mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#8f1819] mb-6">
                Why Choose My Services?
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="w-6 h-6 bg-[#8f1819] rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#8f1819] mb-1">9+ Years of Experience</h4>
                    <p className="text-gray-600 text-sm">Extensive experience in graphic design and brand development</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="w-6 h-6 bg-[#8f1819] rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#8f1819] mb-1">Client-Focused Approach</h4>
                    <p className="text-gray-600 text-sm">Every project is tailored to meet specific client needs and goals</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="w-6 h-6 bg-[#8f1819] rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#8f1819] mb-1">Fast Turnaround</h4>
                    <p className="text-gray-600 text-sm">Efficient delivery without compromising on quality</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="w-6 h-6 bg-[#8f1819] rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#8f1819] mb-1">Unlimited Revisions</h4>
                    <p className="text-gray-600 text-sm">Work continues until you're 100% satisfied with the result</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-[#d9cab1]/10 rounded-2xl p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-[#8f1819] mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-gray-600 mb-6">
                  Let's discuss your project and create something amazing together
                </p>
                <Button 
                  asChild
                  className="bg-[#8f1819] hover:bg-[#bd7b6a] text-white px-8 py-3"
                >
                  <Link to="/contact">Contact Me Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;