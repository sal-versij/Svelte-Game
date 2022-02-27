import Universe from "./models/Universe";

export default class Game {
    private readonly universes: Universe[];

    constructor() {
        this.universes = [new Universe()];
    }

    getUniverse(universe: number): Universe {
        return this.universes[universe];
    }
}