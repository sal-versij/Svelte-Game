<script lang="ts">
    import Layout from './shared/_Layout.svelte';
</script>

<Layout>
    <div class="container">
        <div class="row">
            <div class="col">
                <h1>Hello!</h1>
            </div>
        </div>
    </div>
</Layout>

<style global lang="scss">
  /*Variable overrides for bootstrap*/
  $primary: #19197c;
  $secondary: #fd6400;
  $light: #d8d8d8;

  @import "bootstrap/scss/bootstrap";
</style>
