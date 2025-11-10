import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight, FileText } from 'lucide-react';
import docsData from '../data/docs.json';

const Sidebar = () => {
  const location = useLocation();
  const [expandedSections, setExpandedSections] = useState(() => {
    // Expand section if current page is in it, or if section has no title
    const currentPath = location.pathname;
    const expanded = {};
    docsData.sections.forEach((section) => {
      const hasActivePage = section.pages.some(
        (page) => page.path === currentPath
      );
      // Expand by default if no title (always show pages) or if current page is in section
      expanded[section.id] = !section.title || hasActivePage;
    });
    return expanded;
  });

  const toggleSection = (sectionId) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  // Smooth scroll to top when route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <aside className="hidden lg:block w-64 flex-shrink-0 border-r border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
      <div className="sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto py-6 px-4 sidebar-scroll">
        <nav className="space-y-2">
          {docsData.sections.map((section) => (
            <div key={section.id}>
              {section.title && (
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex items-center justify-between px-3 py-2 text-sm font-semibold text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
                >
                  <span>{section.title}</span>
                  {expandedSections[section.id] ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </button>
              )}
              
              {(!section.title || expandedSections[section.id]) && (
                <div className={section.title ? "ml-4 mt-1 space-y-1" : "space-y-1"}>
                  {section.pages.map((page) => (
                    <Link
                      key={page.id}
                      to={page.path}
                      className={`flex items-center space-x-2 px-3 py-2 text-sm rounded-md transition-colors ${
                        location.pathname === page.path
                          ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-medium'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                    >
                      <FileText className="w-4 h-4" />
                      <span>{page.title}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;

