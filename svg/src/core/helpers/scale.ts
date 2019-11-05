export interface IScale<TInput, TOutput> {
    scale(value: TInput): TOutput;
}

export class LinearScale implements IScale<number, number> {
    constructor(public input: [number, number], public output: [number, number]) {

    }

    scale(value: number) {
        const slope = (this.output[1] - this.output[0]) / (this.input[1] - this.input[0]);
        const ax = slope * value;
        const b = this.output[0] - slope * this.input[0];
        return ax + b;
    }


}