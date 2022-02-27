import type Region from "./Region";
import type IBreadcrumbProvider from "./IBreadcrumbProvider";
import type Universe from "./Universe";

export default class World implements IBreadcrumbProvider {
    private readonly universe: Universe;
    private readonly regions: Region[];
    private readonly name: string;

    constructor(universe: Universe) {
        this.universe = universe;
        this.name = "World";
    }

    get Universe() {
        return this.universe;
    }

    * getBreadcrumbs(): Generator<{ name }> {
        yield* this.universe.getBreadcrumbs()
        yield {name: this.name};
    }
}