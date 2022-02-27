import World from "./World";
import type IBreadcrumbProvider from "./IBreadcrumbProvider";
import type {BreadcrumbEntry} from "./BreadcrumbEntry";
import type {UniverseId, WorldId} from "./Ids";
import type Game from "./Game";

export default class Universe implements IBreadcrumbProvider {
    public readonly id: UniverseId;
    private readonly name: string;
    private readonly game: Game;
    private readonly worlds: { [index: WorldId]: World };

    constructor(game: Game, id: UniverseId) {
        this.id = id;
        this.game = game;
        this.name = `Universe ${id}`;
        this._registerWorld(new World(this, '0'));
        this._registerWorld(new World(this, '1'));
    }

    private _registerWorld(world: World) {
        this.worlds[world.id] = world;
    }

    get Game(): Game {
        return this.game;
    }

    get Route(): string {
        return `u/${this.id}`;
    }

    getWorld(world: number): World {
        return this.worlds[world];
    }

    * getBreadcrumbs(): Generator<BreadcrumbEntry> {
        yield {
            to: this.Route,
            name: this.name
        };
    }
}