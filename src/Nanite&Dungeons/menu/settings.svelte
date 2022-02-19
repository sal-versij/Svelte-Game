<script lang="ts">
    import {Link} from "svelte-routing";
</script>

<div class="d-flex flex-column justify-content-evenly">
    <Link to="../menu" class="btn btn-light my-2">
        <i class="fas fa-chevron-left"></i>
        Return
    </Link>
    <Link to="settings/graphics" class="btn btn-light my-2">Graphics</Link>
    <Link to="settings/audio" class="btn btn-light my-2">Audio</Link>
    <Link to="settings/controls" class="btn btn-light my-2">Controls</Link>
</div>