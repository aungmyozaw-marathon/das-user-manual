import { PageContent, PageSection, PageSubsection } from '../types';

// Mock content generator - in a real app, this would fetch from an API or CMS
export const getPageContent = (pathname: string): PageContent | null => {
  // Generate content based on the pathname
  const path = pathname.toLowerCase();
  

  // Default content for other pages
  return {
    id: 'default',
    title: 'Documentation',
    path: pathname,
    content: `This page contains documentation for ${pathname}. In a full implementation, this would contain comprehensive content specific to this section.`,
    lastUpdated: '2024-01-15',
    sections: [
      {
        id: 'overview',
        title: 'Overview',
        content: `This section provides an overview of the features and functionality available in this area of DAS.`
      },
      {
        id: 'getting-started',
        title: 'Getting Started',
        content: `Learn how to get started with this feature and configure it for your business needs.`
      },
      {
        id: 'advanced-features',
        title: 'Advanced Features',
        content: `Explore advanced features and customization options available in this section.`
      }
    ]
  };
};
