import Universe from "./Universe";
import type {UniverseId} from "./Ids";

export default class Game {
    private readonly universes: { [index: UniverseId]: Universe };

    constructor() {
        this._registerUniverse(new Universe(this, '0'));
    }

    private _registerUniverse(universe: Universe): void {
        this.universes[universe.id] = universe;
    }

    getUniverse(universe: number): Universe {
        return this.universes[universe];
    }
}