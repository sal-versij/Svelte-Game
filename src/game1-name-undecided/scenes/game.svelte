<script lang="ts">
    import {Route, Router} from "svelte-routing";
    import Universe from './universe.svelte';
    import World from './world.svelte';
    import Game from '../models/Game.ts';

    const game = new Game();

</script>

<Router basepath="/g">
    <Route let:params path="/u/:universe">
        <Universe {game} {params}/>
    </Route>
    <Route let:params path="/u/:universe/:world">
        <World {game} {params}/>
    </Route>
</Router>
