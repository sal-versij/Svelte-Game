// import type IFeature from "./IFeature";
import type Region from "./Region";
import type {QuadrantId} from "./Ids";
import type {BreadcrumbEntry} from "./BreadcrumbEntry";
import type {RegionId} from "./Ids";

export default class Quadrant {
    readonly id: QuadrantId;
    private readonly name: string;
    private readonly region: Region;

    // private readonly features: IFeature[]; // TODO: implement

    constructor(region: Region, id: RegionId) {
        this.id = id;
        this.name = `Quadrant ${id}`;
        this.region = region;
    }


    get Region() {
        return this.region;
    }

    get Route(): string {
        return `${this.region.Route}/${this.id}`;
    }

    * getBreadcrumbs(): Generator<BreadcrumbEntry> {
        yield* this.region.getBreadcrumbs()
        yield {
            to: this.Route,
            name: this.name
        };
    }
}