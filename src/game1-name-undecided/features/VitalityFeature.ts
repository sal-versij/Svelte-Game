import Feature from "../core/Feature";
import Gauge from "../core/Gauge";
import Stat from "../core/Stat";

export default class VitalityFeature extends Feature {
    static VitalityFeatureSymbol: symbol = Symbol.for('VitalityFeature');

    static get [Symbol.hasInstance]() {
        return Feature.hasInstance(VitalityFeature.VitalityFeatureSymbol);
    }

    // @ts-ignore

    [Feature.FeatureSymbol] = VitalityFeature.VitalityFeatureSymbol;

    public readonly hp: Gauge = new Gauge();
    public readonly stat: Stat = new Stat(this.hp);

    constructor() {
        super();
    }

    settle(feature: Feature) {
        console.log(`${this.OwnFeatureSymbol.description} settle ${feature.OwnFeatureSymbol.description}`);
    }

    unsettle(feature: Feature) {
        console.log(`${this.OwnFeatureSymbol.description} unsettle ${feature.OwnFeatureSymbol.description}`);
    }
}