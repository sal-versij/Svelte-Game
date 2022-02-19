import type IFeature from "./IFeature";
import type {FeatureId} from "./Ids";

export default class Dungeon implements IFeature {
    id: FeatureId;
    name: string;
    description: string;
    image: string;
}