import { IconType } from 'react-icons';

import {
  FaWordpress,
  FaLaravel,
  FaShopify,
  FaBootstrap,
  FaSass,
  FaGithub,
  FaAws,
} from 'react-icons/fa';
import {
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiFirebase,
  SiTailwindcss,
  SiDigitalocean,
  SiJson,
  SiJquery
} from 'react-icons/si';

export interface SkillProps {
  name: string;
  Icon: IconType;
  color: string;
}

export const groupedExtraSkills: SkillProps[] = [
  { name: 'WordPress', Icon: FaWordpress, color: '#21759b' },
  { name: 'Laravel', Icon: FaLaravel, color: '#ff2d20' },
  { name: 'Shopify', Icon: FaShopify, color: '#96bf48' },
  { name: 'MongoDB', Icon: SiMongodb, color: '#47a248' },
  { name: 'MySQL', Icon: SiMysql, color: '#00758f' },
  { name: 'PostgreSQL', Icon: SiPostgresql, color: '#336791' },
  { name: 'Firebase', Icon: SiFirebase, color: '#ffca28' },
  { name: 'Bootstrap', Icon: FaBootstrap, color: '#7952b3' },
  { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06b6d4' },
  { name: 'Sass', Icon: FaSass, color: '#cc6699' },
  { name: 'jQuery', Icon: SiJquery, color: '#0769ad' },
  { name: 'GitHub', Icon: FaGithub, color: '#181717' },
  { name: 'AWS', Icon: FaAws, color: '#ff9900' },
  { name: 'DigitalOcean', Icon: SiDigitalocean, color: '#0080ff' },
  { name: 'REST API', Icon: SiJson, color: '#e34c26' },
];