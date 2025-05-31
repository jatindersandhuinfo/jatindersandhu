import type { MenuItem } from '@/lib/type/menu';

import { GiSkills } from "react-icons/gi";
import { MdCastForEducation } from "react-icons/md";
import { MdWorkOutline } from "react-icons/md";
import Home from '@/app/components/svg/home';
import Portfolio from '@/app/components/svg/portfolio';
import Contact from '@/app/components/svg/contact';
import ServiceSvg from '@/app/components/svg/service';

export const menuItems: MenuItem[] = [
  { name: 'Home', link: '/', icon: Home },
  { name: 'Services', link: 'services', icon: ServiceSvg },
  { name: 'Skill', link: 'skill', icon: GiSkills },
  { name: 'Speaking', link: 'speaking', icon: MdCastForEducation },
  { name: 'Work', link: 'work', icon: MdWorkOutline },
  { name: 'Portfolio', link: 'portfolio', icon: Portfolio },
  { name: 'Contact', link: 'contact', icon: Contact },
];