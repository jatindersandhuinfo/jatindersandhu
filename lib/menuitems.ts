import type { MenuItem } from '@/lib/type/menu';

import Home from '@/app/components/svg/home';
import Service from '@/app/components/svg/service';
import CV from '@/app/components/svg/cv';
import Portfolio from '@/app/components/svg/portfolio';
import Contact from '@/app/components/svg/contact';

export const menuItems: MenuItem[] = [
  { name: 'Home', link: '/', icon: Home },
  { name: 'Services', link: '/services', icon: Service },
  { name: 'Portfolio', link: '/portfolio', icon: CV },
  { name: 'Speaking', link: '/speaking', icon: Portfolio },
  { name: 'Contact', link: '/contact', icon: Contact },
];