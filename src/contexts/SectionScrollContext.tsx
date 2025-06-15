import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface SectionScrollContextType {
  activeSection: string;
  setActiveSection: (section: string) => void;
  registerSection: (id: string) => void;
  sections: string[];
}

const SectionScrollContext = createContext<SectionScrollContextType>({
  activeSection: '',
  setActiveSection: () => {},
  registerSection: () => {},
  sections: [],
});

export const useSectionScroll = () => useContext(SectionScrollContext);

interface SectionScrollProviderProps {
  children: ReactNode;
}

const SectionScrollProvider: React.FC<SectionScrollProviderProps> = ({ children }) => {
  const [activeSection, setActiveSection] = useState('');
  const [sections, setSections] = useState<string[]>([]);

  const registerSection = (id: string) => {
    setSections((prev) => {
      if (!prev.includes(id)) {
        return [...prev, id];
      }
      return prev;
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map((id) => document.getElementById(id));
      const validSectionElements = sectionElements.filter((el): el is HTMLElement => el !== null);
      
      if (validSectionElements.length === 0) return;

      const viewportHeight = window.innerHeight;
      const scrollPosition = window.scrollY + viewportHeight / 3;

      for (const section of validSectionElements) {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections]);

  return (
    <SectionScrollContext.Provider value={{ activeSection, setActiveSection, registerSection, sections }}>
      {children}
    </SectionScrollContext.Provider>
  );
};

export default SectionScrollProvider;