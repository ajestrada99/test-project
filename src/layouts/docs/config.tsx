import type { ReactNode } from 'react';
import { paths } from '../../paths';

interface Item {
  icon?: ReactNode;
  items?: Item[];
  label?: ReactNode;
  path?: string;
  title: string;
}

export interface Section {
  items: Item[];
  subheader?: string;
}

export const sections: Section[] = [
  {
    subheader: 'Overview',
    items: [
       {
         title: 'Welcome',
         path: ''
       },
       {
         title: 'Getting Started',
         path: ''
       },
       {
         title: 'Dependencies',
         path: ''
       },
       {
         title: 'Environment Variables',
         path: ''
       },
       {
         title: 'Deployment',
         path: ''
       },
       {
         title: 'Routing',
         path: ''
       },
       {
         title: 'Theming',
         path:''
       },
       {
         title: 'Redux',
         path:''
       },
       {
         title: 'Server Calls',
         path: ''
       },
       {
         title: 'Settings',
         path: ''
       },
       {
         title: 'RTL',
         path: ''
       },
       {
         title: 'Mapbox',
         path: ''
       },
       {
         title: 'Internationalization',
         path: ''
       }
    ]
  },
  {
    subheader: 'Authentication',
    items: [
      {
        title: 'Amplify',
        path: ''
      },
      {
        title: 'Auth0',
        path: ''
      },
      {
        title: 'Firebase',
        path: ''
      },
      {
        title: 'JWT',
        path: ''
      }
    ]
  },
  {
    subheader: 'Guards',
    items: [
      {
        title: 'Auth Guard',
        path: ''
      },
      {
        title: 'Guest Guard',
        path: ''
      },
      {
        title: 'Role Based Guard',
        path: ''
      }
    ]
  },
  {
    subheader: 'Analytics',
    items: [
      {
        title: 'Introduction',
        path: ''
      },
      {
        title: 'Configuration',
        path: ''
      },
      {
        title: 'Event Tracking',
        path: ''
      }
    ]
  },
  {
    subheader: 'Support',
    items: [
      {
        title: 'Changelog',
        path:''
      },
      {
        title: 'Contact',
        path: ''
      },
      {
        title: 'Further Support',
        path: ''
      }
    ]
  }
];
