import Feature from "../core/Feature";

export default class EnduranceFeature extends Feature {
    static EnduranceFeatureSymbol: symbol = Symbol.for('EnduranceFeature');

    static get [Symbol.hasInstance]() {
        return Feature.hasInstance(EnduranceFeature.EnduranceFeatureSymbol);
    }

    // @ts-ignore
    [Feature.FeatureSymbol] = EnduranceFeature.EnduranceFeatureSymbol;

    settle(feature: Feature) {
        console.log(`${this.OwnFeatureSymbol.description} settle ${feature.OwnFeatureSymbol.description}`);
    }

    unsettle(feature: Feature) {
        console.log(`${this.OwnFeatureSymbol.description} unsettle ${feature.OwnFeatureSymbol.description}`);
    }
}
