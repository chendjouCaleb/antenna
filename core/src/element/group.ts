export class Group {
    private _children: Iterable<Element>;

    get children(): Iterable<Element> {
        return this._children;
    }

    public addChild(_element: Element): boolean{
        throw new Error("Not implemented method");
    }

    public removeChild(_element: Element): boolean {
        throw new Error("Not implemented method");
    }

    public hasChild(_element: Element): boolean {
        throw new Error("Not implemented method");
    }
}