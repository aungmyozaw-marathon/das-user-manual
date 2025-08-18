import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Search, FileText, Users, Settings, ArrowRight } from 'lucide-react';
import { SearchResult } from '../types';

const SearchPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const query = searchParams.get('q') || '';

  useEffect(() => {
    setSearchQuery(query);
    if (query) {
      performSearch(query);
    }
  }, [query]);

  const performSearch = async (query: string) => {
    setIsLoading(true);
    
    // Simulate search delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Mock search results - in a real app, this would call an API
    const mockResults: SearchResult[] = [
      {
        id: '1',
        title: 'Getting Started with DAS',
        path: '/getting-started/welcome',
        excerpt: 'Learn how to get started with DAS and set up your account for the first time.',
        type: 'page'
      },
      {
        id: '2',
        title: 'Creating Your First Invoice',
        path: '/invoices/introduction',
        excerpt: 'Step-by-step guide to creating and sending your first invoice to customers.',
        type: 'section'
      },
      {
        id: '3',
        title: 'Managing Customers and Vendors',
        path: '/customers-vendors/introduction',
        excerpt: 'Learn how to add, edit, and manage your customer and vendor information.',
        type: 'page'
      },
      {
        id: '4',
        title: 'Setting Up Bank Accounts',
        path: '/banking/add-accounts',
        excerpt: 'Configure your bank accounts and set up automatic transaction imports.',
        type: 'subsection'
      },
      {
        id: '5',
        title: 'Customizing Your Dashboard',
        path: '/home/custom-dashboards',
        excerpt: 'Personalize your dashboard to show the information that matters most to you.',
        type: 'page'
      }
    ];

    // Filter results based on query
    const filteredResults = mockResults.filter(result =>
      result.title.toLowerCase().includes(query.toLowerCase()) ||
      result.excerpt.toLowerCase().includes(query.toLowerCase())
    );

    setResults(filteredResults);
    setIsLoading(false);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'page':
        return <FileText className="h-4 w-4" />;
      case 'section':
        return <Users className="h-4 w-4" />;
      case 'subsection':
        return <Settings className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'page':
        return 'bg-blue-100 text-blue-800';
      case 'section':
        return 'bg-green-100 text-green-800';
      case 'subsection':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Search Header */}
      <div className="content-card">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Search Documentation</h1>
        <form onSubmit={handleSearch} className="relative">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for help articles, guides, and documentation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-lg"
            />
          </div>
        </form>
      </div>

      {/* Search Results */}
      {query && (
        <div className="content-card">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Search Results for "{query}"
            </h2>
            {!isLoading && (
              <p className="text-sm text-gray-500">
                {results.length} result{results.length !== 1 ? 's' : ''} found
              </p>
            )}
          </div>

          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
              <span className="ml-3 text-gray-600">Searching...</span>
            </div>
          ) : results.length > 0 ? (
            <div className="space-y-4">
              {results.map((result) => (
                <div
                  key={result.id}
                  onClick={() => navigate(result.path)}
                  className="p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:shadow-md transition-all duration-200 cursor-pointer group"
                >
                  <div className="flex items-start space-x-3">
                    <div className={`w-8 h-8 ${getTypeColor(result.type)} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      {getTypeIcon(result.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-lg font-medium text-gray-900 group-hover:text-primary-600 transition-colors duration-200">
                          {result.title}
                        </h3>
                        <span className={`px-2 py-1 text-xs rounded-full ${getTypeColor(result.type)}`}>
                          {result.type}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-2">{result.excerpt}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <span className="font-mono">{result.path}</span>
                        <ArrowRight className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No results found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search terms or browse our documentation categories.
              </p>
              <div className="space-y-2">
                <p className="text-sm text-gray-500">Popular searches:</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {['invoice', 'customer', 'banking', 'reports', 'settings'].map((term) => (
                    <button
                      key={term}
                      onClick={() => navigate(`/search?q=${term}`)}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors duration-200"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Search Tips */}
      {!query && (
        <div className="content-card">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Search Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Use specific keywords</h3>
              <p className="text-gray-600 text-sm">
                Instead of "how to invoice", try "create invoice" or "invoice template"
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Search by feature</h3>
              <p className="text-gray-600 text-sm">
                Look for specific features like "bank reconciliation" or "customer portal"
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Use action words</h3>
              <p className="text-gray-600 text-sm">
                Start with verbs like "create", "edit", "delete", "export", or "import"
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-2">Browse categories</h3>
              <p className="text-gray-600 text-sm">
                Use the sidebar to explore specific sections of our documentation
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
