export interface ILabel {
    content: string;
    useTexPrinter: boolean;

    x: number;
    y: number;
}

export type LabelPosition = "top" | "bottom" | "left" | "right";