import Feature from "./Feature";

export default class FeatureableObject {
    [index: symbol]: Feature;

    addFeature(featureGen: Feature | { new(): Feature }): void {
        const features = this.getFeatures();

        let newFeature: Feature;
        if (featureGen instanceof Feature) {
            newFeature = featureGen;
        } else {
            newFeature = new featureGen();
        }

        this[newFeature.OwnFeatureSymbol] = newFeature;

        for (let feature of features) {
            newFeature.settle(feature);
            feature.settle(newFeature);
        }
    }

    addFeatures(...features: (Feature | { new(): Feature })[]): void {
        for (let feature of features) {
            this.addFeature(feature);
        }
    }

    getFeature(featureSymbol: symbol): Feature {
        return this[featureSymbol];
    }

    hasFeature(featureSymbol: symbol): boolean {
        return this[featureSymbol] != undefined;
    }

    removeFeature(featureSymbol: symbol) {
        const feature = this.getFeature(featureSymbol);
        delete this[featureSymbol];
        const features = this.getFeatures();

        for (let f of features) {
            feature.unsettle(f);
            f.unsettle(feature);
        }
    }

    getFeatures(): Feature[] {
        return Object.getOwnPropertySymbols(this).map(symbol => this[symbol]).filter(feature => feature instanceof Feature);
    }
}