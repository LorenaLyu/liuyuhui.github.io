export interface NewsItem {
  date: string;
  content: string;
  highlight?: boolean;
  tags?: string[];
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: string;
  abstract: string;
  image: string;
  links: {
    label: string;
    url: string;
    icon?: 'pdf' | 'code' | 'web' | 'supp';
  }[];
  highlight?: boolean;
}

export interface TeachingItem {
  code: string;
  title: string;
  role: string;
  period: string;
  link?: string;
}