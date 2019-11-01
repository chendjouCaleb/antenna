export declare class Group {
    private _children;
    readonly children: Iterable<Element>;
    addChild(_element: Element): boolean;
    removeChild(_element: Element): boolean;
    hasChild(_element: Element): boolean;
}
