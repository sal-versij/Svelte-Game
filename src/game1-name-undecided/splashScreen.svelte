<script>
    import Feature from "./core/Feature";
    import FeatureableObject from "./core/FeatureableObject";
    import EnduranceFeature from "./features/EnduranceFeature";
    import VitalityFeature from "./features/VitalityFeature";
    import StrengthFeature from "./features/StrengthFeature";
    import Player from "./objects/Player";
    import {Link} from "svelte-routing";

    console.log({Feature, FeatureableObject, EnduranceFeature, VitalityFeature, StrengthFeature, Player});
    const player = new Player();
    console.log(player);
    console.log(player.getFeatures());
    console.log('Endurance', player instanceof EnduranceFeature);
    console.log('Strength', player instanceof StrengthFeature);
    console.log('Vitality', player instanceof VitalityFeature);
</script>

<div class="text-white">
    <Link to="g">Game</Link>
</div>