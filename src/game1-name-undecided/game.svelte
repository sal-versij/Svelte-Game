<script lang="ts">
    import {Route, Router} from "svelte-routing";
    import Universe from './universe.svelte';
    import World from './world.svelte';
    import Game from './Game.ts';

    const game = new Game();

</script>

<Router basepath="/game/1/g">
    <Route let:params path="/u/:universe">
        <Universe {game} {params}/>
    </Route>
    <Route let:params path="/u/:universe/:world">
        <World {game} {params}/>
    </Route>
    <Route component="{Universe}" path="/u/:universe"/>
</Router>
