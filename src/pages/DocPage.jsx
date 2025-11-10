import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import CodeBlock from '../components/CodeBlock';
import docsData from '../data/docs.json';

const DocPage = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  useEffect(() => {
    // Find current page
    let foundPage = null;
    let foundSection = null;

    for (const section of docsData.sections) {
      const page = section.pages.find((p) => p.path === location.pathname);
      if (page) {
        foundPage = page;
        foundSection = section;
        break;
      }
    }

    if (foundPage) {
      setCurrentPage(foundPage);
      
      // Build breadcrumbs
      setBreadcrumbs([
        { label: 'Home', path: '/' },
        { label: 'Documentation', path: '/docs/overview' },
        { label: foundSection.title, path: '#' },
        { label: foundPage.title, path: foundPage.path },
      ]);

      // Find previous and next pages
      const allPages = [];
      docsData.sections.forEach((section) => {
        section.pages.forEach((page) => {
          allPages.push({ ...page, sectionTitle: section.title });
        });
      });

      const currentIndex = allPages.findIndex((p) => p.id === foundPage.id);
      
      if (currentIndex > 0) {
        setPrevPage(allPages[currentIndex - 1]);
      } else {
        setPrevPage(null);
      }

      if (currentIndex < allPages.length - 1) {
        setNextPage(allPages[currentIndex + 1]);
      } else {
        setNextPage(null);
      }

      // Update document title
      document.title = `${foundPage.title} - Merchant Center Docs`;
    }
  }, [location.pathname]);

  if (!currentPage) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Page Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            The documentation page you're looking for doesn't exist.
          </p>
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Go Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-3 px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumbs */}
      <nav className="mb-8" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
          {breadcrumbs.map((crumb, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && <ChevronRight className="w-4 h-4 mx-2" />}
              {index === breadcrumbs.length - 1 ? (
                <span className="text-gray-900 dark:text-white font-medium">
                  {crumb.label}
                </span>
              ) : (
                <Link
                  to={crumb.path}
                  className="hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {crumb.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>

      {/* Page Title */}
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
        {currentPage.title}
      </h1>

      {/* Content */}
      <div className="prose prose-lg dark:prose-invert max-w-none">
        {currentPage.content.sections.map((section, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-8">
              {section.heading}
            </h2>
            {section.content && (
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                {section.content}
              </p>
            )}
            
            {section.table && (
              <div className="my-6 overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      {section.table.headers.map((header, headerIndex) => (
                        <th
                          key={headerIndex}
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                    {section.table.rows.map((row, rowIndex) => (
                      <tr
                        key={rowIndex}
                        className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                      >
                        {row.map((cell, cellIndex) => {
                          // Allow wrapping for Description column (usually last column) and other longer content
                          const isLastColumn = cellIndex === row.length - 1;
                          return (
                            <td
                              key={cellIndex}
                              className={`px-6 py-4 text-sm text-gray-700 dark:text-gray-300 ${
                                isLastColumn ? 'whitespace-normal' : 'whitespace-nowrap'
                              }`}
                            >
                              {cell}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            
            {section.list && (
              <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700 dark:text-gray-300">
                {section.list.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            )}

            {section.code && (
              <div className="my-6">
                <CodeBlock code={section.code} />
              </div>
            )}

            {section.image && (
              <div className="my-6">
                <img
                  src={section.image}
                  alt={section.imageAlt || section.heading}
                  className="w-full rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
                />
                {section.imageCaption && (
                  <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-2 italic">
                    {section.imageCaption}
                  </p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between">
        {prevPage ? (
          <Link
            to={prevPage.path}
            className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
          >
            <ChevronLeft className="w-5 h-5" />
            <div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Previous</div>
              <div className="font-medium">{prevPage.title}</div>
            </div>
          </Link>
        ) : (
          <div></div>
        )}

        {nextPage && (
          <Link
            to={nextPage.path}
            className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-right"
          >
            <div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Next</div>
              <div className="font-medium">{nextPage.title}</div>
            </div>
            <ChevronRight className="w-5 h-5" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default DocPage;

