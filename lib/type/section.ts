import { CSSProperties } from "react";

export type SectionProps = {
    title: string;
    children: React.ReactNode;
    desc?: string;
    style?: CSSProperties;
};