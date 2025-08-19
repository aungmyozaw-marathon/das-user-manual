import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import DashboardOverview from '../components/DashboardOverview';
import User from '../components/settings/User';
import Role from '../components/settings/Role';
import { getPageContent } from '../utils/contentUtils';
import Product from '../components/product/Product';
import ProductGroup from '../components/product/ProductGroup';
import InventoryAdjustment from '../components/product/InventoryAdjustment';

const DocumentationPage: React.FC = () => {
  const { pathname } = useLocation();
  
  // Special case for home overview - show dashboard
  if (pathname === '/home/overview') {
    return <DashboardOverview />;
  }
  
  // Special case for users settings - show user management
  if (pathname === '/settings/users') {
    return <User />;
  }

  // Special case for users settings - show user management
  if (pathname === '/settings/roles') {
    return <Role />;
  }

  // Special case for products - show product management
  if (pathname === '/products/products') {
    return <Product />;
  }

  // Special case for products - show product management
  if (pathname === '/products/product-groups') {
    return <ProductGroup />;
  }

  // Special case for products - show product management
  if (pathname === '/products/inventory-adjustments') {
    return <InventoryAdjustment />;
  }
  
  const content = getPageContent(pathname);

  if (!content) {
    return (
      <div className="content-card">
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Page Not Found</h1>
          <p className="text-gray-600 mb-6">
            The page you're looking for doesn't exist or hasn't been created yet.
          </p>
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-900">Available Content</h2>
            <p className="text-gray-600">
              This is a demo application. In a real implementation, you would have:
            </p>
            <ul className="text-left max-w-md mx-auto space-y-2 text-gray-600">
              <li>• Comprehensive documentation for each section</li>
              <li>• Step-by-step guides and tutorials</li>
              <li>• Video content and screenshots</li>
              <li>• Interactive examples and demos</li>
              <li>• Search functionality across all content</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Breadcrumb pathname={pathname} />
      
      <div className="content-card">
        <div className="prose max-w-none">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{content.title}</h1>
          
          {content.lastUpdated && (
            <p className="text-sm text-gray-500 mb-6">
              Last updated: {content.lastUpdated}
            </p>
          )}
          
          <div className="text-gray-700 leading-relaxed mb-8 prose prose-blue max-w-none">
            <div dangerouslySetInnerHTML={{ __html: content.content }} />
          </div>
          
          {content.sections && content.sections.length > 0 && (
            <div className="space-y-8">
              {content.sections.map((section) => (
                <div key={section.id} id={section.id} className="scroll-mt-20">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">{section.title}</h2>
                  <div className="text-gray-700 leading-relaxed mb-6 prose prose-blue max-w-none">
                    <div dangerouslySetInnerHTML={{ __html: section.content }} />
                  </div>
                  
                  {section.subsections && section.subsections.length > 0 && (
                    <div className="space-y-6">
                      {section.subsections.map((subsection) => (
                        <div key={subsection.id} id={subsection.id} className="scroll-mt-20">
                          <h3 className="text-xl font-medium text-gray-900 mb-3">{subsection.title}</h3>
                          <div className="text-gray-700 leading-relaxed prose prose-blue max-w-none">
                            <div dangerouslySetInnerHTML={{ __html: subsection.content }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      {/* Table of Contents */}
      {content.sections && content.sections.length > 0 && (
        <div className="content-card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h3>
          <nav className="space-y-2">
            {content.sections.map((section) => (
              <div key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="block text-primary-600 hover:text-primary-700 font-medium"
                >
                  {section.title}
                </a>
                {section.subsections && section.subsections.length > 0 && (
                  <div className="ml-4 mt-2 space-y-1">
                    {section.subsections.map((subsection) => (
                      <a
                        key={subsection.id}
                        href={`#${subsection.id}`}
                        className="block text-gray-600 hover:text-gray-800 text-sm"
                      >
                        {subsection.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
};

export default DocumentationPage;
