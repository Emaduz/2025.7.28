/**
 * Footer component with contact information and social links
 */
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Instagram, Globe } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useContent } from '../../contexts/ContentContext';

const Footer: React.FC = () => {
  const { isRTL, t } = useLanguage();
  const { personalInfo } = useContent();

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Globe, href: '#', label: 'Portfolio' },
  ];

  return (
    <footer className="bg-[#9c7860] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-2">
                <img 
                  src={personalInfo.logoImage} 
                  alt="Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">Eng.EmadAlddine</h3>
                <p className="text-[#d9cab1]">{t('hero.title')}</p>
              </div>
            </div>
            <p className="text-[#d9cab1] text-sm leading-relaxed">
              {personalInfo.bio.substring(0, 120)}...
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">{t('contact.info')}</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Phone className="w-5 h-5 text-[#d9cab1]" />
                <span className="text-[#d9cab1] text-sm">{personalInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Mail className="w-5 h-5 text-[#d9cab1]" />
                <span className="text-[#d9cab1] text-sm">{personalInfo.email}</span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <MapPin className="w-5 h-5 text-[#d9cab1]" />
                <span className="text-[#d9cab1] text-sm">{personalInfo.location}</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Follow Me</h4>
            <div className="flex space-x-4 rtl:space-x-reverse">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-[#8f1819] hover:bg-[#bd7b6a] rounded-lg flex items-center justify-center transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#a76552] mt-8 pt-8 text-center">
          <p className="text-[#d9cab1] text-sm">
            © 2024 EmadAlddine Ismael. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;