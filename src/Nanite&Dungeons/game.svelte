<script lang="ts">
    import {Route, Router} from "svelte-routing";
    import SplashScreen from './splashScreen.svelte';
    import MainMenu from './menu/main.svelte';
</script>

<Router basepath="/nanite-n-dungeons">
    <Route component="{SplashScreen}" path="/"/>
    <Route component="{MainMenu}" path="/menu/*"/>
    <Route component="{MainMenu}" path="/singleplayer"/>
</Router>

<style lang="scss"></style>