import { CSSProperties } from "react";

export type MenuItem = {
  name: string;
  link: string;
  icon: React.ElementType;
};

export type RightMenuProps = {
  items: MenuItem[];
  style?: CSSProperties;
};