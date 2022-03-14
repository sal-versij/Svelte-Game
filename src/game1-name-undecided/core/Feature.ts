import FeatureableObject from "./FeatureableObject";

const FeatureSymbol = Symbol.for('Feature');

export default abstract class Feature {
    static FeatureSymbol: symbol = FeatureSymbol;

    static hasInstance(ownSymbol) {
        return function (instance: any): boolean {
            if (!(instance instanceof FeatureableObject)) {
                return instance[FeatureSymbol] === ownSymbol;
            }

            const features = instance.getFeatures();

            for (const feature of features) {
                if (feature.OwnFeatureSymbol === ownSymbol) {
                    return true;
                }
            }
            return false;
        }
    }

    get OwnFeatureSymbol(): symbol {
        return this[FeatureSymbol];
    }

    abstract settle(feature: Feature);

    abstract unsettle(feature: Feature);
}

