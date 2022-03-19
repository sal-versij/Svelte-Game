import Feature from "../core/Feature";
import Gauge from "../core/Gauge";
import Stat from "../core/Stat";
import {MofifierTypeEnum} from "../core/MofifierTypeEnum";

export default class VitalityFeature extends Feature {
    static VitalityFeatureSymbol: symbol = Symbol.for('VitalityFeature');

    static get [Symbol.hasInstance]() {
        return Feature.hasInstance(VitalityFeature.VitalityFeatureSymbol);
    }

    // @ts-ignore

    [Feature.FeatureSymbol] = VitalityFeature.VitalityFeatureSymbol;

    public readonly hp: Gauge = new Gauge();
    public readonly vitality: Stat = new Stat(10);

    constructor() {
        super();
        this.hp.maxModifier.subscribe(() => {
            return Math.round(10 * Math.LOG2E * Math.log2(this.vitality.value));
        }, MofifierTypeEnum.FLAT);
        this.hp.value = this.hp.max;
    }

    settle(feature: Feature) {
        console.log(`${this.OwnFeatureSymbol.description} settle ${feature.OwnFeatureSymbol.description}`);
    }

    unsettle(feature: Feature) {
        console.log(`${this.OwnFeatureSymbol.description} unsettle ${feature.OwnFeatureSymbol.description}`);
    }
}