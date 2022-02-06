<script lang="ts">
    import {Route, Router} from "svelte-routing";
    import SplashScreen from './splashScreen.svelte';
    import MainMenu from './menu.svelte';
</script>

<Router basepath="/nanite-n-dungeons">
    <Route component="{SplashScreen}" path="/"/>
    <Route component="{MainMenu}" path="/menu"/>
</Router>

<style lang="scss"></style>