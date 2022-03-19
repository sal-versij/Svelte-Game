import EventEmitter from "./EventEmitter";
import Modifier from "./Modifier";

export default class Gauge {
    private _value: number = 0;

    public maxModifier: Modifier = new Modifier();
    public valueChanged: EventEmitter<number> = new EventEmitter();

    get value(): number {
        return this._value;
    }

    set value(value: number) {
        this._value = value > this.max ? this.max : value;
        this.valueChanged.emit(this._value);
    }

    get max(): number {
        return this.maxModifier.calculate(0);
    }
}