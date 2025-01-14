import type { LinkResolverFunction } from '@prismicio/helpers';

export const linkResolver: LinkResolverFunction = doc => {
  switch (doc.type) {
    case 'site_navigation': {
      return '/';
    }
    case 'faq': {
      return '/faq/';
    }
    case 'team_contents': {
      return '/';
    }
    case 'teams_article': {
      if (doc.uid) {
        return `/jobs/article/${doc.uid}`;
      }
    }
  }
  return '/';
};
