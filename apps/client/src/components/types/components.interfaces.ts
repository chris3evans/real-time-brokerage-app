import type { AppColourType } from "@/types/app.enums";

export interface ButtonComponentProps {
    label: string;
    backgroundColor?: AppColourType;
    color?: AppColourType;
}