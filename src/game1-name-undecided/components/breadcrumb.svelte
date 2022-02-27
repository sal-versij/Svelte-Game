<script lang="ts">
    import type IBreadcrumbProvider from "../models/IBreadcrumbProvider";
    import {Link} from "svelte-routing";
    import type BreadcrumbEntry from "../models/BreadcrumbEntry";

    import {getContext} from "svelte";
    import {ROUTER} from "svelte-routing/src/contexts";

    const {base} = getContext(ROUTER);
    $: console.log($base);

    export let provider: IBreadcrumbProvider;

    if (!provider) {
        throw new Error("BreadcrumbProvider is not set");
    }

    const entries: BreadcrumbEntry[] = [...provider.getBreadcrumbs()];
    console.log(entries);

    function getLinkProps({href, isPartiallyCurrent, isCurrent}) {
        const isActive = href === "/" ? isCurrent : isPartiallyCurrent || isCurrent;

        const props = {class: "text-decoration-none link-white"};
        if (isActive) {
            props.class += " active";
        }
        return props;
    }
</script>
<nav aria-label="breadcrumb" class="bg-light rounded text-white">
    <ol class="breadcrumb mb-0">
        <li class="breadcrumb-item">
            <span class="visually-hidden">Root</span>
        </li>
        {#each entries as entry}
            <li class="breadcrumb-item">
                <Link {...entry} getProps={getLinkProps}>{entry.name}</Link>
            </li>
        {/each}

    </ol>
</nav>