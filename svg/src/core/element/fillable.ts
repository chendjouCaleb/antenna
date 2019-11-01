export interface IFillable {
    fillColor: string;
    fillOpacity: number;

    hideFill();

    showFill();

    isHiddenFill(): boolean;
}