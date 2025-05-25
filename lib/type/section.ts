import { CSSProperties } from "react";

export type SectionProps = {
    id?:string;
    title: string;
    children: React.ReactNode;
    desc?: string;
    style?: CSSProperties;
};