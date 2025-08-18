import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { menuData } from '../data/menuData';
import { Breadcrumb as BreadcrumbType } from '../types';

interface BreadcrumbProps {
  pathname: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ pathname }) => {
  const navigate = useNavigate();

  const generateBreadcrumbs = (pathname: string): BreadcrumbType[] => {
    const breadcrumbs: BreadcrumbType[] = [
      { title: 'Home', path: '/home' }
    ];

    if (pathname === '/home') {
      return breadcrumbs;
    }

    // Find the matching menu item and its parent
    for (const menuItem of menuData) {
      if (pathname.startsWith(menuItem.path)) {
        breadcrumbs.push({ title: menuItem.title, path: menuItem.path });
        
        if (menuItem.children) {
          for (const child of menuItem.children) {
            if (pathname === child.path) {
              breadcrumbs.push({ title: child.title, path: child.path });
              break;
            }
          }
        }
        break;
      }
    }

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs(pathname);

  return (
    <nav className="flex items-center space-x-2 text-sm">
      {breadcrumbs.map((breadcrumb, index) => (
        <React.Fragment key={breadcrumb.path}>
          {index === 0 ? (
            <button
              onClick={() => navigate(breadcrumb.path)}
              className="flex items-center space-x-1 text-gray-500 hover:text-gray-700 transition-colors duration-200"
            >
              <Home className="h-4 w-4" />
              <span>{breadcrumb.title}</span>
            </button>
          ) : (
            <button
              onClick={() => navigate(breadcrumb.path)}
              className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
            >
              {breadcrumb.title}
            </button>
          )}
          
          {index < breadcrumbs.length - 1 && (
            <ChevronRight className="h-4 w-4 text-gray-400" />
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;
