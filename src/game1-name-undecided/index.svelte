<script lang="ts">
    import {Route, Router} from "svelte-routing";
    import SplashScreen from './splashScreen.svelte';
    import MainMenu from './scenes/menu/main.svelte';
    import Game from './scenes/game.svelte';
</script>

<Router basepath="/game/1">
    <Route component="{SplashScreen}" path="/"/>
    <Route component="{MainMenu}" path="/menu/*"/>
    <Route component="{Game}" path="/g"/>
</Router>

