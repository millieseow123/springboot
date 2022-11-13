import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Home',
    url: '/dashboard/home',
    iconComponent: { name: 'cil-home' },
  },  
  {
    name: 'About',
    url: '/dashboard/about',
    iconComponent: { name: 'cil-star' }
  },
  {
    name: 'Login/ Profile',
    url: '/dashboard/login',
    iconComponent: { name: 'cil-user' }
  },
  {
    title: true,
    name: 'Todo'
  },
  {
    name: 'Schedule',
    url: '/todo/schedule',
    iconComponent: { name: 'cil-calendar' }
  },
  {
    name: 'Notes',
    url: '/todo/notes',
    iconComponent: { name: 'cil-notes' }
  },
  {
    name: 'Navigation',
    url: '/todo/navigation',
    iconComponent: { name: 'cil-map' }
  },
  {
    title: true,
    name: 'Extras'
  },
  {
    name: 'Pages',
    url: '/login',
    iconComponent: { name: 'cil-star' },
    children: [
      {
        name: 'Register',
        url: '/register'
      },
      {
        name: 'Error 404',
        url: '/404'
      },
      {
        name: 'Error 500',
        url: '/500'
      }
    ]
  },
];
