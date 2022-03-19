import {MofifierTypeEnum} from "./MofifierTypeEnum";

export default class Modifier {
    private flatModifiers: Array<() => number> = [];
    private percentageModifiers: Array<() => number> = [];

    calculate(base: number): number {
        return this.flatModifiers.reduce((acc, modifier) => acc + modifier(), base) * this.percentageModifiers.reduce((acc, modifier) => acc + modifier(), 1);
    }


    subscribe(modifier: () => number, type: MofifierTypeEnum): void {
        if (type === MofifierTypeEnum.FLAT) {
            this.flatModifiers.push(modifier);
        } else if (type === MofifierTypeEnum.PERCENTAGE) {
            this.percentageModifiers.push(modifier);
        }
    }

    unsubscribe(modifier: () => number, type: MofifierTypeEnum): void {
        if (type === MofifierTypeEnum.FLAT) {
            const index = this.flatModifiers.indexOf(modifier);
            if (index > -1) {
                this.flatModifiers.splice(index, 1);
            }
        } else if (type === MofifierTypeEnum.PERCENTAGE) {
            const index = this.percentageModifiers.indexOf(modifier);
            if (index > -1) {
                this.percentageModifiers.splice(index, 1);
            }
        }
    }
}