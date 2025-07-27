/**
 * Homepage component with hero section and featured work
 */
import React from 'react';
import { Link } from 'react-router';
import { ArrowRight, ArrowLeft, Eye, Download } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { useLanguage } from '../contexts/LanguageContext';
import { useContent } from '../contexts/ContentContext';

const HomePage: React.FC = () => {
  const { isRTL, t } = useLanguage();
  const { personalInfo, projects } = useContent();
  
  const featuredProjects = projects.filter(project => project.featured).slice(0, 3);
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const services = [
    {
      title: t('services.logo'),
      description: 'Professional logo design that represents your brand identity',
      icon: '🎨'
    },
    {
      title: t('services.branding'),
      description: 'Complete brand identity systems with guidelines',
      icon: '🏷️'
    },
    {
      title: t('services.print'),
      description: 'Print materials including brochures, business cards, and more',
      icon: '📄'
    },
    {
      title: t('services.ui'),
      description: 'User interface and user experience design for digital products',
      icon: '💻'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#d9cab1]/20 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`space-y-8 ${isRTL ? 'lg:order-2' : ''}`}>
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-[#8f1819] leading-tight">
                  {personalInfo.name}
                </h1>
                <h2 className="text-2xl lg:text-3xl font-semibold text-[#9c7860]">
                  {t('hero.title')}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed max-w-md">
                  {t('hero.subtitle')}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild
                  className="bg-[#8f1819] hover:bg-[#bd7b6a] text-white px-8 py-3 text-lg"
                >
                  <Link to="/portfolio" className="flex items-center gap-2">
                    {t('hero.cta')}
                    <ArrowIcon className="w-5 h-5" />
                  </Link>
                </Button>
                
                <Button 
                  asChild
                  variant="outline"
                  className="border-[#8f1819] text-[#8f1819] hover:bg-[#8f1819] hover:text-white px-8 py-3 text-lg bg-transparent"
                >
                  <Link to="/contact" className="flex items-center gap-2">
                    {t('hero.contact')}
                  </Link>
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#d9cab1]">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#8f1819]">9+</div>
                  <div className="text-sm text-[#9c7860]">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#8f1819]">200+</div>
                  <div className="text-sm text-[#9c7860]">Projects Done</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#8f1819]">50+</div>
                  <div className="text-sm text-[#9c7860]">Happy Clients</div>
                </div>
              </div>
            </div>
            
            <div className={`${isRTL ? 'lg:order-1' : ''}`}>
              <div className="relative">
                <div className="w-80 h-80 mx-auto lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl bg-[#d9cab1] p-4">
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#8f1819] rounded-full opacity-20"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#bd7b6a] rounded-full opacity-30"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-[#8f1819] mb-4">
              Featured Work
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A selection of my best projects showcasing creativity and attention to detail
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 border-[#d9cab1]">
                <CardContent className="p-0">
                  <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-t-lg">
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-[#8f1819] mb-2">
                      {project.title}
                    </h4>
                    <p className="text-gray-600 mb-4">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-[#9c7860] bg-[#d9cab1] px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-[#8f1819] hover:text-[#bd7b6a] p-2"
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              asChild
              variant="outline"
              className="border-[#8f1819] text-[#8f1819] hover:bg-[#8f1819] hover:text-white px-8 py-3 bg-transparent"
            >
              <Link to="/portfolio">
                View All Projects
                <ArrowIcon className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-[#d9cab1]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-[#8f1819] mb-4">
              {t('services.title')}
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional design services to elevate your brand
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300 border-[#d9cab1] bg-white">
                <CardContent className="space-y-4">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h4 className="text-xl font-semibold text-[#8f1819]">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#8f1819] text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h3>
          <p className="text-xl text-[#d9cab1] mb-8 leading-relaxed">
            Let's work together to create something amazing for your brand
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              className="bg-white text-[#8f1819] hover:bg-[#d9cab1] px-8 py-3 text-lg"
            >
              <Link to="/contact">
                Get Started
                <ArrowIcon className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#8f1819] px-8 py-3 text-lg bg-transparent"
            >
              <Link to="/portfolio">
                View Portfolio
                <Download className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;