/**
 * About page with personal information, experience, education, and skills
 */
import React from 'react';
import { Calendar, MapPin, Award, BookOpen, Users, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { useLanguage } from '../contexts/LanguageContext';
import { useContent } from '../contexts/ContentContext';

const AboutPage: React.FC = () => {
  const { isRTL, t } = useLanguage();
  const { personalInfo } = useContent();

  const experience = [
    {
      title: 'Graphic Designer',
      company: 'Al Masjid Al Nabawi',
      location: 'Al-Madina, Saudi Arabia',
      period: '2022 - Present',
      description: 'Created impactful designs for awareness and guidance campaigns. Enhanced branding through innovative design solutions.',
      current: true
    },
    {
      title: 'Graphic & Printing Specialist',
      company: 'Al Fanoos Press',
      location: 'Al-Madina, Saudi Arabia',
      period: '2020 - 2022',
      description: 'Designed engaging graphic & printing content and printable items. Collaborated with cross-functional teams to deliver projects on time.',
      current: false
    },
    {
      title: 'Freelance Designer',
      company: 'Self Employed',
      location: 'Remote',
      period: '2015 - Present',
      description: 'Delivered custom design solutions for clients across various industries.',
      current: true
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Graphic & Multimedia',
      institution: 'University',
      year: '2021',
      icon: BookOpen
    },
    {
      degree: 'TOFEL ITP',
      institution: 'Language Center',
      year: '2021',
      icon: Globe
    },
    {
      degree: 'Designing Diploma',
      institution: 'Design Institute',
      year: '2016',
      icon: Award
    },
    {
      degree: 'English Advanced Diploma',
      institution: 'Language Institute',
      year: '2018',
      icon: Globe
    },
    {
      degree: 'Diplôme français junior',
      institution: 'French Institute',
      year: '2022',
      icon: Globe
    },
    {
      degree: 'ICDL Certificate',
      institution: 'Computer Center',
      year: '2016',
      icon: BookOpen
    }
  ];

  const skills = [
    'Adobe Creative Suite',
    'Photoshop',
    'Illustrator',
    'InDesign',
    '3D Modeling & Rendering',
    'UI/UX Design',
    'Typography',
    'Branding Design',
    'Print Design',
    'Logo Design',
    'Brand Identity',
    'Creative Direction'
  ];

  const languages = [
    { name: 'Arabic', level: 'Mother Tongue', percentage: 100 },
    { name: 'English', level: 'Advanced', percentage: 90 },
    { name: 'French', level: 'Elementary', percentage: 40 }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-b from-[#d9cab1]/20 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`space-y-6 ${isRTL ? 'lg:order-2' : ''}`}>
              <h1 className="text-4xl lg:text-5xl font-bold text-[#8f1819]">
                {t('about.title')}
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                {personalInfo.bio}
              </p>
              
              {/* Quick Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <MapPin className="w-5 h-5 text-[#8f1819]" />
                  <span className="text-gray-600">{personalInfo.location}</span>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <Calendar className="w-5 h-5 text-[#8f1819]" />
                  <span className="text-gray-600">9+ Years Experience</span>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <Users className="w-5 h-5 text-[#8f1819]" />
                  <span className="text-gray-600">50+ Happy Clients</span>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <Award className="w-5 h-5 text-[#8f1819]" />
                  <span className="text-gray-600">Multiple Certifications</span>
                </div>
              </div>
            </div>
            
            <div className={`${isRTL ? 'lg:order-1' : ''}`}>
              <div className="relative">
                <div className="w-80 h-80 mx-auto lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl bg-[#d9cab1] p-4">
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-[#d9cab1]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#8f1819] mb-12 text-center">
            {t('about.experience')}
          </h2>
          
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <Card key={index} className="border-[#d9cab1] hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3 rtl:space-x-reverse">
                        <h3 className="text-xl font-semibold text-[#8f1819]">
                          {exp.title}
                        </h3>
                        {exp.current && (
                          <Badge className="bg-[#8f1819] text-white">Current</Badge>
                        )}
                      </div>
                      <p className="text-[#9c7860] font-medium">{exp.company}</p>
                      <div className="flex items-center space-x-4 rtl:space-x-reverse text-sm text-gray-600">
                        <span className="flex items-center space-x-1 rtl:space-x-reverse">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </span>
                        <span className="flex items-center space-x-1 rtl:space-x-reverse">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 lg:mt-0 lg:max-w-md">
                      <p className="text-gray-600 text-sm">{exp.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#8f1819] mb-12 text-center">
            {t('about.education')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {education.map((edu, index) => {
              const Icon = edu.icon;
              return (
                <Card key={index} className="border-[#d9cab1] hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                      <div className="w-10 h-10 bg-[#8f1819] rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-[#8f1819] text-lg">{edu.degree}</CardTitle>
                        <p className="text-sm text-[#9c7860]">{edu.year}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600 text-sm">{edu.institution}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills & Languages */}
      <section className="py-16 bg-[#d9cab1]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Skills */}
            <div>
              <h2 className="text-3xl font-bold text-[#8f1819] mb-8">
                {t('about.skills')}
              </h2>
              
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    className="bg-[#8f1819] text-white hover:bg-[#bd7b6a] px-4 py-2 text-sm font-medium"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h2 className="text-3xl font-bold text-[#8f1819] mb-8">
                {t('about.languages')}
              </h2>
              
              <div className="space-y-6">
                {languages.map((lang, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-[#8f1819]">{lang.name}</span>
                      <span className="text-sm text-[#9c7860]">{lang.level}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-[#8f1819] h-2 rounded-full transition-all duration-300"
                        style={{ width: `${lang.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;