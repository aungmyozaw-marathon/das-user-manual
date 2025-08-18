export interface MenuItem {
  id: string;
  title: string;
  path: string;
  icon?: string;
  children?: MenuItem[];
  isExpanded?: boolean;
}

export interface PageContent {
  id: string;
  title: string;
  path: string;
  content: string;
  sections?: PageSection[];
  lastUpdated?: string;
}

export interface PageSection {
  id: string;
  title: string;
  content: string;
  subsections?: PageSubsection[];
}

export interface PageSubsection {
  id: string;
  title: string;
  content: string;
}

export interface SearchResult {
  id: string;
  title: string;
  path: string;
  excerpt: string;
  type: 'page' | 'section' | 'subsection';
}

export interface Breadcrumb {
  title: string;
  path: string;
}
