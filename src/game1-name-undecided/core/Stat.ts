export default class Stat {
    constructor(value: number) {
        this._value = value;
    }

    private _value: number;

    get value(): number {
        return this._value;
    }
}