import type {FeatureId} from "./Ids";

export default interface IFeature {
    id: FeatureId
    name: string;
    description: string;
    image: string;
}