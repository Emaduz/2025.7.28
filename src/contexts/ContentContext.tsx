/**
 * Content management context for handling portfolio data and site content
 */
import React, { createContext, useContext, useState, useEffect } from 'react';

interface Project {
  id: string;
  title: string;
  description: string;
  category: 'logos' | 'branding' | 'print' | 'ui';
  images: string[];
  featured: boolean;
}

interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  phone: string;
  email: string;
  location: string;
  profileImage: string;
  logoImage: string;
}

interface ContentContextType {
  projects: Project[];
  personalInfo: PersonalInfo;
  addProject: (project: Omit<Project, 'id'>) => void;
  updateProject: (id: string, project: Partial<Project>) => void;
  deleteProject: (id: string) => void;
  updatePersonalInfo: (info: Partial<PersonalInfo>) => void;
}

const initialPersonalInfo: PersonalInfo = {
  name: 'EmadAlddine Ismael',
  title: 'Senior Graphic Designer',
  bio: 'Creative and experienced Branding and Logo Designer with over 9 years of expertise in developing impactful visual identities. Skilled in managing design teams, fostering collaboration, and ensuring the successful execution of creative projects.',
  phone: '+966 504487308',
  email: 'Emad.i202020@gmail.com',
  location: 'Al-Madina, Saudi Arabia',
  profileImage: 'https://pub-cdn.sider.ai/u/U0GVH7E0AK4/web-coder/6886515794baea4807edd079/resource/8d3a6ed1-c027-4ee6-9103-986b671ccc0a.jpg',
  logoImage: 'https://pub-cdn.sider.ai/u/U0GVH7E0AK4/web-coder/6886515794baea4807edd079/resource/0f1c13e8-cf81-4f41-83c1-0f7a4f36e010.png'
};

const initialProjects: Project[] = [
  {
    id: '1',
    title: 'Logo Design Collection',
    description: 'A collection of modern logo designs for various clients',
    category: 'logos',
    images: ['https://pub-cdn.sider.ai/u/U0GVH7E0AK4/web-coder/6886515794baea4807edd079/resource/3fa29827-b94c-4d4c-9561-e2af46dce7b3.jpg'],
    featured: true
  },
  {
    id: '2',
    title: 'Brand Identity System',
    description: 'Complete brand identity package including logo, colors, and guidelines',
    category: 'branding',
    images: ['https://pub-cdn.sider.ai/u/U0GVH7E0AK4/web-coder/6886515794baea4807edd079/resource/2637f619-e959-487b-b89a-8b10ed5102d5.jpg'],
    featured: true
  },
  {
    id: '3',
    title: 'Print Design Portfolio',
    description: 'Various print materials including brochures, flyers, and business cards',
    category: 'print',
    images: ['https://pub-cdn.sider.ai/u/U0GVH7E0AK4/web-coder/6886515794baea4807edd079/resource/ebb53587-47e5-4da9-b2a6-933c2f0fb59e.jpg'],
    featured: false
  },
  {
    id: '4',
    title: 'UI/UX Design Projects',
    description: 'Mobile app and web interface designs',
    category: 'ui',
    images: ['https://pub-cdn.sider.ai/u/U0GVH7E0AK4/web-coder/6886515794baea4807edd079/resource/56e38699-3847-4493-a2ef-8ec70ef28e7a.jpg'],
    featured: true
  }
];

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>(initialPersonalInfo);

  // Load from localStorage on mount
  useEffect(() => {
    const savedProjects = localStorage.getItem('portfolio-projects');
    const savedPersonalInfo = localStorage.getItem('portfolio-personal-info');
    
    if (savedProjects) {
      setProjects(JSON.parse(savedProjects));
    }
    
    if (savedPersonalInfo) {
      setPersonalInfo(JSON.parse(savedPersonalInfo));
    }
  }, []);

  // Save to localStorage when data changes
  useEffect(() => {
    localStorage.setItem('portfolio-projects', JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem('portfolio-personal-info', JSON.stringify(personalInfo));
  }, [personalInfo]);

  const addProject = (project: Omit<Project, 'id'>) => {
    const newProject = {
      ...project,
      id: Date.now().toString()
    };
    setProjects(prev => [...prev, newProject]);
  };

  const updateProject = (id: string, updatedProject: Partial<Project>) => {
    setProjects(prev => prev.map(project => 
      project.id === id ? { ...project, ...updatedProject } : project
    ));
  };

  const deleteProject = (id: string) => {
    setProjects(prev => prev.filter(project => project.id !== id));
  };

  const updatePersonalInfo = (info: Partial<PersonalInfo>) => {
    setPersonalInfo(prev => ({ ...prev, ...info }));
  };

  return (
    <ContentContext.Provider value={{
      projects,
      personalInfo,
      addProject,
      updateProject,
      deleteProject,
      updatePersonalInfo
    }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};