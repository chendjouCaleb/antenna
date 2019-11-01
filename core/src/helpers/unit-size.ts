/**
 * Represent a unit of length used to compute a size of graph element in pixel.
 * @author Chendjou deGrace
 */
export class UnitSize {
    /**
     * The centimeter unit of length.
     */
    public static cmUnitSize = new UnitSize(37.79527559);


    public static defaultUnitSize = new UnitSize(37.79527559/2);


    /**
     * The em unit of length.
     */
    public static emUnitSize = new UnitSize(16);



    /**
     *
     * @param size The size of one unit in pixel. ex: 1cm => 37,79 px
     * @param toPixel Converter that convert value to pixel value.
     */
    constructor(public size: number, public toPixel: (value: number) => number = x => x * size) {

    }
}