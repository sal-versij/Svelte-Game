import FeatureableObject from "../core/FeatureableObject";
import EnduranceFeature from "../features/EnduranceFeature";
import VitalityFeature from "../features/VitalityFeature";
import StrengthFeature from "../features/StrengthFeature";

export default class Player extends FeatureableObject {
    constructor() {
        super();
        this.addFeatures(VitalityFeature, EnduranceFeature, StrengthFeature);
    }
}