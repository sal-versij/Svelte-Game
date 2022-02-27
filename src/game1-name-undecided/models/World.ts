import Region from "./Region";
import type IBreadcrumbProvider from "./IBreadcrumbProvider";
import type Universe from "./Universe";
import type {RegionId, WorldId} from "./Ids";
import type {BreadcrumbEntry} from "./BreadcrumbEntry";

export default class World implements IBreadcrumbProvider {
    readonly id: WorldId;
    private readonly universe: Universe;
    private readonly name: string;
    private readonly regions: { [index: RegionId]: Region };

    constructor(universe: Universe, id: WorldId) {
        this.id = id;
        this.name = `World ${id}`;
        this.universe = universe;
        this._registerRegion(new Region(this, '0'));
        this._registerRegion(new Region(this, '1'));
    }

    private _registerRegion(region: Region) {
        this.regions[region.id] = region;
    }

    get Universe() {
        return this.universe;
    }

    get Route(): string {
        return `${this.universe.Route}/${this.id}`;
    }

    getRegion(region: RegionId): Region {
        return this.regions[region];
    }

    * getBreadcrumbs(): Generator<BreadcrumbEntry> {
        yield* this.universe.getBreadcrumbs()
        yield {
            to: this.Route,
            name: this.name
        };
    }
}