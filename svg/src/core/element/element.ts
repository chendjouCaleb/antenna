export interface IElement {
    name: string;

    id: number;

    x: number;

    y: number;

    setAttribute(key: string, value: any);

    setAttributes(values: { [key: string]: any });

    getAttribute(key: string): any;

    removeAttribute(key: string): any;

    hasAttribute(key: string): boolean;


    rotate(angle: number);

    translateX(x: number);

    translateY(y: number);

    translate(x: number, y: number);

    scale(x: number);

    hide();

    show();

    moveTo(x: number, y: number): void;

    objectType(): string;
}