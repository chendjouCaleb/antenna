export interface IBordered {
    borderWidth: number;
    borderColor: string;
    borderDashArray: number;
    borderOpacity: number;

    hideBorder(): void;

    showBorder(): void;

    isHiddenBorder(): boolean;
}

export interface IRadiusShape {
    borderRadius: number;
}