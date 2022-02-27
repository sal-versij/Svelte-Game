<script lang="ts">
    import type IBreadcrumbProvider from "../models/IBreadcrumbProvider";

    export let provider: IBreadcrumbProvider;
    const entries = [...provider.getBreadcrumbs()];
</script>
<nav aria-label="breadcrumb" class="bg-light rounded text-white">
    <ol class="breadcrumb mb-0">
        <li class="breadcrumb-item">
            <span class="visually-hidden">Root</span>
        </li>
        {#each entries as entry}
            <li class="breadcrumb-item">{entry.name}</li>
        {/each}
    </ol>
</nav>