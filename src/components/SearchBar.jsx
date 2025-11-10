import { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import docsData from '../data/docs.json';

const SearchBar = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const searchQuery = query.toLowerCase();
    const allResults = [];

    docsData.sections.forEach((section) => {
      section.pages.forEach((page) => {
        const titleMatch = page.title.toLowerCase().includes(searchQuery);
        const contentMatch = JSON.stringify(page.content)
          .toLowerCase()
          .includes(searchQuery);

        if (titleMatch || contentMatch) {
          allResults.push({
            ...page,
            sectionTitle: section.title,
          });
        }
      });
    });

    setResults(allResults);
  }, [query]);

  const handleSelect = (page) => {
    navigate(page.path);
    setQuery('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-start justify-center pt-20 px-4">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl w-full max-w-2xl max-h-[80vh] overflow-hidden">
        <div className="flex items-center border-b border-gray-200 dark:border-gray-800 px-4 py-3">
          <Search className="w-5 h-5 text-gray-400 mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search documentation..."
            className="flex-1 bg-transparent text-gray-900 dark:text-white placeholder-gray-400 outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>
        
        {results.length > 0 && (
          <div className="max-h-96 overflow-y-auto">
            {results.map((result) => (
              <button
                key={result.id}
                onClick={() => handleSelect(result)}
                className="w-full text-left px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 border-b border-gray-200 dark:border-gray-800 last:border-0 transition-colors"
              >
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  {result.sectionTitle}
                </div>
                <div className="text-base font-medium text-gray-900 dark:text-white">
                  {result.title}
                </div>
              </button>
            ))}
          </div>
        )}

        {query && results.length === 0 && (
          <div className="px-4 py-8 text-center text-gray-500 dark:text-gray-400">
            No results found for "{query}"
          </div>
        )}

        {!query && (
          <div className="px-4 py-8 text-center text-gray-500 dark:text-gray-400">
            Start typing to search...
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;

