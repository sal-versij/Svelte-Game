<script lang="ts">
    import Game from "../models/Game.ts";
    import Breadcrumb from '../components/breadcrumb.svelte'

    export let params: { universe: number, world: number };
    export let game: Game;
    if (!params) {
        throw new Error("No params");
    }
    if (!game) {
        throw new Error("Game not initialized")
    }
    const universe = game.getUniverse(params.universe);
    const world = universe.getWorld(params.world);
</script>
<div class="container pt-3">
    <div class="row mb-3">
        <div class="col">
            <!-- actual location as a breadcrumb -->
            <Breadcrumb provider={world}/>
        </div>
    </div>
</div>