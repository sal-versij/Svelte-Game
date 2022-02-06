<script lang="ts"></script>

<header>
    <!-- As a link -->
    <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">Home</a>
        </div>
    </nav>
</header>
<main>
    <slot/>
</main>
<footer class="font-small bg-light py-1 text-white text-center">
    © {new Date().getFullYear()} Copyright: Sal-versij
</footer>

<style global lang="scss">
  html, body {
    margin: 0;
    min-height: 100%;
  }

  body {
    height: 100vh;
    display: flex;
    flex-direction: column;

    header {
    }

    main {
      flex-grow: 1;
    }

    footer {
    }
  }
</style>
