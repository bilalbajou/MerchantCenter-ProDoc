import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const DocCard = ({ title, description, path, icon: Icon }) => {
  return (
    <Link
      to={path}
      className="block p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-lg transition-all group"
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          {Icon && (
            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-3">
              <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
          )}
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {title}
          </h3>
          {description && (
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {description}
            </p>
          )}
        </div>
        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex-shrink-0 ml-4" />
      </div>
    </Link>
  );
};

export default DocCard;

