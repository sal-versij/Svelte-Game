import Quadrant from "./Quadrant";
import type {RegionId, QuadrantId} from "./Ids";
import type IBreadcrumbProvider from "./IBreadcrumbProvider";
import type World from "./World";
import type {BreadcrumbEntry} from "./BreadcrumbEntry";

export default class Region implements IBreadcrumbProvider {
    readonly id: RegionId;
    private readonly name: string;
    private readonly world: World;
    private readonly quadrants: { [index: QuadrantId]: Quadrant };

    constructor(world: World, id: RegionId) {
        this.id = id;
        this.name = `Region ${id}`;
        this.world = world;
        this._registerQuadrant(new Quadrant(this, "0-0"));
        this._registerQuadrant(new Quadrant(this, "0-1"));
        this._registerQuadrant(new Quadrant(this, "1-0"));
        this._registerQuadrant(new Quadrant(this, "1-1"));
    }

    private _registerQuadrant(quadrant: Quadrant) {
        this.quadrants[quadrant.id] = quadrant;
    }

    get World() {
        return this.world;
    }

    get Route(): string {
        return `${this.world.Route}/${this.id}`;
    }

    * getBreadcrumbs(): Generator<BreadcrumbEntry> {
        yield* this.world.getBreadcrumbs()
        yield {
            to: this.Route,
            name: this.name
        };
    }
}