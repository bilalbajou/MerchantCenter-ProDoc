import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
              Documentation
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link to="/docs/overview" className="hover:text-blue-600 dark:hover:text-blue-400">
                  Overview
                </Link>
              </li>
              <li>
                <Link to="/docs/setup" className="hover:text-blue-600 dark:hover:text-blue-400">
                  Setup Guide
                </Link>
              </li>
              <li>
                <Link to="/docs/feed-basics" className="hover:text-blue-600 dark:hover:text-blue-400">
                  Feed Basics
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
              Resources
            </h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
                  Best Practices
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
              About
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Comprehensive documentation for Google Merchant Center compliance and optimization.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} Merchant Center Documentation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

