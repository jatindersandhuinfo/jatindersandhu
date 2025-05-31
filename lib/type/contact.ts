import { ComponentType } from "react";

export interface IconProps {
  fill?: string;
  className?: string;
}

export interface ContactItem {
  label: string;
  value: string;
  name?: string;
  color: string;
  SvgIcon?: ComponentType<IconProps>;
}

export interface ContactCardData {
  items: ContactItem[];
}
