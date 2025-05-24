import { CSSProperties, ReactNode } from "react";

export type ButtonProps = {
  width?: string;
  height?: string;
  fill?: string;
  title?: string;
  icon?: ReactNode;
  style?: CSSProperties;
  algin?: string;
};
