export enum GaugeMofifierTypeEnum {
    FLAT,
    PERCENTAGE,
}

export default class Gauge {
    private _value: number = 0;
    private flatModifiers: Array<() => number> = [];
    private percentageModifiers: Array<() => number> = [];

    get value(): number {
        return this._value;
    }

    set value(value: number) {
        this._value = value > this.max ? this.max : value;
    }

    get max(): number {
        console.log(this.flatModifiers, this.percentageModifiers);
        console.log(this.flatModifiers.map(x => x()), this.percentageModifiers.map(x => x()));
        console.log(this.flatModifiers.reduce((acc, modifier) => acc + modifier(), 0), this.percentageModifiers.reduce((acc, modifier) => acc + modifier(), 1));
        console.log(this.flatModifiers.reduce((acc, modifier) => acc + modifier(), 0) * this.percentageModifiers.reduce((acc, modifier) => acc + modifier(), 1));
        return this.flatModifiers.reduce((acc, modifier) => acc + modifier(), 0) * this.percentageModifiers.reduce((acc, modifier) => acc + modifier(), 1);
    }

    subscribe(modifier: () => number, type: GaugeMofifierTypeEnum): void {
        if (type === GaugeMofifierTypeEnum.FLAT) {
            this.flatModifiers.push(modifier);
        } else if (type === GaugeMofifierTypeEnum.PERCENTAGE) {
            this.percentageModifiers.push(modifier);
        }
    }

    unsubscribe(modifier: () => number, type: GaugeMofifierTypeEnum): void {
        if (type === GaugeMofifierTypeEnum.FLAT) {
            const index = this.flatModifiers.indexOf(modifier);
            if (index > -1) {
                this.flatModifiers.splice(index, 1);
            }

        } else if (type === GaugeMofifierTypeEnum.PERCENTAGE) {
            const index = this.percentageModifiers.indexOf(modifier);
            if (index > -1) {
                this.percentageModifiers.splice(index, 1);
            }

        }
    }
}