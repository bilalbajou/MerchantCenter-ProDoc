import { Link } from 'react-router-dom';
import DocCard from '../components/DocCard';
import { BookOpen, Globe, FileText, Building, Package, Truck, CheckCircle } from 'lucide-react';
import docsData from '../data/docs.json';

const Home = () => {
  const featuredPages = [
    {
      title: 'Purpose & Introduction',
      description: 'Learn about this documentation and Google Merchant Center',
      path: '/docs/purpose-introduction',
      icon: BookOpen,
    },
    {
      title: 'The Approval Process',
      description: 'Understand the complete approval process',
      path: '/docs/approval-process',
      icon: CheckCircle,
    },
    {
      title: 'Store Requirements',
      description: 'Security, legal pages, navigation, and checkout requirements',
      path: '/docs/security-mobile',
      icon: Globe,
    },
    {
      title: 'Product Feed',
      description: 'Learn about feed formats, attributes, and examples',
      path: '/docs/feed-definition',
      icon: Package,
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-900 dark:to-blue-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-5xl font-bold mb-4">
            Google Merchant Center
          </h1>
          <h2 className="text-3xl font-semibold mb-6 text-blue-100">
            Documentation
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mb-8">
            Complete guide to what your store must have to be accepted on Google Merchant Center. Learn all the requirements, policies, and verification steps needed for approval.
          </p>
          <Link
            to="/docs/overview"
            className="inline-block px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Documentation Sections
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {featuredPages.map((page) => (
            <DocCard key={page.path} {...page} />
          ))}
        </div>

        {/* All Sections */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            All Documentation
          </h2>
          <div className="space-y-8">
            {docsData.sections.map((section) => (
              <div key={section.id}>
                {section.title && (
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    {section.title}
                  </h3>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {section.pages.map((page) => (
                    <Link
                      key={page.id}
                      to={page.path}
                      className="block p-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-md transition-all"
                    >
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        {page.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Learn more about {page.title.toLowerCase()}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

