<script lang="ts">
    import Layout from './shared/_layout.svelte';
    import {Route, Router} from "svelte-routing";
    import Home from './home.svelte';
    import NotFound from './notFound.svelte';
    import NaniteNDungeons from './Nanite&Dungeons/game.svelte';
</script>

<Layout>
    <Router>
        <Route component="{Home}" path="/"/>
        <Route component="{NaniteNDungeons}" path="/nanite-n-dungeons/*"/>
        <Route component="{NotFound}"/>
    </Router>
</Layout>

<style global lang="scss">
  @import './bootstrap';
</style>
