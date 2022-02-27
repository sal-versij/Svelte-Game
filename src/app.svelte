<script lang="ts">
    import Layout from './shared/_layout.svelte';
    import {Route, Router} from "svelte-routing";
    import Home from './home.svelte';
    import NotFound from './notFound.svelte';
    import Game1 from './game1-name-undecided/index.svelte';
</script>

<Layout>
    <Router>
        <Route component="{Home}" path="/"/>
        <Route component="{Game1}" path="/game/1/*"/>
        <Route component="{NotFound}"/>
    </Router>
</Layout>

<style global lang="scss">
  @import './bootstrap';
</style>
