<script lang="ts">
    export let error: Error;
</script>

<div class="alert alert-error" role="alert">
    {error.name}: {error.message}
</div>