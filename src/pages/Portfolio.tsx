/**
 * Portfolio page with project gallery, filters, and lightbox functionality
 */
import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { useLanguage } from '../contexts/LanguageContext';
import { useContent } from '../contexts/ContentContext';

const PortfolioPage: React.FC = () => {
  const { isRTL, t } = useLanguage();
  const { projects } = useContent();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxProject, setLightboxProject] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = [
    { key: 'all', label: t('portfolio.all') },
    { key: 'logos', label: t('portfolio.logos') },
    { key: 'branding', label: t('portfolio.branding') },
    { key: 'print', label: t('portfolio.print') },
    { key: 'ui', label: t('portfolio.ui') },
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const openLightbox = (project: any, imageIndex: number = 0) => {
    setLightboxProject(project);
    setCurrentImageIndex(imageIndex);
  };

  const closeLightbox = () => {
    setLightboxProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (lightboxProject && currentImageIndex < lightboxProject.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (lightboxProject && currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-b from-[#d9cab1]/20 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#8f1819] mb-4">
            {t('portfolio.title')}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore my collection of creative projects across various design disciplines
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-[#d9cab1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                variant={selectedCategory === category.key ? "default" : "outline"}
                className={`px-6 py-2 ${
                  selectedCategory === category.key
                    ? 'bg-[#8f1819] text-white hover:bg-[#bd7b6a]'
                    : 'border-[#8f1819] text-[#8f1819] hover:bg-[#8f1819] hover:text-white bg-transparent'
                }`}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card 
                key={project.id} 
                className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-[#d9cab1]"
                onClick={() => openLightbox(project)}
              >
                <CardContent className="p-0">
                  <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-t-lg">
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-[#9c7860] bg-[#d9cab1] px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="text-xs font-medium text-white bg-[#8f1819] px-2 py-1 rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold text-[#8f1819] mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {project.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-sm text-[#9c7860]">
                        {project.images.length} image{project.images.length > 1 ? 's' : ''}
                      </span>
                      <ExternalLink className="w-4 h-4 text-[#8f1819] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-gray-500">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxProject && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            {/* Close Button */}
            <Button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-white text-black hover:bg-gray-200 p-2"
              size="sm"
            >
              <X className="w-5 h-5" />
            </Button>

            {/* Navigation Buttons */}
            {lightboxProject.images.length > 1 && (
              <>
                <Button
                  onClick={prevImage}
                  disabled={currentImageIndex === 0}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white text-black hover:bg-gray-200 p-2"
                  size="sm"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button
                  onClick={nextImage}
                  disabled={currentImageIndex === lightboxProject.images.length - 1}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white text-black hover:bg-gray-200 p-2"
                  size="sm"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </>
            )}

            {/* Image */}
            <div className="bg-white rounded-lg overflow-hidden">
              <img
                src={lightboxProject.images[currentImageIndex]}
                alt={lightboxProject.title}
                className="w-full h-96 object-contain bg-gray-100"
              />
              
              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-[#8f1819]">
                    {lightboxProject.title}
                  </h3>
                  <span className="text-sm font-medium text-[#9c7860] bg-[#d9cab1] px-3 py-1 rounded-full">
                    {lightboxProject.category}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">
                  {lightboxProject.description}
                </p>
                
                {/* Image Counter */}
                {lightboxProject.images.length > 1 && (
                  <div className="text-center text-sm text-gray-500">
                    {currentImageIndex + 1} of {lightboxProject.images.length}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioPage;