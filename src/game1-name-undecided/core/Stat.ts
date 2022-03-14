import type Gauge from "./Gauge";
import {GaugeMofifierTypeEnum} from "./Gauge";

export default class Stat {
    private _value: number = 10;

    constructor(gauge: Gauge) {
        gauge.subscribe(this.calculateGaugeModifier.bind(this), GaugeMofifierTypeEnum.FLAT);
    }

    calculateGaugeModifier(): number {
        return Math.round(10 * Math.LOG2E * Math.log2(this._value));
    }
}