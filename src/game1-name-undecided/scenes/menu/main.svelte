<script lang="ts">
    import {Route, Router} from "svelte-routing";
    import Menu from "./menu.svelte";
    import Settings from "./settings.svelte";
    import GraphicsSettings from "./graphicsSettings.svelte";
    import AudioSettings from "./audioSettings.svelte";
    import ControlsSettings from "./controlsSettings.svelte";
</script>
<div class="h-100 d-flex justify-content-center align-items-center">
    <Router basepath="/nanite-n-dungeons/menu">
        <Route component={Menu} path="/"/>
        <Route component={Settings} path="/settings"/>
        <Route component={GraphicsSettings} path="/settings/graphics"/>
        <Route component={AudioSettings} path="/settings/audio"/>
        <Route component={ControlsSettings} path="/settings/controls"/>
    </Router>
</div>
