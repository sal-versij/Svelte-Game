<script lang="ts">
    import Game from "./Game.ts";

    import Breadcrumb from './components/breadcrumb.svelte'

    export let params: { universe: number };
    export let game: Game;

    const universe = game.getUniverse(params.universe);
</script>
<div class="container pt-3">
    <div class="row mb-3">
        <div class="col">
            <!-- actual location as a breadcrumb -->
            <Breadcrumb provider={universe}/>
        </div>
    </div>
    <div class="row row-cols-3 g-3 mb-3">
        <!-- cards layout -->
        <div class="col">
            <!-- - player card -->
            <div class="card h-100 bg-light text-white">
                <!--   - tab menu -->
                <div class="card-header">
                    <ul class="nav nav-tabs card-header-tabs">
                        <li class="nav-item">
                            <h5 class="nav-link disabled text-white">Player</h5>
                        </li>
                        <li class="nav-item">
                            <button aria-controls="stats" aria-selected="true" class="nav-link active"
                                    data-bs-target="#stats"
                                    data-bs-toggle="tab" id="stats-tab" role="tab" type="button">stats
                            </button>
                        </li>
                        <li class="nav-item">
                            <button aria-controls="inventory" aria-selected="false" class="nav-link"
                                    data-bs-target="#inventory"
                                    data-bs-toggle="tab" id="inventory-tab" role="tab" type="button">inventory
                            </button>
                        </li>
                        <li class="nav-item">
                            <button aria-controls="skills" aria-selected="false" class="nav-link"
                                    data-bs-target="#skills"
                                    data-bs-toggle="tab" id="skills-tab" role="tab" type="button">skills
                            </button>
                        </li>
                    </ul>
                </div>
                <div class="card-body tab-content">
                    <!--    - stats -->
                    <div aria-labelledby="stats-tab" class="tab-pane fade show active" id="stats" role="tabpanel">
                        stats
                    </div>
                    <!--    - inventory -->
                    <div aria-labelledby="inventory-tab" class="tab-pane fade" id="inventory" role="tabpanel">
                        inventory
                    </div>
                    <!--    - skills -->
                    <div aria-labelledby="skills-tab" class="tab-pane fade" id="skills" role="tabpanel">
                        skills
                    </div>
                </div>
            </div>
        </div>
        <!-- - quests -->
        <!-- - others -->
        <div class="col">
            <div class="card h-100 bg-light text-white">
                <div class="card-header">
                    <h5 class="card-title">Card title</h5>
                </div>
                <div class="card-body">

                </div>
            </div>
        </div>
    </div>
</div>
<style lang="scss">
</style>