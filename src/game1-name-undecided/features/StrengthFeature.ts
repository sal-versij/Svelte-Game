import Feature from "../core/Feature";

export default class StrengthFeature extends Feature {
    static StrengthFeatureSymbol: symbol = Symbol.for('StrengthFeature');

    static get [Symbol.hasInstance]() {
        return Feature.hasInstance(StrengthFeature.StrengthFeatureSymbol);
    }

    // @ts-ignore
    [Feature.FeatureSymbol] = StrengthFeature.StrengthFeatureSymbol;

    settle(feature: Feature) {
        console.log(`${this.OwnFeatureSymbol.description} settle ${feature.OwnFeatureSymbol.description}`);
    }

    unsettle(feature: Feature) {
        console.log(`${this.OwnFeatureSymbol.description} unsettle ${feature.OwnFeatureSymbol.description}`);
    }
}