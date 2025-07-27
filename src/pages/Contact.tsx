/**
 * Contact page with contact form and information
 */
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Linkedin, Instagram, Globe } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { useLanguage } from '../contexts/LanguageContext';
import { useContent } from '../contexts/ContentContext';

const ContactPage: React.FC = () => {
  const { isRTL, t } = useLanguage();
  const { personalInfo } = useContent();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`
    },
    {
      icon: Mail,
      title: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`
    },
    {
      icon: MapPin,
      title: 'Location',
      value: personalInfo.location,
      href: '#'
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-600' },
    { icon: Globe, href: '#', label: 'Portfolio', color: 'hover:text-green-600' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 2000);
  };

  const services = [
    'Logo Design',
    'Brand Identity',
    'Print Design',
    'UI/UX Design',
    'Packaging Design',
    'Social Media Design'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-b from-[#d9cab1]/20 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#8f1819] mb-4">
            {t('contact.title')}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to bring your vision to life? Let's discuss your project and create something amazing together.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="border-[#d9cab1] shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#8f1819] mb-2">
                    Send Me a Message
                  </CardTitle>
                  <p className="text-gray-600">
                    Fill out the form below and I'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-[#8f1819] mb-2">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-gray-600">
                        Thank you for reaching out. I'll get back to you soon.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name" className="text-[#8f1819] font-medium">
                            {t('contact.name')} *
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="mt-1 border-[#d9cab1] focus:border-[#8f1819] focus:ring-[#8f1819]"
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email" className="text-[#8f1819] font-medium">
                            {t('contact.email')} *
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="mt-1 border-[#d9cab1] focus:border-[#8f1819] focus:ring-[#8f1819]"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="subject" className="text-[#8f1819] font-medium">
                          Subject *
                        </Label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          required
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="mt-1 border-[#d9cab1] focus:border-[#8f1819] focus:ring-[#8f1819]"
                          placeholder="Project inquiry"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="message" className="text-[#8f1819] font-medium">
                          {t('contact.message')} *
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleInputChange}
                          className="mt-1 border-[#d9cab1] focus:border-[#8f1819] focus:ring-[#8f1819] resize-none"
                          placeholder="Tell me about your project, timeline, and budget..."
                        />
                      </div>
                      
                      <Button 
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#8f1819] hover:bg-[#bd7b6a] text-white py-3"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            {t('contact.send')}
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card className="border-[#d9cab1] shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#8f1819] mb-2">
                    {t('contact.info')}
                  </CardTitle>
                  <p className="text-gray-600">
                    Get in touch through any of these channels
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <div key={index} className="flex items-center space-x-4 rtl:space-x-reverse">
                        <div className="w-12 h-12 bg-[#8f1819] rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-[#8f1819]">{info.title}</h4>
                          <a 
                            href={info.href}
                            className="text-gray-600 hover:text-[#8f1819] transition-colors duration-200"
                          >
                            {info.value}
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>

              {/* Services List */}
              <Card className="border-[#d9cab1] shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#8f1819] mb-2">
                    Services I Offer
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {services.map((service, index) => (
                      <div key={index} className="flex items-center space-x-2 rtl:space-x-reverse">
                        <div className="w-2 h-2 bg-[#8f1819] rounded-full"></div>
                        <span className="text-gray-600 text-sm">{service}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="border-[#d9cab1] shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#8f1819] mb-2">
                    Follow Me
                  </CardTitle>
                  <p className="text-gray-600">
                    Connect with me on social media
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4 rtl:space-x-reverse">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.href}
                          className={`w-12 h-12 bg-[#d9cab1] hover:bg-[#8f1819] rounded-lg flex items-center justify-center transition-all duration-200 ${social.color} hover:text-white group`}
                          aria-label={social.label}
                        >
                          <Icon className="w-6 h-6 text-[#8f1819] group-hover:text-white" />
                        </a>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#8f1819] text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold mb-4">
            Let's Create Something Amazing
          </h3>
          <p className="text-xl text-[#d9cab1] mb-6">
            Every great project starts with a conversation. I'm here to listen and help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              className="bg-white text-[#8f1819] hover:bg-[#d9cab1] px-8 py-3"
            >
              <a href={`tel:${personalInfo.phone}`}>
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </Button>
            <Button 
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#8f1819] px-8 py-3 bg-transparent"
            >
              <a href={`mailto:${personalInfo.email}`}>
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;