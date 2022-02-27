import World from "./World";
import type IBreadcrumbProvider from "./IBreadcrumbProvider";

export default class Universe implements IBreadcrumbProvider {
    private readonly worlds: World[];
    private readonly name: string;

    constructor() {
        this.worlds = [new World(this)];
        this.name = 'Universe';
    }

    getWorld(world: number): World {
        return this.worlds[world];
    }

    * getBreadcrumbs(): Generator<{ name }> {
        yield {name: this.name};
    }
}